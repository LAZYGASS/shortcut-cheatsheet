const fs = require('fs');

const links = {
    'index.html': 'excel_shortcuts.md',
    'sheets.html': 'sheets_shortcuts.md',
    'md.html': 'markdown_shortcuts.md',
    'google.html': 'google_search_shortcuts.md',
    'win.html': 'win_shortcuts.md',
    'cad.html': 'cad_shortcuts.md'
};

for (const [file, mdFile] of Object.entries(links)) {
    const filePath = `html/${file}`;
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');

        const footerTag = '</footer>';
        const mdLinkHTML = `
        <div style="margin-top: 12px;">
            <a href="https://github.com/LAZYGASS/shortcut-cheatsheet/blob/master/md/${mdFile}" target="_blank" style="display:inline-block; padding: 6px 12px; background: var(--kbd-bg); border: 1px solid var(--border-color); border-radius: 6px; color: var(--text-primary); text-decoration: none; font-size: 0.75rem; font-weight: 600; box-shadow: 0 1px 2px rgba(0,0,0,0.05); transition: all 0.2s;">
                📄 마크다운 소스 파일 다운로드 / 보기
            </a>
        </div>
    `;

        if (!content.includes('마크다운 소스 파일 다운로드 / 보기')) {
            content = content.replace(footerTag, mdLinkHTML + footerTag);
            fs.writeFileSync(filePath, content);
        }
    }
}

// update README.md
let readme = fs.readFileSync('README.md', 'utf8');
if (!readme.includes('lazygass.github.io')) {
    readme = readme.replace('## 기능 (Features)', `## 🚀 Live Demo\n👉 **[https://lazygass.github.io/shortcut-cheatsheet/](https://lazygass.github.io/shortcut-cheatsheet/)**\n\n## 기능 (Features)`);
    fs.writeFileSync('README.md', readme);
}

console.log("Footer links injected successfully!");
