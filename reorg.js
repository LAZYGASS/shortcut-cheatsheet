const fs = require('fs');
const path = require('path');

// 1. Create directories
if (!fs.existsSync('md')) fs.mkdirSync('md');
if (!fs.existsSync('html')) fs.mkdirSync('html');

// 2. Move HTML files
const htmlFiles = ['index.html', 'sheets.html', 'md.html', 'google.html'];
htmlFiles.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        // Fix CSS references
        content = content.replace(/href="css\/style.css"/g, 'href="../css/style.css"');
        // Fix JS references
        content = content.replace(/src="js\/([^"]+)"/g, 'src="../js/$1"');

        fs.writeFileSync(path.join('html', file), content);
        fs.unlinkSync(file); // remove original
    }
});

// 3. Create root index.html redirect for GitHub Pages
const redirectHtml = `<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="refresh" content="0; url=html/index.html">
    <title>Redirecting...</title>
</head>
<body>
    <script>window.location.replace("html/index.html");</script>
</body>
</html>`;
fs.writeFileSync('index.html', redirectHtml);

// 4. Update generate_md.js
let genCode = fs.readFileSync('generate_md.js', 'utf8');
// Change output paths to md/
genCode = genCode.replace(/'([a-z_]+_shortcuts\.md)'/g, "'md/$1'");

// Add Google search logic
if (!genCode.includes('google_search_shortcuts.md')) {
    genCode += `
// 4. Google Search
let googleCode = fs.readFileSync('js/google.js', 'utf8');
let googleObjStr = googleCode.split('function renderShortcuts')[0];
let googleData;
eval(googleObjStr + '; googleData = googleShortcuts;');
fs.writeFileSync('md/google_search_shortcuts.md', formatAsMarkdown('Google Search Commands', googleData));
`;
}
fs.writeFileSync('generate_md.js', genCode);

console.log("Reorganization complete!");
