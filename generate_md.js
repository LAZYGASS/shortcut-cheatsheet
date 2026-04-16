const fs = require('fs');

function formatAsMarkdown(title, dataArray) {
    let md = `# ${title}\n\n`;

    dataArray.forEach(category => {
        md += `## ${category.icon} ${category.category}\n\n`;
        md += `| 설명 (Description) | 단축키 / 문법 (Shortcut) |\n`;
        md += `|:---|:---|\n`;

        category.items.forEach(item => {
            // Join keys with a space or '+' depending on context
            let keysText = item.keys.join(title.includes('Markdown') ? ' ' : ' + ');
            md += `| ${item.desc} | \`${keysText}\` |\n`;
        });
        md += `\n`;
    });

    return md;
}

// 1. Excel
let excelCode = fs.readFileSync('js/app.js', 'utf8');
// remove DOM logic to eval safely
let excelObjStr = excelCode.split('function renderShortcuts')[0];
let excelData;
eval(excelObjStr + '; excelData = shortcuts;');
fs.writeFileSync('md/excel_shortcuts.md', formatAsMarkdown('Excel Shortcuts (Windows)', excelData));

// 2. Sheets
let sheetsCode = fs.readFileSync('js/sheets.js', 'utf8');
let sheetsObjStr = sheetsCode.split('function renderShortcuts')[0];
let sheetsData;
eval(sheetsObjStr + '; sheetsData = sheetsShortcuts;');
fs.writeFileSync('md/sheets_shortcuts.md', formatAsMarkdown('Google Sheets Shortcuts', sheetsData));

// 3. Markdown
let mdCode = fs.readFileSync('js/md.js', 'utf8');
let mdObjStr = mdCode.split('function renderShortcuts')[0];
let mdData;
eval(mdObjStr + '; mdData = mdShortcuts;');
fs.writeFileSync('md/markdown_shortcuts.md', formatAsMarkdown('Markdown & Obsidian Syntax', mdData));

console.log("Markdown files generated successfully!");

// 4. Google Search
let googleCode = fs.readFileSync('js/google.js', 'utf8');
let googleObjStr = googleCode.split('function renderShortcuts')[0];
let googleData;
eval(googleObjStr + '; googleData = googleShortcuts;');
fs.writeFileSync('md/google_search_shortcuts.md', formatAsMarkdown('Google Search Commands', googleData));

// 5. Windows OS
let winCode = fs.readFileSync('js/win.js', 'utf8');
let winObjStr = winCode.split('function renderShortcuts')[0];
let winData;
eval(winObjStr + '; winData = winShortcuts;');
fs.writeFileSync('md/win_shortcuts.md', formatAsMarkdown('Windows OS Shortcuts', winData));

console.log("Markdown files generated successfully!");
