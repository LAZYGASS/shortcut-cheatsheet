const escapeHtml = (value) => value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const formatInlineMarkdown = (value) => escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

const renderTable = (rows) => {
    const cells = (row) => row.split("|").slice(1, -1).map((cell) => cell.trim());
    const [header, , ...body] = rows;
    const headerMarkup = cells(header).map((cell) => `<th>${formatInlineMarkdown(cell)}</th>`).join("");
    const bodyMarkup = body.map((row) => `<tr>${cells(row).map((cell) => `<td>${formatInlineMarkdown(cell)}</td>`).join("")}</tr>`).join("");

    return `<table><thead><tr>${headerMarkup}</tr></thead><tbody>${bodyMarkup}</tbody></table>`;
};

const renderMarkdown = (markdown) => {
    const lines = markdown.replace(/\r/g, "").split("\n");
    const output = [];

    for (let index = 0; index < lines.length; index += 1) {
        const line = lines[index];

        if (line.startsWith("<!--")) {
            while (index < lines.length && !lines[index].includes("-->")) index += 1;
            continue;
        }

        // 가져온 MIT 원문에서 사용하는 접기 구조와 앵커만 허용한다.
        if (line === "<details>" || line === "</details>" || line.startsWith("<summary>") || line.startsWith("<a id=")) {
            output.push(line);
            continue;
        }

        if (line.startsWith("```")) {
            const codeLines = [];
            index += 1;
            while (index < lines.length && !lines[index].startsWith("```")) {
                codeLines.push(lines[index]);
                index += 1;
            }
            output.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
            continue;
        }

        if (/^\|.*\|$/.test(line) && /^\|?\s*:?-+/.test(lines[index + 1] ?? "")) {
            const tableRows = [line, lines[index + 1]];
            index += 2;
            while (index < lines.length && /^\|.*\|$/.test(lines[index])) {
                tableRows.push(lines[index]);
                index += 1;
            }
            index -= 1;
            output.push(renderTable(tableRows));
            continue;
        }

        const heading = line.match(/^(#{1,3})\s+(.+)/);
        if (heading) {
            const level = heading[1].length;
            output.push(`<h${level}>${formatInlineMarkdown(heading[2])}</h${level}>`);
            continue;
        }

        if (line.startsWith("> ")) {
            output.push(`<blockquote>${formatInlineMarkdown(line.slice(2))}</blockquote>`);
            continue;
        }

        if (/^[-*]\s+/.test(line)) {
            output.push(`<ul><li>${formatInlineMarkdown(line.slice(2))}</li></ul>`);
            continue;
        }

        if (/^\d+\.\s+/.test(line)) {
            output.push(`<ol><li>${formatInlineMarkdown(line.replace(/^\d+\.\s+/, ""))}</li></ol>`);
            continue;
        }

        if (line.trim()) output.push(`<p>${formatInlineMarkdown(line)}</p>`);
    }

    return output.join("");
};

const loadCodexCheatSheet = async () => {
    const documentElement = document.getElementById("codexDocument");

    try {
        const response = await fetch("../md/codex-cheat-sheet-ko.md");
        if (!response.ok) throw new Error("치트시트 파일을 불러오지 못했습니다.");
        documentElement.innerHTML = renderMarkdown(await response.text());
    } catch (error) {
        documentElement.textContent = "치트시트를 불러오지 못했습니다. 웹 서버로 페이지를 열었는지 확인해 주세요.";
        console.error(error);
    }
};

loadCodexCheatSheet();
