const winShortcuts = [
    {
        category: "기본 및 시스템 (System)",
        color: "#0078D4", // Windows Blue
        icon: "⚙️",
        items: [
            { desc: "파일 탐색기 열기", keys: ["Win", "E"] },
            { desc: "Windows 설정 열기", keys: ["Win", "I"] },
            { desc: "PC 잠금 (화면 잠금)", keys: ["Win", "L"] },
            { desc: "대화 상자 열기 (실행)", keys: ["Win", "R"] },
            { desc: "고급 시작 메뉴 열기", keys: ["Win", "X"] },
            { desc: "접근성/디스플레이 설정", keys: ["Win", "U"] }
        ]
    },
    {
        category: "창 관리 (Window Management)",
        color: "#F25022", // Microsoft Orange
        icon: "🖥️",
        items: [
            { desc: "바탕 화면 표시/숨기기", keys: ["Win", "D"] },
            { desc: "모든 창 최소화", keys: ["Win", "M"] },
            { desc: "마우스 커서 가져다대기 (바탕화면 엿보기)", keys: ["Win", ","] },
            { desc: "화면 분할 / 창 고정/최대화", keys: ["Win", "방향키"] },
            { desc: "보조 모니터로 창 이동", keys: ["Win", "Shift", "방향키"] },
            { desc: "작업 보기 (Task View)", keys: ["Win", "Tab"] }
        ]
    },
    {
        category: "작업 표시줄 및 앱 (Taskbar & Apps)",
        color: "#7FBA00", // Microsoft Green
        icon: "📌",
        items: [
            { desc: "고정된 앱 순서대로 실행", keys: ["Win", "1~9"] },
            { desc: "작업 표시줄 앱 전환", keys: ["Win", "T"] }
        ]
    },
    {
        category: "유틸리티 및 도구 (Utilities)",
        color: "#FFB900", // Microsoft Yellow
        icon: "🛠️",
        items: [
            { desc: "클립보드 내역 열기", keys: ["Win", "V"] },
            { desc: "스크린샷 도구 (영역 지정)", keys: ["Win", "Shift", "S"] },
            { desc: "전체화면 스크린샷 (자동저장)", keys: ["Win", "PrtScn"] },
            { desc: "이모지/기호 패널 열기", keys: ["Win", "."] },
            { desc: "음성 입력 활성화", keys: ["Win", "H"] },
            { desc: "입력 언어/방법 전환", keys: ["Win", "Space"] },
            { desc: "디스플레이 프로젝트/확장 설정", keys: ["Win", "P"] }
        ]
    }
];

function renderShortcuts(filter = "") {
    const grid = document.getElementById('shortcutGrid');
    grid.innerHTML = "";

    winShortcuts.forEach(cat => {
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
                        ${item.keys.map(key => `<kbd>${key}</kbd>`).join('<span style="font-size: 0.6rem; margin: 0 1px;">+</span>')}
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
