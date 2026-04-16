const shortcuts = [
    {
        category: "핵심 단축키 (Essential)",
        color: "#1d6f42",
        icon: "⭐",
        items: [
            { desc: "가운데 정렬", keys: ["Alt", "H", "A", "C"] },
            { desc: "모든 테두리 그리기", keys: ["Alt", "H", "B", "A"] },
            { desc: "테두리 색상(회색) 변경", keys: ["Alt", "H", "B", "I"] },
            { desc: "통합문서 저장", keys: ["Ctrl", "S"] },
            { desc: "작업 취소 (Undo)", keys: ["Ctrl", "Z"] },
            { desc: "다시 실행 (Redo)", keys: ["Ctrl", "Y"] },
            { desc: "찾기", keys: ["Ctrl", "F"] },
            { desc: "바꾸기", keys: ["Ctrl", "H"] }
        ]
    },
    {
        category: "파일 및 일반 (File)",
        color: "#0078d4",
        icon: "📁",
        items: [
            { desc: "다른 이름으로 저장", keys: ["F12"] },
            { desc: "통합문서 열기", keys: ["Ctrl", "O"] },
            { desc: "새 통합문서 만들기", keys: ["Ctrl", "N"] },
            { desc: "인쇄하기", keys: ["Ctrl", "P"] },
            { desc: "도움말 열기", keys: ["F1"] },
            { desc: "통합문서 닫기", keys: ["Ctrl", "W"] },
            { desc: "엑셀 종료", keys: ["Alt", "F4"] }
        ]
    },
    {
        category: "편집 및 서식 (Formatting)",
        color: "#8764b8",
        icon: "🎨",
        items: [
            { desc: "복사하기", keys: ["Ctrl", "C"] },
            { desc: "붙여넣기", keys: ["Ctrl", "V"] },
            { desc: "선택하여 붙여넣기", keys: ["Ctrl", "Alt", "V"] },
            { desc: "셀 서식 대화상자", keys: ["Ctrl", "1"] },
            { desc: "굵게", keys: ["Ctrl", "B"] },
            { desc: "밑줄", keys: ["Ctrl", "U"] },
            { desc: "빠른 채우기", keys: ["Ctrl", "E"] },
            { desc: "서식 복사", keys: ["Alt", "H", "F", "P"] }
        ]
    },
    {
        category: "데이터 및 수식 (Formula)",
        color: "#d83b01",
        icon: "📊",
        items: [
            { desc: "자동 합계", keys: ["Alt", "="] },
            { desc: "셀 편집", keys: ["F2"] },
            { desc: "절대 참조 변환", keys: ["F4"] },
            { desc: "자동 필터 활성화", keys: ["Ctrl", "Shift", "L"] },
            { desc: "표 만들기", keys: ["Ctrl", "T"] },
            { desc: "함수 마법사", keys: ["Shift", "F3"] },
            { desc: "이름 정의", keys: ["Ctrl", "F3"] }
        ]
    },
    {
        category: "탐색 및 선택 (Navigation)",
        color: "#00b7c3",
        icon: "🚀",
        items: [
            { desc: "전체 선택", keys: ["Ctrl", "A"] },
            { desc: "행 전체 선택", keys: ["Shift", "Space"] },
            { desc: "열 전체 선택", keys: ["Ctrl", "Space"] },
            { desc: "데이터 끝으로 이동", keys: ["Ctrl", "방향키"] },
            { desc: "다음 시트로 이동", keys: ["Ctrl", "PgDn"] },
            { desc: "이전 시트로 이동", keys: ["Ctrl", "PgUp"] },
            { desc: "행 삭제", keys: ["Ctrl", "-"] },
            { desc: "행 삽입", keys: ["Ctrl", "Shift", "+"] }
        ]
    },
    {
        category: "특수 입력 (Input)",
        color: "#498205",
        icon: "⌨️",
        items: [
            { desc: "현재 날짜 입력", keys: ["Ctrl", ";"] },
            { desc: "현재 시간 입력", keys: ["Ctrl", "Shift", ":"] },
            { desc: "셀 내부 줄바꿈", keys: ["Alt", "Enter"] },
            { desc: "하이퍼링크 삽입", keys: ["Ctrl", "K"] },
            { desc: "메모 삽입", keys: ["Shift", "F2"] }
        ]
    }
];

function renderShortcuts(filter = "") {
    const grid = document.getElementById('shortcutGrid');
    grid.innerHTML = "";

    shortcuts.forEach(cat => {
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
                        ${item.keys.map(key => `<kbd>${key}</kbd>`).join('')}
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
