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
            { desc: "바꾸기", keys: ["Ctrl", "H"] },
            { desc: "셀 콘텐츠 삭제", keys: ["Delete"] },
            { desc: "바로 가기 메뉴 열기", keys: ["Shift", "F10"] }
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
        category: "리본 메뉴 (Ribbon Nav)",
        color: "#F4B400",
        icon: "🎀",
        items: [
            { desc: "파일 메뉴 열기", keys: ["Alt", "F"] },
            { desc: "홈 탭으로 이동", keys: ["Alt", "H"] },
            { desc: "삽입 탭으로 이동", keys: ["Alt", "N"] },
            { desc: "페이지 레이아웃 탭", keys: ["Alt", "P"] },
            { desc: "수식 탭으로 이동", keys: ["Alt", "M"] },
            { desc: "데이터 탭으로 이동", keys: ["Alt", "A"] },
            { desc: "검토 탭으로 이동", keys: ["Alt", "R"] },
            { desc: "보기 탭으로 이동", keys: ["Alt", "W"] }
        ]
    },
    {
        category: "편집 및 서식 (Formatting)",
        color: "#8764b8",
        icon: "🎨",
        items: [
            { desc: "복사하기 / 붙여넣기", keys: ["Ctrl", "C/V"] },
            { desc: "선택하여 붙여넣기", keys: ["Ctrl", "Alt", "V"] },
            { desc: "셀 서식 대화상자", keys: ["Ctrl", "1"] },
            { desc: "글꼴 서식 지정", keys: ["Ctrl", "Shift", "F"] },
            { desc: "굵게 / 밑줄", keys: ["Ctrl", "B/U"] },
            { desc: "빠른 채우기", keys: ["Ctrl", "E"] },
            { desc: "서식 복사", keys: ["Alt", "H", "F", "P"] },
            { desc: "기본 숫자 서식", keys: ["Ctrl", "Shift", "~"] },
            { desc: "통화 서식 적용", keys: ["Ctrl", "Shift", "$"] },
            { desc: "백분율 서식 적용", keys: ["Ctrl", "Shift", "%"] },
            { desc: "날짜 서식 적용", keys: ["Ctrl", "Shift", "#"] }
        ]
    },
    {
        category: "데이터 및 수식 (Formula)",
        color: "#d83b01",
        icon: "📊",
        items: [
            { desc: "자동 합계", keys: ["Alt", "="] },
            { desc: "셀 편집 (활성 셀)", keys: ["F2"] },
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
            { desc: "전체 선택 (현재 영역)", keys: ["Ctrl", "A"] },
            { desc: "행 / 열 전체 선택", keys: ["Shift/Ctrl", "Space"] },
            { desc: "데이터 범위 끝 이동", keys: ["Ctrl", "방향키"] },
            { desc: "워크시트의 시작 위치", keys: ["Ctrl", "Home"] },
            { desc: "워크시트의 마지막 셀", keys: ["Ctrl", "End"] },
            { desc: "다음 / 이전 시트", keys: ["Ctrl", "PgDn/PgUp"] },
            { desc: "화면 아래 / 위 이동", keys: ["PgDn/PgUp"] },
            { desc: "빈 셀 삽입 대화상자", keys: ["Ctrl", "Shift", "+"] },
            { desc: "선택한 셀 삭제", keys: ["Ctrl", "-"] },
            { desc: "행 숨기기 / 열 숨기기", keys: ["Ctrl", "9/0"] }
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
            { desc: "메모 삽입/수정", keys: ["Shift", "F2"] },
            { desc: "스레드 댓글 삽입", keys: ["Ctrl", "Shift", "F2"] }
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
