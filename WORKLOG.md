# 작업 기록

## 2026-09-04 — XG5000 단축키 보완

- `js/xg5000.js`에 A/B 접점, P/N 변환 검출 접점, 출력·SET·RESET 코일, 라인, 줄·칸 편집, 설명문, 병렬 라인, 시뮬레이션, 타이머 펑션 단축키를 반영했다.
- 시뮬레이션 메뉴 조작은 동시 입력이 아닌 순차 입력임을 `Alt → T → S/E` 형식으로 표시했다.
- `md/xg5000_shortcuts.md`도 화면 데이터와 동일하게 갱신했다.
- 검증: `node --check js/xg5000.js` 및 `git diff --check` 통과.

## 남은 제한사항

- 단축키는 XG5000의 사용자 단축키 설정에 따라 달라질 수 있다.

## 2026-09-04 — Codex 치트시트 전체 추가

- BA-CalderonMorales/codex-cheat-sheet 저장소의 README 전체(1,036줄)를 `md/codex-cheat-sheet.md`에 가져왔다.
- MIT 라이선스 전문을 `md/codex-cheat-sheet-LICENSE.md`에 보관하고, 새 페이지와 원문에 저작권·출처를 표시했다.
- `html/codex.html`과 `js/codex.js`를 추가해 제목, 표, 코드 블록, 링크, 목록을 브라우저에서 읽을 수 있게 렌더링했다.
- 모든 기존 치트시트 페이지의 내비게이션에 Codex 탭을 추가했다.
- 검증: 원문 1,036줄, 가져온 문서 1,044줄(출처·라이선스 안내 8줄 포함), `node --check js/codex.js`, `git diff --check` 통과.

## 남은 제한사항

- 외부 원문은 갱신될 수 있으므로 최신 Codex 기능은 공식 OpenAI 문서에서 재확인해야 한다.

## 2026-09-04 — Codex 치트시트 한글화

- `md/codex-cheat-sheet-ko.md`에 설치·인증·입력·슬래시 명령·CLI 옵션·설정·MCP·샌드박스·자동화·리뷰·실무 워크플로를 한국어로 정리했다.
- 정확한 입력이 필요한 명령어, 옵션, 경로, 설정 키는 영어 원문을 유지했다.
- Codex 페이지가 한국어 문서를 표시하도록 `js/codex.js`를 변경했고, 전체 영어 원문과 MIT 라이선스는 별도 파일로 계속 보관한다.
- 검증: `node --check js/codex.js`, `git diff --check` 통과.

## 2026-09-04 — Codex 원문 전체 한글화

- 원문 1,036줄의 설명·제목·표 내용을 한국어화한 전체 번역본으로 `md/codex-cheat-sheet-ko.md`를 교체했다.
- 설치 명령, CLI 옵션, 코드 블록과 설정 예시는 실행 정확성을 위해 원문 표기를 유지했다.
- 원문에 포함된 접기 섹션을 보이도록 `js/codex.js`의 마크다운 렌더러를 보완했다.
- 검증: `node --check js/codex.js`, `git diff --check` 통과.
