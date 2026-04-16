const mdShortcuts = [
    {
        category: "제목 (Headers)",
        color: "#6e40c9", // GitHub Purple
        icon: "H",
        items: [
            { desc: "가장 큰 제목 (H1)", keys: ["# 제목"] },
            { desc: "두 번째 큰 제목 (H2)", keys: ["## 제목"] },
            { desc: "세 번째 큰 제목 (H3)", keys: ["### 제목"] },
            { desc: "크기별 제목 (H1~H6)", keys: ["#~###### 제목"] }
        ]
    },
    {
        category: "강조 (Emphasis)",
        color: "#d73a49", // GitHub Red
        icon: "✨",
        items: [
            { desc: "기울임꼴 (Italic)", keys: ["*텍스트*"] },
            { desc: "기울임꼴 (언더스코어)", keys: ["_텍스트_"] },
            { desc: "굵게 (Bold)", keys: ["**텍스트**"] },
            { desc: "굵고 기울임꼴", keys: ["***텍스트***"] },
            { desc: "취소선 (Strikethrough)", keys: ["~~텍스트~~"] }
        ]
    },
    {
        category: "목록 (Lists)",
        color: "#0366d6", // GitHub Blue
        icon: "📋",
        items: [
            { desc: "순서 없는 목록 (Unordered)", keys: ["- 항목"] },
            { desc: "순서 없는 대체 기호", keys: ["* 항목"] },
            { desc: "순서 있는 목록 (Ordered)", keys: ["1. 항목"] },
            { desc: "할 일 목록 (빈 체크박스)", keys: ["- [ ] 할일"] },
            { desc: "할 일 목록 (완료)", keys: ["- [x] 완료"] }
        ]
    },
    {
        category: "링크 & 이미지 (Links & Images)",
        color: "#28a745", // GitHub Green
        icon: "🔗",
        items: [
            { desc: "링크 (Link)", keys: ["[이름](URL)"] },
            { desc: "이미지 삽입 (Image)", keys: ["![대체텍스트](URL)"] },
            { desc: "제목 링크 (참조형)", keys: ["[이름][id]"] },
            { desc: "자동 링크", keys: ["<http://주소>"] }
        ]
    },
    {
        category: "코드 & 인용 (Code & Quotes)",
        color: "#24292e", // GitHub Dark
        icon: "💻",
        items: [
            { desc: "인라인 코드 (Inline)", keys: ["`코드`"] },
            { desc: "코드 블럭 (Block)", keys: ["```코드```"] },
            { desc: "언어 지정 코드 블럭", keys: ["```js"] },
            { desc: "블록 인용구 (Blockquote)", keys: ["> 인용문"] },
            { desc: "중첩 인용구", keys: [">> 중첩문"] }
        ]
    },
    {
        category: "구분선 및 표 (Tables & Lines)",
        color: "#f66a0a", // Orange
        icon: "📊",
        items: [
            { desc: "수평선 (가로줄)", keys: ["---"] },
            { desc: "수평선 대체", keys: ["***"] },
            { desc: "표 (Table) 항목 구분", keys: ["| 항목 | 항목 |"] },
            { desc: "표 정렬 (오른쪽)", keys: ["| ---: |"] },
            { desc: "표 정렬 (가운데)", keys: ["| :---: |"] }
        ]
    },
    {
        category: "기타 (Misc & Extensions)",
        color: "#959da5", // Gray
        icon: "⚡",
        items: [
            { desc: "이스케이프 기호 (무시)", keys: ["\\*"] },
            { desc: "각주 (Footnotes)", keys: ["[^1]"] },
            { desc: "줄바꿈 (Line break)", keys: ["스페이스 2번", "Enter"] }
        ]
    },
    {
        category: "옵시디언 콜아웃 (Obsidian)",
        color: "#7e22ce", // Obsidian Purple
        icon: "💎",
        items: [
            { desc: "기본 메모 (Note)", keys: ["> [!note]"] },
            { desc: "요약 (Abstract/Summary)", keys: ["> [!abstract] / [!summary] / [!tldr]"] },
            { desc: "정보 (Info)", keys: ["> [!info]"] },
            { desc: "할일 (Todo)", keys: ["> [!todo]"] },
            { desc: "팁/중요 (Tip/Important)", keys: ["> [!tip] / [!hint] / [!important]"] },
            { desc: "성공/완료 (Success/Done)", keys: ["> [!success] / [!check] / [!done]"] },
            { desc: "질문/도움말 (Question/FAQ)", keys: ["> [!question] / [!help] / [!faq]"] },
            { desc: "경고/주의 (Warning/Caution)", keys: ["> [!warning] / [!caution] / [!attention]"] },
            { desc: "실패/누락 (Failure/Missing)", keys: ["> [!failure] / [!fail] / [!missing]"] },
            { desc: "위험/에러 (Danger/Error)", keys: ["> [!danger] / [!error]"] },
            { desc: "버그 (Bug)", keys: ["> [!bug]"] },
            { desc: "예시 (Example)", keys: ["> [!example]"] },
            { desc: "인용구 (Quote/Cite)", keys: ["> [!quote] / [!cite]"] }
        ]
    }
];

function renderShortcuts(filter = "") {
    const grid = document.getElementById('shortcutGrid');
    grid.innerHTML = "";

    mdShortcuts.forEach(cat => {
        const filteredItems = cat.items.filter(item =>
            item.desc.toLowerCase().includes(filter.toLowerCase()) ||
            cat.category.toLowerCase().includes(filter.toLowerCase())
        );

        if (filteredItems.length > 0) {
            const card = document.createElement('section');
            card.className = "card";
            card.style.setProperty('--accent-color', cat.color);

            let itemsHtml = filteredItems.map(item => `
                <li class="shortcut-item">
                    <span class="desc">${item.desc}</span>
                    <div class="keys">
                        ${item.keys.map(key => `<kbd style="text-transform: none; font-size: 0.70rem; padding: 2px 6px;">${key}</kbd>`).join('')}
                    </div>
                </li>
            `).join('');

            card.innerHTML = `
                <div class="card-header">
                    <span class="icon">${cat.icon}</span>
                    <h2>${cat.category}</h2>
                </div>
                <ul class="shortcut-list">
                    ${itemsHtml}
                </ul>
            `;
            grid.appendChild(card);
        }
    });
}

// Initial Render
renderShortcuts();

// Search Logic
document.getElementById('searchInput').addEventListener('input', (e) => {
    renderShortcuts(e.target.value);
});

// Keyboard Focus for Search
window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
});
