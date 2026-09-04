const xg5000Shortcuts = [
    {
        category: "LD 심볼 입력",
        color: "#DA291C",
        icon: "⚡",
        items: [
            { desc: "A 접점 (평상시 열린 접점)", keys: ["F3"] },
            { desc: "B 접점 (평상시 닫힌 접점)", keys: ["F4"] },
            { desc: "양변환 검출 접점 (P 입력)", keys: ["Shift", "F1"] },
            { desc: "음변환 검출 접점 (N 입력)", keys: ["Shift", "F2"] },
            { desc: "출력 코일", keys: ["F9"] },
            { desc: "SET 코일", keys: ["Shift", "F3"] },
            { desc: "RESET 코일", keys: ["Shift", "F4"] },
            { desc: "양변환 검출 코일", keys: ["Shift", "F5"] },
            { desc: "타이머·응용명령 펑션 불러오기", keys: ["F10"] }
        ]
    },
    {
        category: "라인과 연결",
        color: "#0072CE",
        icon: "📏",
        items: [
            { desc: "가로줄 입력", keys: ["F5"] },
            { desc: "세로줄 입력", keys: ["F6"] },
            { desc: "병렬 라인 추가", keys: ["Ctrl", "3"] },
            { desc: "연결선", keys: ["Shift", "F8"] },
            { desc: "선택 모드 (커서)", keys: ["Esc"] },
            { desc: "셀 또는 심볼 삭제", keys: ["Delete"] },
            { desc: "셀 편집 확정", keys: ["Enter"] }
        ]
    },
    {
        category: "편집",
        color: "#8764B8",
        icon: "✏️",
        items: [
            { desc: "줄 삭제", keys: ["Ctrl", "D"] },
            { desc: "줄 삽입", keys: ["Ctrl", "L"] },
            { desc: "칸 삭제", keys: ["Ctrl", "T"] },
            { desc: "칸 삽입", keys: ["Ctrl", "I"] },
            { desc: "설명문 입력", keys: ["Ctrl", "E"] },
            { desc: "실행 취소", keys: ["Ctrl", "Z"] },
            { desc: "다시 실행", keys: ["Ctrl", "Y"] },
            { desc: "복사", keys: ["Ctrl", "C"] },
            { desc: "잘라내기", keys: ["Ctrl", "X"] },
            { desc: "붙여넣기", keys: ["Ctrl", "V"] },
            { desc: "전체 선택", keys: ["Ctrl", "A"] }
        ]
    },
    {
        category: "시뮬레이션",
        color: "#34A853",
        icon: "▶",
        items: [
            { desc: "시뮬레이터 시작", keys: ["Alt", "T", "S"], separator: "→" },
            { desc: "시뮬레이션 종료", keys: ["Alt", "T", "E"], separator: "→" }
        ]
    },
    {
        category: "파일과 일반",
        color: "#00B7C3",
        icon: "📁",
        items: [
            { desc: "프로젝트 저장", keys: ["Ctrl", "S"] },
            { desc: "프로젝트 열기", keys: ["Ctrl", "O"] },
            { desc: "새 프로젝트", keys: ["Ctrl", "N"] },
            { desc: "인쇄", keys: ["Ctrl", "P"] },
            { desc: "프로그램 검사 (컴파일)", keys: ["Ctrl", "Alt", "C"] },
            { desc: "온라인 접속 또는 해제", keys: ["Ctrl", "Alt", "O"] }
        ]
    },
    {
        category: "찾기와 보기",
        color: "#F29900",
        icon: "🔍",
        items: [
            { desc: "찾기", keys: ["Ctrl", "F"] },
            { desc: "바꾸기", keys: ["Ctrl", "H"] },
            { desc: "디바이스 찾기", keys: ["Ctrl", "F2"] },
            { desc: "확대 또는 축소", keys: ["Ctrl", "마우스휠"] },
            { desc: "모니터 시작 또는 종료", keys: ["Ctrl", "M"] },
            { desc: "다음 창으로 이동", keys: ["Ctrl", "Tab"] }
        ]
    }
];

const createShortcutKeysMarkup = (shortcut) => {
    const separator = shortcut.separator ?? "+";
    const separatorMarkup = `<span style="font-size: 0.75rem; margin: 0 3px;">${separator}</span>`;

    return shortcut.keys.map((key) => `<kbd>${key}</kbd>`).join(separatorMarkup);
};

const renderShortcuts = (filter = "") => {
    const shortcutGrid = document.getElementById("shortcutGrid");
    const normalizedFilter = filter.toLowerCase();

    shortcutGrid.innerHTML = "";

    xg5000Shortcuts.forEach((category) => {
        const filteredItems = category.items.filter((item) => (
            item.desc.toLowerCase().includes(normalizedFilter)
            || category.category.toLowerCase().includes(normalizedFilter)
            || item.keys.join(" ").toLowerCase().includes(normalizedFilter)
        ));

        if (filteredItems.length === 0) {
            return;
        }

        const shortcutItemsMarkup = filteredItems.map((item) => `
            <li class="shortcut-item">
                <span class="desc">${item.desc}</span>
                <div class="keys">${createShortcutKeysMarkup(item)}</div>
            </li>
        `).join("");

        const shortcutCard = document.createElement("section");
        shortcutCard.className = "card";
        shortcutCard.style.setProperty("--accent-color", category.color);
        shortcutCard.innerHTML = `
            <div class="card-header">
                <span class="icon">${category.icon}</span>
                <h2>${category.category}</h2>
            </div>
            <ul class="shortcut-list">${shortcutItemsMarkup}</ul>
        `;
        shortcutGrid.appendChild(shortcutCard);
    });
};

renderShortcuts();

document.getElementById("searchInput").addEventListener("input", (event) => {
    renderShortcuts(event.target.value);
});

window.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement.tagName !== "INPUT") {
        event.preventDefault();
        document.getElementById("searchInput").focus();
    }
});
