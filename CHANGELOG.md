# Changelog

이 프로젝트의 주요 변경 사항을 기록합니다.
형식은 [Keep a Changelog](https://keepachangelog.com/ko/1.0.0/)를 참고합니다.

## [Unreleased]

### Added
- Terminal 페이지에 "명령창 제어 (Console Window)" 카테고리 추가: 전체화면 토글(Alt+Enter / F11), 창 모드 복귀(Win+↓), 새 탭, 셸 종료.
- "내가 아는 단축키" 기능: 각 줄의 토글로 아는 단축키를 표시(흐리게 처리)하고, 헤더 버튼으로 완전히 숨기기. 상태는 페이지별로 localStorage에 저장.
- 공용 스크립트 `js/known.js` (모든 페이지에 로드, 검색 재렌더링에도 유지).
- `CHANGELOG.md`, `TODO.md` 추가 및 `README.md` 전면 갱신(9개 페이지·신규 기능 반영).

### Fixed
- 모바일에서 고정 헤더가 상단 콘텐츠를 가리던 문제 수정 (좁은 화면에서는 헤더가 페이지와 함께 스크롤).

## [이전 이력]

### Added
- Terminal, GitHub 치트시트 페이지 추가.
- Claude Code(한국어) 치트시트 페이지 추가.
- AutoCAD 단축키 페이지 추가.
- Windows OS 단축키 페이지 추가.
- Google Search 연산자 페이지 추가.
- Markdown 문법 치트시트 추가 (Obsidian 콜아웃 포함).
- 각 페이지 푸터에 마크다운 원본 소스 링크 추가.

### Changed
- `html/`, `md/` 폴더 구조로 재정리.
- 데이터를 마크다운 파일로 분리/내보내기.
- 프리미엄 미학의 가독성 중심 레이아웃으로 복원.
- Excel 단축키를 MS 공식 문서 기준으로 업데이트.

### Initial
- 최초 릴리스: Excel / Google Sheets 치트시트, 실시간 검색, 인쇄 최적화.
