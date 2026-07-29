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
            { desc: "해치 (Hatch)", keys: ["H", "Space"] },
            { desc: "그라데이션 채우기 (Gradient)", keys: ["GD", "Space"] },
            { desc: "그룹 지정 (Group)", keys: ["G", "Space"] },
            { desc: "도넛 (Donut)", keys: ["DO", "Space"] },
            { desc: "무한선 (Xline)", keys: ["XL", "Space"] },
            { desc: "블록 정의 (Block)", keys: ["B", "Space"] },
            { desc: "점 (Point)", keys: ["PO", "Space"] },
            { desc: "등간격 점/블록 (Measure)", keys: ["ME", "Space"] },
            { desc: "등분점 작성 (Divide)", keys: ["DIV", "Space"] },
            { desc: "스플라인 (Spline)", keys: ["SPL", "Space"] },
            { desc: "다중 평행선 (Mline)", keys: ["ML", "Space"] },
            { desc: "영역 (Region)", keys: ["REG", "Space"] },
            { desc: "경계 (Boundary)", keys: ["BO", "Space"] },
            { desc: "2D 솔리드 채우기 (Solid)", keys: ["SO", "Space"] }
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
            { desc: "정렬 (Align)", keys: ["AL", "Space"] },
            { desc: "대칭 복사 (Mirror)", keys: ["MI", "Space"] },
            { desc: "모깎기 (Fillet)", keys: ["F", "Space"] },
            { desc: "모따기 (Chamfer)", keys: ["CHA", "Space"] },
            { desc: "신축 (Stretch)", keys: ["S", "Space"] },
            { desc: "축척 (Scale)", keys: ["SC", "Space"] },
            { desc: "분해 (Explode)", keys: ["X", "Space"] },
            { desc: "배열 복사 (Array)", keys: ["AR", "Space"] },
            { desc: "끊기 (Break)", keys: ["BR", "Space"] },
            { desc: "길이 조정 (Lengthen)", keys: ["LEN", "Space"] },
            { desc: "결합 (Join)", keys: ["J", "Space"] },
            { desc: "폴리선 편집 (Pedit)", keys: ["PE", "Space"] },
            { desc: "스플라인 편집 (Splinedit)", keys: ["SPE", "Space"] },
            { desc: "해치 편집 (Hatchedit)", keys: ["HE", "Space"] },
            { desc: "그리기 순서 변경 (Draworder)", keys: ["DR", "Space"] }
        ]
    },
    {
        category: "치수 및 문자 (Dimensions & Text)",
        color: "#6D28D9", // Purple
        icon: "📏",
        items: [
            { desc: "선형 치수 (Dim Linear)", keys: ["DLI", "Space"] },
            { desc: "정렬 치수 (Dim Aligned)", keys: ["DAL", "Space"] },
            { desc: "각도 치수 (Dim Angular)", keys: ["DAN", "Space"] },
            { desc: "호 길이 치수 (Dim Arc)", keys: ["DAR", "Space"] },
            { desc: "지름 치수 (Dim Diameter)", keys: ["DDI", "Space"] },
            { desc: "반지름 치수 (Dim Radius)", keys: ["DRA", "Space"] },
            { desc: "꺾인 치수 (Dim Jogged)", keys: ["DJO", "Space"] },
            { desc: "꺾기선 추가/제거 (Dim Jogline)", keys: ["DJL", "Space"] },
            { desc: "세로좌표 치수 (Dim Ordinate)", keys: ["DOR", "Space"] },
            { desc: "기준선 치수 (Dim Baseline)", keys: ["DBA", "Space"] },
            { desc: "연속 치수 (Dim Continue)", keys: ["DCO", "Space"] },
            { desc: "중심 표식 (Dim Center)", keys: ["DCE", "Space"] },
            { desc: "치수 편집 (Dim Edit)", keys: ["DED", "Space"] },
            { desc: "치수 변수 재지정 (Dim Override)", keys: ["DOV", "Space"] },
            { desc: "치수 연관성 제거 (Dim Disassociate)", keys: ["DDA", "Space"] },
            { desc: "치수 재연관 (Dim Reassociate)", keys: ["DRE", "Space"] },
            { desc: "형상 공차 (Tolerance)", keys: ["TOL", "Space"] },
            { desc: "지시선 (Qleader)", keys: ["LE", "Space"] },
            { desc: "다중 지시선 (Mleader)", keys: ["MLD", "Space"] },
            { desc: "다중 지시선 편집", keys: ["MLE", "Space"] },
            { desc: "다중 지시선 정렬", keys: ["MLA", "Space"] },
            { desc: "다중 지시선 수집", keys: ["MLC", "Space"] },
            { desc: "다중 지시선 스타일", keys: ["MLS", "Space"] },
            { desc: "치수 스타일 (Dim Style)", keys: ["D", "Space"] },
            { desc: "단일행 문자 (Text)", keys: ["DT", "Space"] },
            { desc: "다중행 문자 (MText)", keys: ["T", "Space"] },
            { desc: "문자 편집 (DDEdit)", keys: ["ED", "Space"] },
            { desc: "치수/문자 편집 (Textedit)", keys: ["TED", "Space"] },
            { desc: "문자 정렬 (Textalign)", keys: ["TA", "Space"] },
            { desc: "문자 스타일 (Style)", keys: ["ST", "Space"] },
            { desc: "테이블 (Table)", keys: ["TB", "Space"] },
            { desc: "테이블 스타일 (Tablestyle)", keys: ["TS", "Space"] },
            { desc: "현재 테이블 스타일 지정", keys: ["CT", "Space"] }
        ]
    },
    {
        category: "도면층·특성·조회 (Layers, Props & Inquiry)",
        color: "#D97706", // Amber
        icon: "🎨",
        items: [
            { desc: "도면층 특성 (Layer)", keys: ["LA", "Space"] },
            { desc: "도면층 상태 관리 (Layerstate)", keys: ["LAS", "Space"] },
            { desc: "특성 창 (Properties)", keys: ["PR", "Space"] },
            { desc: "빠른 특성 표시 (Quickproperties)", keys: ["QP", "Space"] },
            { desc: "특성 일치 (Match Prop)", keys: ["MA", "Space"] },
            { desc: "색상 설정 (Color)", keys: ["COL", "Space"] },
            { desc: "선종류 설정 (Linetype)", keys: ["LT", "Space"] },
            { desc: "선종류 축척 (Ltscale)", keys: ["LTS", "Space"] },
            { desc: "단위 설정 (Units)", keys: ["UN", "Space"] },
            { desc: "거리 측정 (Distance)", keys: ["DI", "Space"] },
            { desc: "면적 계산 (Area)", keys: ["AA", "Space"] },
            { desc: "거리·각도·면적 측정 (Measuregeom)", keys: ["MEA", "Space"] },
            { desc: "좌표 확인 (ID)", keys: ["ID", "Space"] },
            { desc: "객체 정보 (List)", keys: ["LI", "Space"] },
            { desc: "철자 검사 (Spell)", keys: ["SP", "Space"] },
            { desc: "시스템 변수 (Setvar)", keys: ["SET", "Space"] },
            { desc: "사용 안 함 정리 (Purge)", keys: ["PU", "Space"] },
            { desc: "이름 바꾸기 (Rename)", keys: ["REN", "Space"] }
        ]
    },
    {
        category: "블록·속성·외부참조 (Blocks & Xrefs)",
        color: "#9333EA", // Violet
        icon: "🧩",
        items: [
            { desc: "블록/도면 삽입 (Insert)", keys: ["I", "Space"] },
            { desc: "새 도면 파일로 쓰기 (Wblock)", keys: ["W", "Space"] },
            { desc: "블록 편집기 열기 (Bedit)", keys: ["BE", "Space"] },
            { desc: "블록 편집기 닫기 (Bclose)", keys: ["BC", "Space"] },
            { desc: "현재 블록 정의 저장 (Bsave)", keys: ["BS", "Space"] },
            { desc: "동적 블록 가시성 상태 (Bvstate)", keys: ["BVS", "Space"] },
            { desc: "매개변수 추가 (Bparameter)", keys: ["PARAM", "Space"] },
            { desc: "연관 매개변수 조정 (Parameters)", keys: ["PAR", "Space"] },
            { desc: "속성 정의 (Attdef)", keys: ["ATT", "Space"] },
            { desc: "속성 정보 편집 (Attedit)", keys: ["ATE", "Space"] },
            { desc: "속성 문자 편집 (Attipedit)", keys: ["ATI", "Space"] },
            { desc: "외부 참조 팔레트 (Externalreferences)", keys: ["ER", "Space"] },
            { desc: "외부 참조 삽입 (Xattach)", keys: ["XA", "Space"] },
            { desc: "외부 참조 결합 (Xbind)", keys: ["XB", "Space"] },
            { desc: "외부 참조 자르기 (Xclip)", keys: ["XC", "Space"] },
            { desc: "외부 참조 관리 (Xref)", keys: ["XR", "Space"] },
            { desc: "이미지 참조 팔레트 (Image)", keys: ["IM", "Space"] },
            { desc: "이미지 삽입 (Imageattach)", keys: ["IAT", "Space"] },
            { desc: "이미지 자르기 (Imageclip)", keys: ["ICL", "Space"] },
            { desc: "이미지 조정 (Imageadjust)", keys: ["IAD", "Space"] }
        ]
    },
    {
        category: "뷰 및 화면 표시 (View & Display)",
        color: "#059669", // Emerald
        icon: "👀",
        items: [
            { desc: "화면 갱신 (Redraw)", keys: ["R", "Space"] },
            { desc: "모든 뷰포트 갱신 (Redrawall)", keys: ["RA", "Space"] },
            { desc: "재생성 (Regen)", keys: ["RE", "Space"] },
            { desc: "전체 재생성 (Regenall)", keys: ["REA", "Space"] },
            { desc: "화면 이동 (Pan)", keys: ["P", "Space"] },
            { desc: "전체 화면 줌", keys: ["Z", "Space", "A", "Space"] },
            { desc: "선택 객체 줌", keys: ["Z", "Space", "O", "Space"] },
            { desc: "명령 취소 (Undo)", keys: ["U", "Space"] },
            { desc: "명령 복구 (Redo)", keys: ["REDO"] },
            { desc: "명명된 뷰 관리 (View)", keys: ["V", "Space"] },
            { desc: "명명된 뷰 복원 (Viewgo)", keys: ["VGO", "Space"] },
            { desc: "3D 뷰 방향 설정 (Ddvpoint)", keys: ["VP", "Space"] },
            { desc: "비주얼 스타일 설정 (Vscurrent)", keys: ["VS", "Space"] },
            { desc: "비주얼 스타일 관리 (Visualstyles)", keys: ["VSM", "Space"] },
            { desc: "은선 제거 (Hide)", keys: ["HI", "Space"] },
            { desc: "3D 뷰 회전 (3Dorbit)", keys: ["ORBIT", "Space"] },
            { desc: "카메라·표적 뷰 정의 (Dview)", keys: ["DV", "Space"] },
            { desc: "ViewCube 설정 (Navvcube)", keys: ["CUBE", "Space"] },
            { desc: "탐색 휠 (Navswheel)", keys: ["WHEEL", "Space"] },
            { desc: "모형 공간으로 전환 (Mspace)", keys: ["MS", "Space"] },
            { desc: "도면 공간으로 전환 (Pspace)", keys: ["PS", "Space"] },
            { desc: "배치 뷰포트 (Mview)", keys: ["MV", "Space"] },
            { desc: "도면 공간 접근 전환 (Tilemode)", keys: ["TI", "Space"] },
            { desc: "배치 탭 관리 (Layout)", keys: ["LO", "Space"] }
        ]
    },
    {
        category: "3D 모델링 및 렌더링 (3D & Rendering)",
        color: "#0D9488", // Teal
        icon: "🧊",
        items: [
            { desc: "돌출 (Extrude)", keys: ["EXT", "Space"] },
            { desc: "회전체 (Revolve)", keys: ["REV", "Space"] },
            { desc: "합집합 (Union)", keys: ["UNI", "Space"] },
            { desc: "차집합 (Subtract)", keys: ["SU", "Space"] },
            { desc: "교집합 (Intersect)", keys: ["IN", "Space"] },
            { desc: "간섭 검사 (Interfere)", keys: ["INF", "Space"] },
            { desc: "슬라이스 (Slice)", keys: ["SL", "Space"] },
            { desc: "폴리솔리드 (Polysolid)", keys: ["PSOLID", "Space"] },
            { desc: "원통 (Cylinder)", keys: ["CYL", "Space"] },
            { desc: "도넛형 솔리드 (Torus)", keys: ["TOR", "Space"] },
            { desc: "쐐기 (Wedge)", keys: ["WE", "Space"] },
            { desc: "피라미드 (Pyramid)", keys: ["PYR", "Space"] },
            { desc: "표면 패치 (Surfpatch)", keys: ["PATCH", "Space"] },
            { desc: "단면 작성 (Section)", keys: ["SEC", "Space"] },
            { desc: "절단 평면 (Sectionplane)", keys: ["SPLANE", "Space"] },
            { desc: "2D 평면 투영 (Flatshot)", keys: ["FSHOT", "Space"] },
            { desc: "두께 설정 (Thickness)", keys: ["TH", "Space"] },
            { desc: "카메라 설정 (Camera)", keys: ["CAM", "Space"] },
            { desc: "렌더링 (Render)", keys: ["RR", "Space"] },
            { desc: "렌더 윈도우만 표시 (Renderwin)", keys: ["RW", "Space"] },
            { desc: "렌더 사전 설정 (Renderpresets)", keys: ["RP", "Space"] },
            { desc: "고급 렌더 설정 (Rpref)", keys: ["RPR", "Space"] },
            { desc: "영역 렌더링 (Rendercrop)", keys: ["RC", "Space"] },
            { desc: "재료 창 (Materials)", keys: ["MAT", "Space"] }
        ]
    },
    {
        category: "파일·출력·데이터 교환 (File, Plot & Data)",
        color: "#78350F", // Brown
        icon: "📤",
        items: [
            { desc: "플롯 (Plot)", keys: ["PRINT", "Space"] },
            { desc: "인쇄 미리보기 (Preview)", keys: ["PRE", "Space"] },
            { desc: "다른 형식으로 내보내기 (Export)", keys: ["EXP", "Space"] },
            { desc: "다른 형식 가져오기 (Import)", keys: ["IMP", "Space"] },
            { desc: "PDF로 내보내기 (Exportpdf)", keys: ["EPDF", "Space"] },
            { desc: "외부 DB 연결 (Dbconnect)", keys: ["DBC", "Space"] },
            { desc: "데이터 링크 (Datalink)", keys: ["DL", "Space"] },
            { desc: "데이터 링크 업데이트", keys: ["DLU", "Space"] },
            { desc: "도면 데이터 추출 (Dataextraction)", keys: ["DX", "Space"] },
            { desc: "스크립트 실행 (Script)", keys: ["SCR", "Space"] },
            { desc: "표준 파일 관리 (Standards)", keys: ["STA", "Space"] },
            { desc: "표준 위반 확인 (Checkstandards)", keys: ["CHK", "Space"] },
            { desc: "전송 패키지 작성 (Etransmit)", keys: ["ZIP", "Space"] },
            { desc: "프로그램 종료 (Quit)", keys: ["EXIT", "Space"] }
        ]
    },
    {
        category: "기능키 전체 (F1-F12)",
        color: "#4B5563", // Gray
        icon: "⌨️",
        items: [
            { desc: "도움말 표시", keys: ["F1"] },
            { desc: "명령 윈도우 사용내역", keys: ["F2"] },
            { desc: "객체 스냅 켜기/끄기", keys: ["F3"] },
            { desc: "3DOsnap 전환", keys: ["F4"] },
            { desc: "등각평면 전환 (Isoplane)", keys: ["F5"] },
            { desc: "동적 UCS 전환", keys: ["F6"] },
            { desc: "그리드 표시", keys: ["F7"] },
            { desc: "직교 모드 (Ortho)", keys: ["F8"] },
            { desc: "스냅 모드 전환", keys: ["F9"] },
            { desc: "극좌표 추적 (Polar)", keys: ["F10"] },
            { desc: "객체 스냅 추적", keys: ["F11"] },
            { desc: "동적 입력 (Dynamic)", keys: ["F12"] },
            { desc: "선가중치 표시", keys: ["LW", "Space"] }
        ]
    },
    {
        category: "화면 관리 (팔레트 전환)",
        color: "#0EA5E9", // Sky
        icon: "🖥️",
        items: [
            { desc: "팔레트 모두 닫기", keys: ["Ctrl", "0"] },
            { desc: "특성 팔레트", keys: ["Ctrl", "1"] },
            { desc: "Design Center 팔레트", keys: ["Ctrl", "2"] },
            { desc: "도구 팔레트", keys: ["Ctrl", "3"] },
            { desc: "시트 세트 팔레트", keys: ["Ctrl", "4"] },
            { desc: "데이터베이스 연결 관리자", keys: ["Ctrl", "6"] },
            { desc: "표식 세트 관리자", keys: ["Ctrl", "7"] },
            { desc: "빠른 계산기", keys: ["Ctrl", "8"] },
            { desc: "명령행", keys: ["Ctrl", "9"] },
            { desc: "좌표 표시 전환", keys: ["Ctrl", "D"] },
            { desc: "그리드 전환", keys: ["Ctrl", "G"] },
            { desc: "등각투영 평면 순환", keys: ["Ctrl", "E"] },
            { desc: "활성 객체 스냅 전환", keys: ["Ctrl", "F"] },
            { desc: "프로그램 설정 (Options)", keys: ["OP", "Space"] },
            { desc: "도구 팔레트 열기 (Toolpalettes)", keys: ["TP", "Space"] },
            { desc: "도구막대 관리 (Toolbar)", keys: ["TO", "Space"] },
            { desc: "컨텐츠 관리자 (Adcenter)", keys: ["ADC", "Space"] },
            { desc: "빠른 계산기 (Quickcalc)", keys: ["QC", "Space"] },
            { desc: "표식 세트 관리자 (Markup)", keys: ["MSM", "Space"] },
            { desc: "시트 세트 관리자 (Sheetset)", keys: ["SSM", "Space"] },
            { desc: "팔레트 숨기기 (Hidepalettes)", keys: ["POFF", "Space"] },
            { desc: "숨긴 팔레트 다시 표시 (Showpalettes)", keys: ["PON", "Space"] },
            { desc: "명령행 표시 (Commandline)", keys: ["CLI", "Space"] },
            { desc: "CUI 사용자화 편집기 (Quickcui)", keys: ["QCUI", "Space"] }
        ]
    },
    {
        category: "파일 및 워크플로우 (File & Workflow)",
        color: "#334155", // Slate
        icon: "💾",
        items: [
            { desc: "저장 (Qsave)", keys: ["Q", "Space"] },
            { desc: "새 도면", keys: ["Ctrl", "N"] },
            { desc: "도면 저장", keys: ["Ctrl", "S"] },
            { desc: "도면 열기", keys: ["Ctrl", "O"] },
            { desc: "플롯 대화상자", keys: ["Ctrl", "P"] },
            { desc: "모든 객체 선택", keys: ["Ctrl", "A"] },
            { desc: "복사 / 잘라내기 / 붙여넣기", keys: ["Ctrl", "C/X/V"] },
            { desc: "작업 취소 / 복구", keys: ["Ctrl", "Z/Y"] },
            { desc: "다음 / 이전 도면으로 전환", keys: ["Ctrl", "Tab/Shift+Tab"] },
            { desc: "이전 / 다음 배치 탭", keys: ["Ctrl", "PgUp/PgDn"] },
            { desc: "끝내기 (Quit)", keys: ["Ctrl", "Q"] }
        ]
    },
    {
        category: "고급 기능 및 자동화 (Advanced & Automation)",
        color: "#831843", // Rose/Maroon
        icon: "🧠",
        items: [
            { desc: "사용자 좌표계 관리 (Ucsman)", keys: ["UC", "Space"] },
            { desc: "활성 객체 스냅 설정 (Osnap)", keys: ["OS", "Space"] },
            { desc: "그리드/스냅/추적 설정 (Dsettings)", keys: ["DS", "Space"] },
            { desc: "커서 이동 제한 (Snap)", keys: ["SN", "Space"] },
            { desc: "선택 세트 필터 (Filter)", keys: ["FI", "Space"] },
            { desc: "인접 객체 선택 (Fsmode)", keys: ["FS", "Space"] },
            { desc: "링크/포함 객체 삽입 (Insertobj)", keys: ["IO", "Space"] },
            { desc: "서식 지정 붙여넣기 (Pastespec)", keys: ["PA", "Space"] },
            { desc: "숨긴 객체 다시 표시 (Unisolateobjects)", keys: ["UNHIDE", "Space"] },
            { desc: "형상 구속조건 적용 (Geoconstraint)", keys: ["GCON", "Space"] },
            { desc: "치수 구속조건 적용 (Dimconstraint)", keys: ["DCON", "Space"] },
            { desc: "구속조건 표시줄 (Constraintbar)", keys: ["CBAR", "Space"] },
            { desc: "동작 레코더 시작 (Actrecord)", keys: ["ARR", "Space"] },
            { desc: "동작 레코더 정지 (Actstop)", keys: ["ARS", "Space"] },
            { desc: "동작 매크로 사용자 메시지 (Actusermessage)", keys: ["ARM", "Space"] },
            { desc: "동작 매크로 사용자 입력 (Actuserinput)", keys: ["ARU", "Space"] },
            { desc: "응용프로그램 로드 (Appload)", keys: ["AP", "Space"] },
            { desc: "지리적 위치 지정 (Geographiclocation)", keys: ["GEO", "Space"] },
            { desc: "점 구름 파일 삽입 (Pointcloud)", keys: ["PC", "Space"] },
            { desc: "표면 연속성 분석 (Analysiszebra)", keys: ["ZEBRA", "Space"] },
            { desc: "메쉬 부드럽기 낮추기 (Meshsmoothless)", keys: ["LESS", "Space"] },
            { desc: "메쉬 부드럽기 높이기 (Meshsmoothmore)", keys: ["MORE", "Space"] },
            { desc: "메쉬 면 분할 (Meshsplit)", keys: ["SPLIT", "Space"] },
            { desc: "명명된 뷰 애니메이션 재생 (Viewplay)", keys: ["VPLAY", "Space"] },
            { desc: "동작 포함 명명된 뷰 (Newshot)", keys: ["NSHOT", "Space"] },
            { desc: "명명된 뷰 작성 (Newview)", keys: ["NVIEW", "Space"] },
            { desc: "범주별 명명된 뷰 재생 (Sequenceplay)", keys: ["SPLAY", "Space"] },
            { desc: "도면/배치 미리보기 (Qvdrawing/Qvlayout)", keys: ["QVD/QVL", "Space"] },
            { desc: "도면 복구 관리자 (Drawingrecovery)", keys: ["DRM", "Space"] }
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
