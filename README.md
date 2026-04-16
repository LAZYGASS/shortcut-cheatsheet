# Shortcut Cheat Sheet Project

이 프로젝트는 Excel 및 Google Sheets의 핵심 단축키를 프리미엄 디자인(Storyfox 스타일)으로 제공하는 웹 기반의 치트시트입니다.

## 🚀 Live Demo
👉 **[https://lazygass.github.io/shortcut-cheatsheet/](https://lazygass.github.io/shortcut-cheatsheet/)**

## 기능 (Features)

- 🖥️ **Excel 치트시트:** Windows 환경에 최적화된 엑셀 핵심 단축키.
- 📊 **Google Sheets 치트시트:** 구글 스프레드시트 단축키 (가장 많이 쓰는 기능 위주로 요약).
- 🔍 **실시간 검색 기능:** 원하는 단축키를 타이핑하면 즉시 필터링 해 줍니다. 단축키 `/`를 누르면 바로 포커스 됩니다.
- 🖨️ **인쇄 최적화:** `인쇄하기` 버튼을 누르면 딱 필요한 정보만 깔끔하게 A4 등에 출력됩니다 (군더더기 숨김).

## 기술 스택 (Tech Stack)

- **HTML5**: 구조화된 내용과 접근성 고려 (`<kbd>` 태그 활용).
- **CSS3**: 글래스모피즘(Glassmorphism) 시스템, Masonry 형태의 멀티 컬럼 레이아웃, 커스텀 변수 및 키보드 캡 테마.
- **Vanilla JavaScript**: 외부 라이브러리 없이 실시간 검색과 DOM 렌더링 구현.

## 실행 방법 (How to Run)

1. 별도의 서버 없이 `index.html` (Excel) 또는 `sheets.html` (Google Sheets)을 웹 브라우저 (Chrome, Edge 등)에서 바로 열어서 사용하시면 됩니다.
2. 프린트를 원하실 경우 우측 상단의 `인쇄하기` 버튼을 누르시면 됩니다.

## 구성 요소

- `index.html`: Excel 단축키 메인 화면 (Windows)
- `sheets.html`: Google Sheets 단축키 메인 화면
- `css/style.css`: 공통 스타일시트
- `js/app.js`: Excel 단축키 데이터 처리 스크립트
- `js/sheets.js`: Google Sheets 단축키 데이터 처리 스크립트
- `spread sheet.md`: 사용자 원본 Google Sheets 단축키 리스트
- `Excel_Shortcuts_Reference.xlsx`: 엑셀 오프라인 참고용 파일

---
**단축키를 까먹었을 때 당황하지 말고 치트시트를 켜세요! 🚀**
