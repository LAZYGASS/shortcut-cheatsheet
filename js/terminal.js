// Terminal Cheat Sheet — 한국어 (Bash / Zsh 기준)
// 리눅스·macOS 셸 공통 명령어. Windows는 Git Bash / WSL 기준.

const shortcuts = [
    {
        category: "탐색 (Navigation)",
        color: "#2563EB",
        icon: "🧭",
        items: [
            { desc: "현재 경로 출력", keys: ["pwd"] },
            { desc: "파일 목록", keys: ["ls"] },
            { desc: "숨김 파일 포함 상세 목록", keys: ["ls", "-la"] },
            { desc: "디렉터리 이동", keys: ["cd", "<dir>"] },
            { desc: "상위 디렉터리로", keys: ["cd", ".."] },
            { desc: "홈 디렉터리로", keys: ["cd", "~"] },
            { desc: "이전 디렉터리로", keys: ["cd", "-"] },
            { desc: "트리 구조 보기", keys: ["tree"] }
        ]
    },
    {
        category: "파일 조작 (Files)",
        color: "#0891B2",
        icon: "📄",
        items: [
            { desc: "복사", keys: ["cp", "src", "dst"] },
            { desc: "디렉터리 통째 복사", keys: ["cp", "-r"] },
            { desc: "이동/이름 변경", keys: ["mv", "src", "dst"] },
            { desc: "삭제", keys: ["rm", "<file>"] },
            { desc: "디렉터리 강제 삭제 ⚠️", keys: ["rm", "-rf"] },
            { desc: "디렉터리 생성", keys: ["mkdir", "<dir>"] },
            { desc: "중간 경로까지 생성", keys: ["mkdir", "-p"] },
            { desc: "빈 파일 생성 / 시간 갱신", keys: ["touch", "<file>"] },
            { desc: "심볼릭 링크 생성", keys: ["ln", "-s"] }
        ]
    },
    {
        category: "보기 & 검색 (View & Search)",
        color: "#7C3AED",
        icon: "🔍",
        items: [
            { desc: "파일 전체 출력", keys: ["cat", "<file>"] },
            { desc: "페이지 단위로 보기", keys: ["less", "<file>"] },
            { desc: "앞부분 N줄", keys: ["head", "-n"] },
            { desc: "뒷부분 N줄", keys: ["tail", "-n"] },
            { desc: "실시간 로그 추적", keys: ["tail", "-f"] },
            { desc: "문자열 검색", keys: ["grep", "pattern"] },
            { desc: "재귀 검색 (하위 폴더)", keys: ["grep", "-r"] },
            { desc: "파일 찾기", keys: ["find", ".", "-name"] },
            { desc: "줄/단어/글자 수", keys: ["wc", "-l"] }
        ]
    },
    {
        category: "권한 (Permissions)",
        color: "#D97706",
        icon: "🔐",
        items: [
            { desc: "권한 변경", keys: ["chmod", "755"] },
            { desc: "실행 권한 추가", keys: ["chmod", "+x"] },
            { desc: "소유자 변경", keys: ["chown", "user:group"] },
            { desc: "관리자 권한으로 실행", keys: ["sudo", "<cmd>"] }
        ]
    },
    {
        category: "프로세스 (Process)",
        color: "#DC2626",
        icon: "⚙️",
        items: [
            { desc: "프로세스 목록", keys: ["ps", "aux"] },
            { desc: "실시간 자원 모니터", keys: ["top"] },
            { desc: "프로세스 종료", keys: ["kill", "<pid>"] },
            { desc: "강제 종료", keys: ["kill", "-9"] },
            { desc: "이름으로 종료", keys: ["pkill", "<name>"] },
            { desc: "백그라운드 실행", keys: ["<cmd>", "&"] },
            { desc: "작업 목록 / 재개", keys: ["jobs", "fg"] }
        ]
    },
    {
        category: "텍스트 & 파이프 (Text & Pipe)",
        color: "#059669",
        icon: "🔀",
        items: [
            { desc: "출력", keys: ["echo", "text"] },
            { desc: "파이프 (출력→입력)", keys: ["cmd1", "|", "cmd2"] },
            { desc: "파일로 덮어쓰기", keys: [">", "file"] },
            { desc: "파일에 이어쓰기", keys: [">>", "file"] },
            { desc: "정렬", keys: ["sort"] },
            { desc: "중복 제거", keys: ["uniq"] },
            { desc: "치환", keys: ["sed", "s/a/b/"] },
            { desc: "열 추출/가공", keys: ["awk", "'{print $1}'"] },
            { desc: "입력을 인자로 전달", keys: ["xargs"] }
        ]
    },
    {
        category: "네트워크 (Network)",
        color: "#0EA5E9",
        icon: "🌐",
        items: [
            { desc: "URL 요청/다운로드", keys: ["curl", "-O"] },
            { desc: "파일 다운로드", keys: ["wget", "<url>"] },
            { desc: "연결 확인", keys: ["ping", "<host>"] },
            { desc: "원격 접속", keys: ["ssh", "user@host"] },
            { desc: "원격 파일 복사", keys: ["scp", "src", "dst"] },
            { desc: "포트 사용 확인", keys: ["lsof", "-i:PORT"] }
        ]
    },
    {
        category: "압축 (Archive)",
        color: "#C2410C",
        icon: "📦",
        items: [
            { desc: "tar.gz 압축", keys: ["tar", "-czf"] },
            { desc: "tar.gz 해제", keys: ["tar", "-xzf"] },
            { desc: "zip 압축", keys: ["zip", "-r"] },
            { desc: "zip 해제", keys: ["unzip"] }
        ]
    },
    {
        category: "시스템 (System)",
        color: "#4B5563",
        icon: "🖥️",
        items: [
            { desc: "디스크 사용량", keys: ["df", "-h"] },
            { desc: "폴더 용량", keys: ["du", "-sh"] },
            { desc: "메모리 사용량", keys: ["free", "-h"] },
            { desc: "OS/커널 정보", keys: ["uname", "-a"] },
            { desc: "명령어 히스토리", keys: ["history"] },
            { desc: "명령어 위치", keys: ["which", "<cmd>"] },
            { desc: "매뉴얼 보기", keys: ["man", "<cmd>"] },
            { desc: "환경변수 목록", keys: ["env"] }
        ]
    },
    {
        // 셸 명령이 아니라 명령창(콘솔) 자체를 다루는 키다.
        // 전체화면으로 잘못 바뀌었을 때 되돌리는 법을 못 찾는 경우가 잦아 따로 묶었다.
        category: "명령창 제어 (Console Window)",
        color: "#DB2777",
        icon: "🪟",
        items: [
            { desc: "전체화면 토글 (레거시 콘솔·cmd)", keys: ["Alt", "Enter"] },
            { desc: "전체화면 토글 (Windows Terminal)", keys: ["F11"] },
            { desc: "전체화면 해제 / 창 모드 복귀", keys: ["Win", "↓"] },
            { desc: "새 탭 열기 (Windows Terminal)", keys: ["Ctrl", "Shift", "T"] },
            { desc: "창 닫기 / 셸 종료", keys: ["Ctrl", "D"] }
        ]
    }
];

function renderShortcuts(filter = "") {
    const grid = document.getElementById('shortcutGrid');
    grid.innerHTML = "";

    shortcuts.forEach(cat => {
        const filteredItems = cat.items.filter(item =>
            item.desc.toLowerCase().includes(filter.toLowerCase()) ||
            cat.category.toLowerCase().includes(filter.toLowerCase()) ||
            item.keys.join(' ').toLowerCase().includes(filter.toLowerCase())
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

renderShortcuts();

document.getElementById('searchInput').addEventListener('input', (e) => {
    renderShortcuts(e.target.value);
});

window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
});
