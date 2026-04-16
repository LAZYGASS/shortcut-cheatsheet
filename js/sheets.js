const sheetsShortcuts = [
    {
        category: "대표적인 작업 (General)",
        color: "#0F9D58", // Sheets Green
        icon: "⭐",
        items: [
            { desc: "열 선택", keys: ["Ctrl", "Space"] },
            { desc: "행 선택", keys: ["Shift", "Space"] },
            { desc: "모두 선택", keys: ["Ctrl", "A"] },
            { desc: "실행취소", keys: ["Ctrl", "Z"] },
            { desc: "다시 실행", keys: ["Ctrl", "Y"] },
            { desc: "찾기", keys: ["Ctrl", "F"] },
            { desc: "찾기 및 바꾸기", keys: ["Ctrl", "H"] },
            { desc: "범위 채우기", keys: ["Ctrl", "Enter"] },
            { desc: "아래로 채우기", keys: ["Ctrl", "D"] },
            { desc: "오른쪽으로 채우기", keys: ["Ctrl", "R"] },
            { desc: "저장", keys: ["Ctrl", "S"] },
            { desc: "열기", keys: ["Ctrl", "O"] },
            { desc: "인쇄", keys: ["Ctrl", "P"] },
            { desc: "복사", keys: ["Ctrl", "C"] },
            { desc: "잘라내기", keys: ["Ctrl", "X"] },
            { desc: "붙여넣기", keys: ["Ctrl", "V"] },
            { desc: "값만 붙여넣기", keys: ["Ctrl", "Shift", "V"] },
            { desc: "전체 단축키 표시", keys: ["Ctrl", "/"] },
            { desc: "새 시트 삽입", keys: ["Shift", "F11"] },
            { desc: "메뉴 검색", keys: ["Alt", "/"] }
        ]
    },
    {
        category: "셀 서식 지정 (Formatting)",
        color: "#4285F4", // Google Blue
        icon: "🎨",
        items: [
            { desc: "굵게", keys: ["Ctrl", "B"] },
            { desc: "밑줄", keys: ["Ctrl", "U"] },
            { desc: "기울임꼴", keys: ["Ctrl", "I"] },
            { desc: "취소선", keys: ["Alt", "Shift", "5"] },
            { desc: "가운데 맞춤", keys: ["Ctrl", "Shift", "E"] },
            { desc: "왼쪽 맞춤", keys: ["Ctrl", "Shift", "L"] },
            { desc: "오른쪽 맞춤", keys: ["Ctrl", "Shift", "R"] },
            { desc: "위쪽 테두리 적용", keys: ["Alt", "Shift", "1"] },
            { desc: "오른쪽 테두리 적용", keys: ["Alt", "Shift", "2"] },
            { desc: "아래쪽 테두리 적용", keys: ["Alt", "Shift", "3"] },
            { desc: "왼쪽 테두리 적용", keys: ["Alt", "Shift", "4"] },
            { desc: "테두리 삭제", keys: ["Alt", "Shift", "6"] },
            { desc: "바깥쪽 테두리 적용", keys: ["Alt", "Shift", "7"] },
            { desc: "서식 지우기", keys: ["Ctrl", "\\"] }
        ]
    },
    {
        category: "데이터 형식 및 특수 삽입 (Data formats)",
        color: "#34A853", // Green Secondary
        icon: "🔢",
        items: [
            { desc: "날짜 삽입", keys: ["Ctrl", ";"] },
            { desc: "시간 삽입", keys: ["Ctrl", "Shift", ";"] },
            { desc: "날짜 및 시간 삽입", keys: ["Ctrl", "Alt", "Shift", ";"] },
            { desc: "링크 삽입", keys: ["Ctrl", "K"] },
            { desc: "소수점 형식", keys: ["Ctrl", "Shift", "1"] },
            { desc: "시간 형식", keys: ["Ctrl", "Shift", "2"] },
            { desc: "날짜 형식", keys: ["Ctrl", "Shift", "3"] },
            { desc: "통화 형식", keys: ["Ctrl", "Shift", "4"] },
            { desc: "백분율 형식", keys: ["Ctrl", "Shift", "5"] },
            { desc: "지수 형식", keys: ["Ctrl", "Shift", "6"] }
        ]
    },
    {
        category: "스프레드시트 탐색 (Navigation)",
        color: "#00b7c3",
        icon: "🚀",
        items: [
            { desc: "행 시작으로 이동", keys: ["Home"] },
            { desc: "시트 시작으로 이동", keys: ["Ctrl", "Home"] },
            { desc: "행 끝으로 이동", keys: ["End"] },
            { desc: "시트 끝으로 이동", keys: ["Ctrl", "End"] },
            { desc: "활성 셀로 스크롤", keys: ["Ctrl", "Backspace"] },
            { desc: "다음 시트로 이동", keys: ["Alt", "↓"] },
            { desc: "이전 시트로 이동", keys: ["Alt", "↑"] },
            { desc: "시트 목록 표시", keys: ["Alt", "Shift", "K"] },
            { desc: "하이퍼링크 열기", keys: ["Alt", "Enter"] },
            { desc: "탐색 열기", keys: ["Alt", "Shift", "X"] },
            { desc: "측면 패널로 이동", keys: ["Ctrl", "Alt", "."] },
            { desc: "업데이트 기록 열기", keys: ["Ctrl", "Alt", "Shift", "H"] }
        ]
    },
    {
        category: "행/열 조작 (Rows & Columns)",
        color: "#F4B400", // Google Yellow
        icon: "🗂️",
        items: [
            { desc: "행/열 삽입", keys: ["Ctrl", "Alt", "="] },
            { desc: "위에 행 삽입", keys: ["Alt", "I", "R"] },
            { desc: "아래에 행 삽입", keys: ["Alt", "I", "W"] },
            { desc: "왼쪽에 열 삽입", keys: ["Alt", "I", "C"] },
            { desc: "오른쪽에 열 삽입", keys: ["Alt", "I", "O"] },
            { desc: "행/열 삭제", keys: ["Ctrl", "Alt", "-"] },
            { desc: "행 숨기기", keys: ["Ctrl", "Alt", "9"] },
            { desc: "행 숨기기 해제", keys: ["Ctrl", "Shift", "9"] },
            { desc: "열 숨기기", keys: ["Ctrl", "Alt", "0"] },
            { desc: "열 숨기기 해제", keys: ["Ctrl", "Shift", "0"] },
            { desc: "행/열 그룹화", keys: ["Alt", "Shift", "→"] },
            { desc: "행/열 그룹해제", keys: ["Alt", "Shift", "←"] },
            { desc: "그룹화 펼치기", keys: ["Alt", "Shift", "↓"] },
            { desc: "그룹화 접기", keys: ["Alt", "Shift", "↑"] }
        ]
    },
    {
        category: "메뉴 열기 (Open Menus)",
        color: "#DB4437", // Google Red
        icon: "📁",
        items: [
            { desc: "컨텍스트 메뉴", keys: ["Shift", "F10"] },
            { desc: "파일 메뉴", keys: ["Alt", "F"] },
            { desc: "수정 메뉴", keys: ["Alt", "E"] },
            { desc: "보기 메뉴", keys: ["Alt", "V"] },
            { desc: "삽입 메뉴", keys: ["Alt", "I"] },
            { desc: "서식 메뉴", keys: ["Alt", "O"] },
            { desc: "데이터 메뉴", keys: ["Alt", "D"] },
            { desc: "도구 메뉴", keys: ["Alt", "T"] },
            { desc: "스프레드시트 메뉴", keys: ["Alt", "Shift", "S"] }
        ]
    },
    {
        category: "수식 사용 (Formulas)",
        color: "#8764b8", // Purple
        icon: "➗",
        items: [
            { desc: "모든 수식 표시", keys: ["Ctrl", "~"] },
            { desc: "배열 수식 삽입", keys: ["Ctrl", "Shift", "Enter"] },
            { desc: "펼친 배열수식 접기", keys: ["Ctrl", "E"] },
            { desc: "수식 도움말", keys: ["Shift", "F1"] },
            { desc: "전체/요약 도움말", keys: ["F1"] },
            { desc: "상대/절대 참조 전환", keys: ["F4"] },
            { desc: "수식 결과 미리보기", keys: ["F9"] },
            { desc: "수식 창 크기 조정", keys: ["Ctrl", "↑ / ↓"] }
        ]
    },
    {
        category: "메모, 댓글 및 접근성 (Comments & Accessibility)",
        color: "#9E9E9E", // Grey
        icon: "📝",
        items: [
            { desc: "메모 삽입/수정", keys: ["Shift", "F2"] },
            { desc: "댓글 삽입/수정", keys: ["Ctrl", "Alt", "M"] },
            { desc: "댓글 목록 열기", keys: ["Ctrl", "Alt", "Shift", "A"] },
            { desc: "현재 댓글 입력", keys: ["Ctrl", "Alt", "E", "C"] },
            { desc: "스크린리더 지원 설정", keys: ["Ctrl", "Alt", "Z"] },
            { desc: "점자 기능 사용 설정", keys: ["Ctrl", "Alt", "H"] },
            { desc: "열 읽기 (스크린리더)", keys: ["Ctrl", "Alt", "Shift", "C"] },
            { desc: "행 읽기 (스크린리더)", keys: ["Ctrl", "Alt", "Shift", "R"] }
        ]
    }
];

function renderShortcuts(filter = "") {
    const grid = document.getElementById('shortcutGrid');
    grid.innerHTML = "";

    sheetsShortcuts.forEach(cat => {
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
