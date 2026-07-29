// 공용 향상 스크립트 — 모든 치트시트 페이지 공통
//  카테고리 카드 접기/펼치기 (헤더 클릭) — 엑셀의 "그룹화"와 같은 개념
// "아는 항목 숨기기"는 js/known.js가 별도로 담당함.
// 각 페이지의 렌더 함수(renderShortcuts)와 독립적으로 동작하도록
// MutationObserver + 이벤트 위임으로 구현. 상태는 localStorage에 페이지별 저장.

(function () {
    const pageKey = (location.pathname.split('/').pop() || 'index').replace('.html', '') || 'index';
    const STORE = 'scs:' + pageKey;

    function load() {
        try { return JSON.parse(localStorage.getItem(STORE)) || {}; }
        catch (e) { return {}; }
    }
    function save(s) { localStorage.setItem(STORE, JSON.stringify(s)); }

    let state = load();
    state.collapsed = state.collapsed || {};   // { 카테고리명: true }

    const grid = document.getElementById('shortcutGrid');
    if (!grid) return;

    const catOf = card => (card.querySelector('.card-header h2')?.textContent || '').trim();

    let enhancing = false;

    function enhance() {
        if (enhancing) return;
        enhancing = true;

        grid.querySelectorAll('.card').forEach(card => {
            const cat = catOf(card);

            // --- 접기 캐럿 ---
            const header = card.querySelector('.card-header');
            if (header && !header.querySelector('.collapse-caret')) {
                const caret = document.createElement('span');
                caret.className = 'collapse-caret';
                caret.textContent = '▾';
                header.appendChild(caret);
            }
            card.classList.toggle('collapsed', !!state.collapsed[cat]);
        });

        enhancing = false;
    }

    // 그리드가 다시 그려질 때마다(검색 등) 재적용
    const observer = new MutationObserver(() => enhance());
    observer.observe(grid, { childList: true });

    // 클릭 위임: 헤더 클릭 → 접기 토글
    grid.addEventListener('click', e => {
        const header = e.target.closest('.card-header');
        if (header) {
            const card = header.closest('.card');
            const cat = catOf(card);
            if (state.collapsed[cat]) delete state.collapsed[cat]; else state.collapsed[cat] = true;
            save(state);
            card.classList.toggle('collapsed', !!state.collapsed[cat]);
        }
    });

    // --- 헤더 툴바: 전체 접기/펼치기 ---
    const actions = document.querySelector('.actions');
    if (actions) {
        const foldBtn = document.createElement('button');
        foldBtn.className = 'enh-toggle';
        foldBtn.type = 'button';
        foldBtn.style.cssText = 'padding:8px 14px;border-radius:8px;border:1px solid #e2e8f0;background:white;cursor:pointer;font-size:0.875rem;font-weight:500;margin-right:8px;';

        function anyCollapsed() { return grid.querySelectorAll('.card.collapsed').length > 0; }
        function syncFoldLabel() { foldBtn.textContent = anyCollapsed() ? '📂 전체 펼치기' : '📁 전체 접기'; }

        foldBtn.addEventListener('click', () => {
            const collapseAll = !anyCollapsed(); // 하나도 안 접혔으면 전부 접기
            grid.querySelectorAll('.card').forEach(card => {
                const cat = catOf(card);
                if (collapseAll) state.collapsed[cat] = true; else delete state.collapsed[cat];
                card.classList.toggle('collapsed', collapseAll);
            });
            save(state);
            syncFoldLabel();
        });

        actions.insertBefore(foldBtn, actions.firstChild);
        syncFoldLabel();
    }

    // 최초 1회 적용 (데이터 스크립트가 이미 렌더한 뒤 실행됨)
    enhance();
})();
