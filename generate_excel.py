import pandas as pd

data = [
    ["Category", "Description", "Shortcut (Windows)"],
    ["Formatting", "가운데 정렬 (Center Align)", "Alt + H + A + C"],
    ["Formatting", "표 전체 테두리 (All Borders)", "Alt + H + B + A"],
    ["Formatting", "테두리 색상 변경 (Border Color)", "Alt + H + B + I"],
    ["Formatting", "굵게 (Bold)", "Ctrl + B"],
    ["Navigation", "셀 편집 (Edit Cell)", "F2"],
    ["Navigation", "절대 참조 변환 (Absolute Ref)", "F4"],
    ["Data", "자동 합계 (Auto Sum)", "Alt + ="],
    ["Data", "필터 (Filter)", "Ctrl + Shift + L"],
]

df = pd.DataFrame(data[1:], columns=data[0])
output_path = "c:/Users/bdmbo/Desktop/INVENTORY/cheat-sheet/Excel_Shortcuts_Reference.xlsx"

try:
    df.to_excel(output_path, index=False)
    print(f"Success: {output_path}")
except Exception as e:
    # If to_excel fails (maybe missing openpyxl), try CSV
    csv_path = "c:/Users/bdmbo/Desktop/INVENTORY/cheat-sheet/Excel_Shortcuts_Reference.csv"
    df.to_csv(csv_path, index=False)
    print(f"Excel failed, created CSV instead: {csv_path}")
