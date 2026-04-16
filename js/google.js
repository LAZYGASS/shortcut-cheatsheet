const googleShortcuts = [
    {
        category: "기본 연산자 (Basic)",
        color: "#4285F4", // Google Blue
        icon: "🔍",
        items: [
            { desc: "정확한 단어/문구 포함", keys: ['"검색어"'] },
            { desc: "둘 중 하나 검색 (OR)", keys: ["단어 OR 단어", "단어 | 단어"] },
            { desc: "모두 포함 (AND)", keys: ["단어 AND 단어"] },
            { desc: "특정 검색어 제외", keys: ["-제외단어"] },
            { desc: "와일드카드 (아무 단어)", keys: ["*"] },
            { desc: "공통 키워드 그룹화", keys: ["(단어 OR 단어)"] }
        ]
    },
    {
        category: "특정 속성 & 도구 (Properties)",
        color: "#34A853", // Google Green
        icon: "🛠️",
        items: [
            { desc: "가격 검색", keys: ["$329", "€100"] },
            { desc: "단위/환율 변환", keys: ["$1000 in KRW"] },
            { desc: "단어 사전 정의", keys: ["define:단어"] },
            { desc: "캐시된 페이지 확인", keys: ["cache:URL"] },
            { desc: "특정 확장자/파일타입", keys: ["filetype:pdf", "ext:pdf"] }
        ]
    },
    {
        category: "웹사이트 & URL (Site & URL)",
        color: "#EA4335", // Google Red
        icon: "🌐",
        items: [
            { desc: "특정 웹사이트 내 검색", keys: ["site:도메인"] },
            { desc: "비슷한 성격의 웹사이트", keys: ["related:도메인"] },
            { desc: "URL에 특정 단어 포함", keys: ["inurl:단어"] },
            { desc: "URL에 모든 단어 포함", keys: ["allinurl:단어들"] }
        ]
    },
    {
        category: "본문 & 타이틀 (Text & Title)",
        color: "#FBBC05", // Google Yellow
        icon: "📝",
        items: [
            { desc: "타이틀 태그에 포함", keys: ["intitle:단어"] },
            { desc: "타이틀에 모든 단어 포함", keys: ["allintitle:단어들"] },
            { desc: "본문(Body)에 포함", keys: ["intext:단어"] },
            { desc: "본문에 모든 단어 포함", keys: ["allintext:단어들"] },
            { desc: "X 단어수 이내 근접", keys: ["단어 AROUND(3) 단어"] }
        ]
    },
    {
        category: "특정 콘텐츠 검색 (Content)",
        color: "#8B5CF6", // Purple
        icon: "🎬",
        items: [
            { desc: "지역 날씨 검색", keys: ["weather:위치"] },
            { desc: "주식 정보 (티커)", keys: ["stocks:현대차"] },
            { desc: "지도/지역 검색", keys: ["map:위치"] },
            { desc: "영화 관련 검색결과", keys: ["movie:영화명"] },
            { desc: "뉴스 출처 검색", keys: ["source:언론사명"] }
        ]
    },
    {
        category: "기타/부분작동 명령어 (Misc)",
        color: "#9CA3AF", // Gray
        icon: "⚠️",
        items: [
            { desc: "숫자/날짜 범위 (정확도↓)", keys: ["2020..2021"] },
            { desc: "앵커텍스트에 단어 포함", keys: ["inanchor:단어"] },
            { desc: "모든 앵커텍스트에 포함", keys: ["allinanchor:단어들"] },
            { desc: "특정 도메인의 블로그 URL", keys: ["blogurl:도메인"] },
            { desc: "특정 위치 (일반/뉴스)", keys: ["loc:위치", "location:위치"] }
        ]
    }
];

function renderShortcuts(filter = "") {
    const grid = document.getElementById('shortcutGrid');
    grid.innerHTML = "";

    googleShortcuts.forEach(cat => {
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
                        ${item.keys.map(key => `<kbd style="text-transform: none; font-size: 0.70rem; padding: 2px 6px;">${key}</kbd>`).join(' / ')}
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
