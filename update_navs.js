const fs = require('fs');

// 1. Update HTML files to add AutoCad tab
const htmlFiles = ['html/index.html', 'html/sheets.html', 'html/md.html', 'html/google.html', 'html/win.html'];

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Naively insert before </nav> if cad.html not present
    if (!content.includes('cad.html')) {
        content = content.replace('</nav>', '    <a href="cad.html" class="app-tab">AutoCAD</a>\n            </nav>');
        fs.writeFileSync(file, content);
    }
});

// 2. Update inject_links.js to include cad
let injectCode = fs.readFileSync('inject_links.js', 'utf8');
if (!injectCode.includes("'cad.html'")) {
    injectCode = injectCode.replace("'win.html': 'win_shortcuts.md'", "'win.html': 'win_shortcuts.md',\n    'cad.html': 'cad_shortcuts.md'");
    fs.writeFileSync('inject_links.js', injectCode);
}

// 3. Update generate_md.js to include cad
let genCode = fs.readFileSync('generate_md.js', 'utf8');
if (!genCode.includes('cad_shortcuts.md')) {
    genCode += `
// 6. AutoCAD
let cadCode = fs.readFileSync('js/cad.js', 'utf8');
let cadObjStr = cadCode.split('function renderShortcuts')[0];
let cadData;
eval(cadObjStr + '; cadData = cadShortcuts;');
fs.writeFileSync('md/cad_shortcuts.md', formatAsMarkdown('AutoCAD Shortcuts', cadData));
`;
    fs.writeFileSync('generate_md.js', genCode);
}

console.log("Updated navs, links, and md generators for CAD!");
