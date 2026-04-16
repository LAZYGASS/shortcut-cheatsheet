const cadShortcuts = [
    {
        category: "그리기 (Draw)",
        color: "#E63539", // AutoCAD Red
        icon: "✏️",
        items: [
            { desc: "선 (Line)", keys: ["L", "Space"] },
            { desc: "폴리선 (Polyline)", keys: ["PL", "Space"] },
            { desc: "원 (Circle)", keys: ["C", "Space"] },
            { desc: "호 (Arc)", keys: ["A", "Space"] },
            { desc: "직사각형 (Rectangle)", keys: ["REC", "Space"] },
            { desc: "다각형 (Polygon)", keys: ["POL", "Space"] },
            { desc: "타원 (Ellipse)", keys: ["EL", "Space"] },
            { desc: "해치 (Hatch)", keys: ["H", "Space"] }
        ]
    },
    {
        category: "편집 (Modify)",
        color: "#2563EB", // Blue
        icon: "✂️",
        items: [
            { desc: "이동 (Move)", keys: ["M", "Space"] },
            { desc: "복사 (Copy)", keys: ["CO", "Space"] },
            { desc: "지우기 (Erase)", keys: ["E", "Space"] },
            { desc: "자르기 (Trim)", keys: ["TR", "Space"] },
            { desc: "연장 (Extend)", keys: ["EX", "Space"] },
            { desc: "간격 띄우기 (Offset)", keys: ["O", "Space"] },
            { desc: "회전 (Rotate)", keys: ["RO", "Space"] },
            { desc: "대칭 복사 (Mirror)", keys: ["MI", "Space"] },
            { desc: "모깎기 (Fillet)", keys: ["F", "Space"] },
            { desc: "모따기 (Chamfer)", keys: ["CHA", "Space"] },
            { desc: "신축 (Stretch)", keys: ["S", "Space"] },
            { desc: "축척 (Scale)", keys: ["SC", "Space"] },
            { desc: "분해 (Explode)", keys: ["X", "Space"] }
        ]
    },
    {
        category: "뷰 및 조작 (View & Control)",
        color: "#059669", // Emerald
        icon: "👀",
        items: [
            { desc: "화면 이동 (Pan)", keys: ["P", "Space"] },
            { desc: "전체 화면 줌", keys: ["Z", "Space", "A", "Space"] },
            { desc: "선택 객체 줌", keys: ["Z", "Space", "O", "Space"] },
            { desc: "재생성 (Regen)", keys: ["RE", "Space"] },
            { desc: "명령 취소 (Undo)", keys: ["U", "Space"] },
            { desc: "명령 복구 (Redo)", keys: ["REDO"] }
        ]
    },
    {
        category: "속성 및 도면층 (Layers & Props)",
        color: "#D97706", // Amber
        icon: "🎨",
        items: [
            { desc: "도면층 특성 (Layer)", keys: ["LA", "Space"] },
            { desc: "특성 창 (Properties)", keys: ["PR", "Space"] },
            { desc: "특성 일치 (Match Prop)", keys: ["MA", "Space"] },
            { desc: "거리 측정 (Distance)", keys: ["DI", "Space"] },
            { desc: "면적 계산 (Area)", keys: ["AA", "Space"] }
        ]
    },
    {
        category: "치수 및 문자 (Text & Dims)",
        color: "#6D28D9", // Purple
        icon: "📏",
        items: [
            { desc: "선형 치수 (Dim Linear)", keys: ["DLI", "Space"] },
            { desc: "정렬 치수 (Dim Aligned)", keys: ["DAL", "Space"] },
            { desc: "각도 치수 (Dim Angular)", keys: ["DAN", "Space"] },
            { desc: "치수 스타일 (Dim Style)", keys: ["D", "Space"] },
            { desc: "단일행 문자 (Text)", keys: ["IT", "Space"] },
            { desc: "다중행 문자 (MText)", keys: ["T", "Space"] }
        ]
    },
    {
        category: "객체 설정 (Function Keys)",
        color: "#4B5563", // Gray
        icon: "⌨️",
        items: [
            { desc: "객체 스냅 켜기/끄기", keys: ["F3"] },
            { desc: "객체 스냅 추적", keys: ["F11"] },
            { desc: "직교 모드 (Ortho)", keys: ["F8"] },
            { desc: "극좌표 추적 (Polar)", keys: ["F10"] },
            { desc: "동적 입력 (Dynamic)", keys: ["F12"] },
            { desc: "그리드 표시 (Grid)", keys: ["F7"] },
            { desc: "선가중치 표시", keys: ["LW", "Space"] }
        ]
    }
];

function renderShortcuts(filter = "") {
    const grid = document.getElementById('shortcutGrid');
    grid.innerHTML = "";

    cadShortcuts.forEach(cat => {
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
                        ${item.keys.map(key => `<kbd>${key}</kbd>`).join('<span style="font-size: 0.6rem; margin: 0 2px;">+</span>')}
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
