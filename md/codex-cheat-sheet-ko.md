<!--
원문: https://github.com/BA-CalderonMorales/codex-cheat-sheet
Copyright (c) 2026 BA-CalderonMorales. Licensed under the MIT License.
명령어, 옵션, 코드 블록은 정확성을 위해 원문 표기를 유지했습니다.
-->

<div align="center">
# 코덱스 치트 시트
<a href="https://openai.com/codex/"><img width="763" height="341" alt="Codex cheat sheet" src="assets/image.png" /></a>
> **OpenAI Codex를 마스터하기 위한 완벽한 가이드 - 단 몇 분 만에 0에서 생산성까지.**

OpenAI Codex CLI를 효과적으로 사용하기 위한 실용적인 참고 자료입니다. 무엇을 위임해야 할지, 무엇을 스스로 처리해야 할지에 대해 비판적으로 생각하는 데 도움이 되는 패턴에 중점을 둡니다.

**공식 OpenAI Codex 문서 기반** - 모든 명령과 예제는 [공식 Codex 문서](https://developers.openai.com/codex)에서 제공됩니다. 최신 정보를 보려면 항상 공식 문서를 참조하세요.
</div>
## 빠른 시작
```bash
# Install with the official installer (recommended)
curl -fsSL https://chatgpt.com/codex/install.sh | sh

# Or with npm
npm install -g @openai/codex

# Or with Homebrew
brew install --cask codex

# Or with pnpm (official monorepo manager)
pnpm install -g @openai/codex

# Windows: Official install script
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"

# Self-update (installer installs)
codex update

# Launch Codex
codex

# Check version
codex --version
```
## 목차

- **[레벨 1: 시작하기](#level-1-getting-started)**
- **[레벨 2: 기본 명령](#level-2-basic-commands)**
- **[레벨 3: 중급 사용](#level-3-intermediate-usage)**
- **[레벨 4: 고급 기능](#level-4-advanced-features)**
- **[Skills](#skills)** - 재사용 가능한 기본 기능
- **[레벨 5: 전문가 워크플로](#level-5-expert-workflows)**

## 레벨 1: 시작하기

Codex를 시작하는 데 필요한 필수 명령입니다.
<details>
<summary><strong>Installation</strong></summary>

```bash
# Install globally with npm
npm install -g @openai/codex

# Install with Homebrew (macOS)
brew install --cask codex

# Install with pnpm (official monorepo manager)
pnpm install -g @openai/codex

# Official standalone installer (macOS/Linux)
curl -fsSL https://chatgpt.com/codex/install.sh | sh

# Windows: Official install script
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"

# Update with npm
npm install -g @openai/codex

# Update with Homebrew
brew upgrade --cask codex

# Self-update (when the installed release supports it)
codex update

# Download binary from GitHub releases
# Visit: https://github.com/openai/codex/releases/latest
```

</details>

<details>
<summary><strong>First Steps</strong></summary>

```bash
# Start interactive mode
codex

# Run with a specific prompt
codex "explain this project"

# Non-interactive execution
codex exec "explain utils.ts"
```

</details>

<details>
<summary><strong>Authentication</strong></summary>

```bash
# Sign in with ChatGPT account (recommended)
codex
# Then select "Sign in with ChatGPT"

# Use API key (alternative - usage-based billing)
printenv OPENAI_API_KEY | codex login --with-api-key
# Or from a file:
codex login --with-api-key < my_key.txt

# Use an access token
printenv CODEX_ACCESS_TOKEN | codex login --with-access-token

# Device authentication
codex login --device-auth

# Check login status (exit 0 = credentials present)
codex login status
```

</details>

<details>
<summary><strong>Basic Navigation</strong></summary>

```bash
# Keyboard shortcuts
Ctrl+C                    # Cancel current operation (or run /exit to close the session)
Tab                       # Queue a follow-up prompt, slash command, or shell command while Codex is working
↑/↓                       # Restore draft history
Esc Esc                   # Edit previous message (empty composer; forks the chat from that point)
Ctrl+R                    # Search prompt history
Ctrl+O                    # Copy the latest completed output
Enter                     # Inject new instructions into the current turn
!command                  # Run a local shell command under current approval/sandbox settings

# Special input
@                         # Trigger file search (fuzzy find)
```

</details>
## 레벨 2: 기본 명령

일상적으로 사용되는 핵심 명령입니다.
<details>
<summary><strong>Slash Commands - Essentials</strong></summary>

```bash
/model                    # Choose model and reasoning effort
/permissions              # Configure what Codex can do without approval
/fast                     # Toggle Fast mode for supported models
/personality              # Choose a communication style
/review                   # Review current changes and find issues
/new                      # Start a new chat during conversation
/init                     # Create an AGENTS.md file with instructions
/compact                  # Summarize conversation to prevent context limit
/diff                     # Show git diff (including untracked files)
/mention                  # Mention a file
/status                   # Show current session config and token usage
/mcp                      # List configured MCP tools
/side                     # Start an ephemeral side conversation (/btw)
/fork                     # Fork the current conversation into a new thread
/ps                       # Show background terminals and their output
/stop                     # Stop all background terminals
/logout                   # Log out of Codex
/quit                     # Exit Codex
/exit                     # Exit Codex
/feedback                 # Send logs to maintainers
/goal                     # Set or view a persistent task goal
/plan                     # Switch to plan mode for multi-step planning
/approve                  # Approve one retry of an automatic-review denial
/copy                     # Copy the latest completed output (or Ctrl+O)
/clear                    # Clear the terminal and start a new chat
/rename                   # Rename the current chat
/archive                  # Archive the current session and exit Codex
/delete                   # Permanently delete the current session and exit
/resume                   # Resume a saved chat from your session list
/app                      # Continue the session in the ChatGPT desktop app
/agent                    # Switch the active agent thread (also /subagents)
/apps                     # Browse apps (connectors) and insert into the prompt
/plugins                  # Browse installed and discoverable plugins
/hooks                    # View and manage lifecycle hooks
/memories                 # Configure memory use and generation
/import                   # Import Claude Code or Cursor setup
/experimental             # Toggle experimental features
/usage                    # View account token usage
/debug-config             # Print config layer diagnostics
/statusline               # Configure TUI footer items
/title                    # Configure terminal title items
/theme                    # Choose a syntax theme
/pets                     # Choose or hide a terminal pet (/pet)
/keymap                   # Remap TUI keyboard shortcuts
/vim                      # Toggle Vim mode for the composer
/ide                      # Include open files and IDE context
/raw                      # Toggle raw scrollback mode
/skills                   # Browse and use skills

# /debug is no longer documented; use /debug-config for config diagnostics
```

</details>

<details>
<summary><strong>File and Directory Operations</strong></summary>

```bash
# Codex can read, write, and edit files
"Read the contents of src/app.js"
"Create a new file called utils.js"
"Edit the function in main.py to add error handling"

# View project structure
"Explain the structure of this project"
"What files are in the src directory?"
```

</details>

<details>
<summary><strong>Working with Code</strong></summary>

```bash
# Code analysis
"Explain what this code does"
"Review this function for bugs"
"Suggest improvements for this file"

# Code generation
"Write a function to parse JSON"
"Create unit tests for this module"
"Add error handling to this code"
```

</details>

<details>
<summary><strong>Session Management</strong></summary>

```bash
# Resume sessions
codex resume                          # Open session picker
codex resume --last                   # Resume most recent session
codex resume <SESSION_ID>             # Resume specific session by ID

# Non-interactive session resume
codex exec resume <SESSION_ID>        # Resume non-interactive session
codex exec resume --last              # Resume last non-interactive session
```

</details>

<details>
<summary><strong>Subcommand Reference (0.147.0)</strong></summary>
| 명령 | 목적 |
|---|---|
| `코덱스 실행` | 비대화형으로 실행(별칭: `e`) |
| '코덱스 리뷰' | 비대화형 코드 검토([아래 섹션](#level-4-advanced-features) 참조) |
| `codex 로그인` / `codex 로그아웃` | 인증 관리 `codex 로그인 상태`는 자격 증명을 확인합니다 |
| `코덱스 이력서` | 저장된 세션 재개(선택기, 가장 최근의 경우 `--last`) |
| `코덱스 포크` | 세션을 새 채팅으로 분기 |
| `codex 아카이브` / `codex unarchive` | 저장된 세션 보관/복원 |
| `코덱스 삭제` | 세션을 영구적으로 삭제 |
| `코덱스 적용` | 로컬 작업 트리(별칭: `a`)에 Codex Cloud 채팅 차이점 적용 |
| '코덱스 클라우드' | Codex Cloud 작업 검색 또는 실행(실험적) |
| `코덱스 플러그인` | 플러그인을 설치, 나열 및 제거합니다. `codex 플러그인 마켓플레이스`는 소스를 관리합니다 |
| `코덱스 mcp` | MCP 서버 관리(목록, 추가, 제거, 인증) |
| `codex mcp-서버` | 더 이상 사용되지 않습니다. 대신 앱 서버를 사용하세요 |
| '코덱스 닥터' | 설치, 구성, 인증 및 런타임 상태 진단 |
| `코덱스 기능` | 기능 플래그 검사(목록/활성화/비활성화) |
| `코덱스 샌드박스` | Codex에서 제공하는 샌드박스 내에서 명령 실행 |
| `코덱스 업데이트` | 최신 버전으로 자체 업데이트 |
| `코덱스 완성` | 셸 완성 생성(bash, zsh, fish, powershell) |
| `코덱스 앱 서버` | 앱 서버 실행(실험적) |
| `codex exec-server` | 독립 실행형 exec-server 서비스 실행(실험적) |
| `코덱스 원격 제어` | 원격 제어로 앱 서버 데몬 관리(실험적) |
| `코덱스 디버그` | 디버깅 도구(실험적 하위 명령) |
</details>

<details>
<summary><strong>Useful CLI Flags</strong></summary>

```bash
# Model selection
codex --model gpt-5 "your prompt"
codex -m gpt-5.6-terra "complex task"

# Working directory
codex --cd /path/to/project           # Change working directory
codex -C ../other-project             # Short form

# Multiple directories
codex --add-dir ../backend --add-dir ../shared "analyze all"

# Approval settings
codex --ask-for-approval untrusted    # Ask for untrusted commands
codex -a on-request                   # Model decides when to ask (interactive)
codex exec -a never "task"            # Never ask (non-interactive runs)

# Sandbox settings
codex --sandbox read-only             # Read-only sandbox (default)
codex --sandbox workspace-write       # Allow workspace writes
codex --sandbox danger-full-access    # Disable sandbox (dangerous!)

# Image input
codex -i screenshot.png "explain this error"
codex --image img1.png,img2.jpg "summarize these diagrams"

# Live web search
codex --search "what is the latest version of X"

# Approval automation
codex --approve-for-me "refactor this"                     # Auto-review approvals
codex --dangerously-bypass-approvals-and-sandbox "task"    # No approvals, no sandbox (alias: --yolo)
codex --yolo "task"                                        # Short alias of the above

# Strict config
codex --strict-config                                      # Error on unknown config.toml fields

# Local open-source providers
codex --oss                                                # Use local open-source provider
codex --oss --local-provider ollama                        # Choose provider (lmstudio | ollama)

# Config profiles
codex -p work "your prompt"                                # Layer ~/.codex/work.config.toml

# Remote app server
codex --remote ws://host:port                              # Connect TUI to a remote app server
codex --remote wss://host:port --remote-auth-token-env TOKEN_ENV  # Bearer token from env var

# Shell completions
codex completion bash                 # Generate bash completions
codex completion zsh                  # Generate zsh completions
codex completion fish                 # Generate fish completions
```

</details>
## 레벨 3: 중간 사용

구성 및 사용자 정의 옵션.
<details>
<summary><strong>Configuration</strong></summary>

```bash
# Config file location: ~/.codex/config.toml
# Project overrides: .codex/config.toml (loaded only for trusted projects;
# provider/auth/notification/telemetry keys are ignored in project-scoped files)

# Edit config manually or use CLI flags
codex --model gpt-5.6-terra "your prompt"
codex --config model="gpt-5.6-terra"

# Common configurations in config.toml:
# - model selection
# - approval_policy
# - sandbox_mode
# - mcp_servers
# - profiles
```

</details>

<details>
<summary><strong>Model Selection</strong></summary>

```bash
# Set model in config.toml
model = "gpt-6-astra"               # New flagship: hardest end-to-end work across code, apps, research (rolling out)
model = "gpt-5.6-sol"              # Flagship: complex coding, computer use, research (recommended, September 2026)
model = "gpt-5.6-terra"            # Balanced: everyday coding and knowledge work
model = "gpt-5.6-luna"             # Fast: lightweight tasks, lowest cost

# For reasoning models (gpt-6-astra, gpt-5.6-sol, gpt-5.6-terra):
model_reasoning_effort = "medium"  # minimal, low, medium, high, xhigh
model_reasoning_summary = "auto"   # auto, concise, detailed, none

# For GPT-5 family models:
model_verbosity = "medium"         # low, medium, high

# Models available (as of September 2026):
# - gpt-6-astra - New flagship for complex work across code, apps, and research (rolling out)
# - gpt-5.6-sol (recommended) - Flagship for complex coding, computer use, research, security work
# - gpt-5.6-terra - Balances capability and cost for everyday coding and knowledge work
# - gpt-5.6-luna - Fastest, lowest-cost option for lightweight tasks
# - gpt-5.3-codex-spark - Text-only research preview for near-instant coding iteration (ChatGPT Pro)
# - gpt-5.5 - Previous-generation flagship
# - gpt-5.4 / gpt-5.4-mini - Retired from Codex with ChatGPT sign-in on Aug 31, 2026
# - gpt-5.2 / gpt-5.3-codex - Deprecated in Codex with ChatGPT sign-in
# - Other OpenAI models via custom providers
```
### 모델 업데이트(2026년 9월)

**GPT-6 Astra**는 클라이언트 전반에 걸쳐 출시되는 새로운 플래그십 모델입니다.
- 코드, 앱, 연구 전반에 걸쳐 가장 어려운 엔드투엔드 작업을 위해 특별히 제작되었습니다.
- 고급 추론, 컴퓨터 사용 및 강력한 판단을 결합합니다.
- 여러 단계와 도구에 걸쳐 지속적인 추론이 필요한 작업에 사용하세요.

**GPT-5.6 Sol**은 여전히 GPT-5.6의 주력 제품입니다.
- 복잡한 코딩, 컴퓨터 사용, 연구 및 보안 작업을 위해 특별히 제작되었습니다.
- 탁월한 지시 따르기 및 기술적 정확성

**GPT-5.6 Terra**는 성능과 비용의 균형을 유지합니다.
- 일상적인 코딩과 지식작업에 최적화되어 있습니다.
- 효율적인 토큰 사용을 통한 강력한 추론

**GPT-5.6 Luna**는 가장 빠르고 저렴한 옵션입니다.
- 가벼운 작업과 빠른 반복에 이상적
- 지연 시간을 최소화하면서 품질을 유지합니다.

**사용 중지:** gpt-5.4 및 gpt-5.4-mini는 2026년 8월 31일에 ChatGPT 로그인을 통해 Codex에서 사용 중지되었습니다(gpt-5.6-terra 및 gpt-5.6-luna로 대체). gpt-5.2 및 gpt-5.3-codex는 더 이상 사용되지 않습니다. OpenAI API 및 API 키 로그인은 영향을 받지 않습니다.

자세한 내용은 [공식 모델 페이지](https://developers.openai.com/codex/models)를 참조하세요.
</details>

<details>
<summary><strong>Custom Prompts</strong></summary>

```bash
# Create custom prompts in ~/.codex/prompts/

# Example: Create ~/.codex/prompts/review.md
# Then use with:
"Use the review prompt on this code"
```

</details>

<details>
<summary><strong>Memory with AGENTS.md</strong></summary>

```bash
# Create AGENTS.md in project root
# Codex will remember project-specific context

# Example AGENTS.md content:
"""
This project uses:
- Node.js with Express
- PostgreSQL database
- Jest for testing

Coding standards:
- Use TypeScript
- Follow ESLint rules
- Write tests for all new features
"""
```

</details>
## 레벨 4: 고급 기능

고급 워크플로우를 위한 강력한 기능.
<details>
<summary><strong>Model Context Protocol (MCP)</strong></summary>

```bash
# Configure MCP servers in ~/.codex/config.toml

# STDIO server example
[mcp_servers.filesystem]
command = "npx"
args = ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/files"]
env = { API_KEY = "value" }

# Streamable HTTP server example
[mcp_servers.figma]
url = "https://mcp.figma.com/mcp"
bearer_token_env_var = "FIGMA_TOKEN"

# MCP CLI commands
codex mcp list                        # List configured servers
codex mcp add <name> -- <command>     # Add a stdio server
codex mcp add <name> --url <URL>      # Add a streamable HTTP server
codex mcp get <name>                  # Show server details
codex mcp remove <name>               # Remove a server
codex mcp login <name>                # OAuth login (streamable HTTP)
codex mcp logout <name>               # OAuth logout

# Make startup fail if a server cannot initialize:
[mcp_servers.figma]
url = "https://mcp.figma.com/mcp"
required = true

# Plugins are the stable surface for packaged integrations
codex plugin list                     # List plugins from configured marketplaces
codex plugin add <plugin>             # Install a plugin (or PLUGIN@MARKETPLACE)
codex plugin marketplace list         # Manage plugin marketplaces

# Note: codex mcp-server is deprecated; use the app server instead

# Popular MCP servers:
# - Context7 (developer documentation)
# - Figma (design access)
# - Playwright (browser control)
# - GitHub (GitHub API access)
# - Sentry (log access)
```
자세한 내용은 [MCP 설명서](https://developers.openai.com/codex/configuration)를 참조하세요.
</details>

<details>
<summary><strong>Sandbox & Permissions</strong></summary>

```bash
# Configure sandbox mode in config.toml
sandbox_mode = "read-only"              # Default: read-only
sandbox_mode = "workspace-write"        # Allow writes in workspace
sandbox_mode = "danger-full-access"     # Disable sandbox (dangerous!)

# Configure approval policy (valid: untrusted | on-request | never; "on-failure" is deprecated)
approval_policy = "untrusted"           # Prompt for untrusted commands
approval_policy = "on-request"          # Model decides when to ask (interactive)
approval_policy = "never"               # Never prompt (non-interactive runs)

# Workspace-write options
[sandbox_workspace_write]
writable_roots = ["/path/to/extra/dir"]
network_access = false
exclude_tmpdir_env_var = false
exclude_slash_tmp = false
```
자세한 내용은 [샌드박스 및 승인](https://developers.openai.com/codex/sandboxing)을 참조하세요.
</details>

<details>
<summary><strong>Non-Interactive Mode</strong></summary>

```bash
# Execute and exit with codex exec
codex exec "summarize all TODO comments in this project"

# Auto-review approvals (workspace-write sandbox, automatic review)
codex exec --approve-for-me "refactor this code"

# Fully unattended (dangerous - skips all approvals and sandboxing)
codex exec --dangerously-bypass-approvals-and-sandbox "refactor this code"

# Full access (dangerous!)
codex exec --sandbox danger-full-access "your task"

# JSON output for automation
codex exec --json "analyze this project"

# Structured output with JSON schema
codex exec --output-schema schema.json "extract project details"

# Save output to file (writes only the agent's last message, not the full run)
codex exec -o output.txt "generate docs"

# Pair with --json in CI: JSONL events to stdout + final summary to the file
codex exec --json -o output.txt "generate docs"
```
자세한 내용은 [비대화형 모드(exec)](https://developers.openai.com/codex/non-interactive-mode)를 참조하세요.
</details>

<details>
<summary><strong>Non-Interactive Code Review</strong></summary>
TUI를 실행하지 않고 전용 검토를 실행합니다. 작업 트리를 수정하지 않고 우선순위가 지정된 결과를 보고합니다.
```bash
codex review --uncommitted                    # Review staged, unstaged, and untracked changes
codex review --base main                      # Review changes against a base branch
codex review --commit <SHA>                   # Review the changes introduced by a commit
codex review --uncommitted --title "wip: auth"  # Optional title in the review summary
codex review "focus on security issues"       # Custom review instructions
```
자세한 내용은 [코드 리뷰](https://developers.openai.com/codex/code-review)를 참조하세요.
</details>

<details>
<summary><strong>Piping and Scripting</strong></summary>

```bash
# Pipe content to Codex
cat logs.txt | codex exec "find the error"

# Use in scripts
git diff | codex exec "create a conventional commit message"

# Combine commands
codex exec "explain this file" < app.js > explanation.md
```

</details>

<details>
<summary><strong>Skills</strong></summary>

<a id="skills"></a>
- **정의:** Codex가 자동 검색할 수 있는 기본 온디스크 재사용 가능 기능입니다. 각 스킬은 `이름`, `설명` 및 디스크에 보관된 선택적 본문이 포함된 번들입니다. 기술은 일반적으로 사용 가능하며 기능 플래그가 필요하지 않습니다.
- **스킬이 있는 곳:** `~/.codex/skills/**/SKILL.md`(재귀). 정확히 `SKILL.md`라는 이름의 파일만 계산됩니다. 숨겨진 항목과 심볼릭 링크는 건너뜁니다.
- **파일 형식(YAML 머리말 + 본문):**
  ``마크다운
  ---
  이름: your-skill-name # 필수, 100자 이하, 한 줄
  설명: 사용 시기/이유 # 필수, 500자 이하, 한 줄
  ---

  # 선택적 본문(디스크에 보관됨)
  여기에 참조, 워크플로 또는 예시를 추가하세요.
  ````
- **스킬 사용:** 채팅에서 `$<skill-name>`을 언급하거나 TUI에서 `/skills`를 통해 검색/삽입하세요. Codex는 '이름', '설명' 및 절대 파일 경로만 삽입합니다.
- **검증 동작:** 잘못된 머리말은 무시할 수 있는 시작 모달 및 로그 항목을 트리거합니다. 유효하지 않은 스킬은 수정될 때까지 무시됩니다.
- **이 저장소의 샘플 기술:** 아래 샘플 중 하나를 `~/.codex/skills/<name>/SKILL.md`에 복사하거나 심볼릭 링크한 다음 Codex를 다시 시작하세요.
  - `skills/pdf-processing/SKILL.md`
  - `skills/log-review/SKILL.md`
  -`skills/form-filling/SKILL.md`
  -`skills/project-management/SKILL.md`
- **GitHub 기술과 결합:** 재사용 가능한 Codex 지침을 로컬에서 유지하면서 Codex 기술을 [github.com/skills](https://github.com/skills)의 학습 경로와 결합하여 신속하게 팀을 온보딩할 수 있습니다.
- **커뮤니티 대안(사전 기본 기술):** 커뮤니티 기반 기술 시스템을 선호하는 경우 [openskills](https://github.com/numman-ali/openskills) 프로젝트는 여전히 실행 가능한 오픈 소스 옵션입니다.
</details>
## 2025~2026년 새로운 기능

알아야 할 Codex의 최근 추가 사항:
<details>
<summary><strong>Task Goals</strong></summary>
`/goal` 명령은 장기 실행 작업에 대한 지속 목표를 설정합니다. 중지 조건이 충족될 때까지 계획 → 실행 → 테스트 → 검토를 반복합니다.

**용법:**
```bash
/goal Finish the migration and keep tests green    # Set a goal
/goal                                               # View current goal
/goal pause                                         # Pause the current run
/goal resume                                        # Resume a paused run
/goal clear                                         # Clear the current goal
```
**사용 시기:** 명확한 "완료" 정의를 통해 여러 시간 동안 검증된 작업입니다.
**건너뛰기:** 아직 탐색 중이거나 판단을 내리는 중이라면.

> **참고:** 하나의 측정 가능한 정지 조건을 정의하십시오. 표류하는 경우 `/goal Pause` 또는 `/goal Clear`를 사용하세요. 스크래치 지점에서 실행합니다.

자세한 내용은 [OpenAI의 목표 따르기 문서](https://developers.openai.com/codex/developer-commands#set-or-view-a-task-goal-with-goal)를 참조하세요.
</details>

<details>
<summary><strong>babysit-pr Skill</strong></summary>
`babysit-pr` 기술은 PR 유지 관리를 자동화합니다.
- CI 오류 자동 수정
- 리뷰댓글 처리
- 병합 충돌을 감시합니다.
- PR이 파이프라인을 통해 계속 이동하도록 합니다.
```bash
# Use with MCP GitHub integration
codex "babysit this PR with $github"
```

</details>

<details>
<summary><strong>JavaScript REPL (js_repl)</strong></summary>
증분 코드 실행을 위한 영구 JavaScript REPL:
- 실시간으로 코드 조각 테스트
- 전체 재실행 없이 로직 반복
- 복잡한 표현식 디버그
```bash
# Enable in config.toml
[mcp_servers.js_repl]
command = "node"
args = ["-e", "process.stdin.on('data', d => eval(d.toString()))"]
```

</details>

<details>
<summary><strong>In-Process App Server</strong></summary>
비대화형 `exec` 모드를 위한 새로운 아키텍처:
- 더 빠른 시작 시간
- CI/CD 통합에 더 적합
- 자동화 스크립트에 대한 오버헤드 감소
</details>
## Codex를 통한 AI 기반 프로젝트 관리

Codex는 단지 코드만을 위한 것이 아닙니다. 강력한 프로젝트 관리 보조자입니다. 프로젝트, 스프린트 및 작업 관리에 이를 활용하는 방법은 다음과 같습니다.
<details>
<summary><strong>Project Planning & Breakdown</strong></summary>

```bash
# Break down a large feature request
codex "Break down this feature request into actionable tasks:
- User authentication system
- Must support OAuth and email
- Include password reset flow
- Add 2FA option"

# Generate sprint backlog
codex exec "Analyze this project and create a sprint backlog:
- Prioritize by complexity
- Estimate effort in hours
- Identify dependencies"

# Create user stories
codex "Convert these requirements into user stories with acceptance criteria"
```

</details>

<details>
<summary><strong>GitHub Integration for Project Management</strong></summary>

```bash
# Auto-generate PR descriptions
git diff | codex exec "Create a detailed PR description with:
- Summary of changes
- Testing performed
- Breaking changes (if any)"

# Create issues from TODO comments
codex exec "Scan for TODO/FIXME comments and create GitHub issues"

# Generate release notes
codex exec "Create release notes from recent commits"
```

</details>

<details>
<summary><strong>Task Tracking & Status Updates</strong></summary>

```bash
# Generate status report
codex "Review recent commits and generate a status report for stakeholders"

# Track progress
codex "What percentage of sprint tasks are complete based on merged PRs?"

# Risk identification
codex "Analyze this project and identify potential blockers or risks"
```

</details>

<details>
<summary><strong>Team Collaboration Patterns</strong></summary>

```bash
# Code review automation
codex "Review this PR for:
- Security vulnerabilities
- Performance issues
- Code quality standards
- Test coverage gaps"

# Documentation sync
codex "Update the README based on recent feature additions"

# Onboarding assistance
codex "Create a new developer onboarding guide for this project"
```

</details>

<details>
<summary><strong>Creating Project Management Skills</strong></summary>
팀의 워크플로에 맞는 맞춤형 기술을 만들 수 있습니다.
```markdown
# ~/.codex/skills/team-sprint/SKILL.md
---
name: team-sprint
description: Manage sprint planning and tracking for our team
---

# Sprint Workflow
1. Use `/standup` to generate daily standup summaries
2. Use `/retro` to collect retrospective feedback
3. Use `/velocity` to calculate team velocity

# Templates
- Sprint planning template in docs/sprint-template.md
- Retrospective format: Start/Stop/Continue
```

</details>
## 레벨 5: 전문가 워크플로

고급 패턴 및 자동화.
<details>
<summary><strong>GitHub Actions Integration</strong></summary>

```yaml
# Use codex-action for CI/CD
name: Code Review
on: [pull_request]
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: openai/codex-action@v1
        with:
          task: "Review this PR for security issues"
```
자세한 내용은 [GitHub Action](https://github.com/openai/codex-action)을 참조하세요.
</details>

<details>
<summary><strong>Automated Code Review</strong></summary>

```bash
# Review entire PR
codex "Review this PR for security, performance, and maintainability"

# Generate conventional commit messages
git diff HEAD~1 | codex exec "Create a conventional commit message"

# Auto-fix common issues
codex "Fix all ESLint errors in this project"
```

</details>

<details>
<summary><strong>CI/CD Pipeline Assistance</strong></summary>

```bash
# Generate CI config
codex "Create a GitHub Actions workflow for:
- TypeScript project
- Run tests on PR
- Deploy to Vercel on main"

# Debug CI failures
cat .github/workflows/build.log | codex exec "Find the root cause"
```

</details>

<details>
<summary><strong>Legacy Code Migration</strong></summary>

```bash
# Convert between languages
codex "Convert this Python utility to TypeScript"

# Update deprecated APIs
codex "Update all React class components to functional components with hooks"

# Add type safety
codex "Add TypeScript types to this JavaScript project"
```

</details>

<details>
<summary><strong>Performance Optimization</strong></summary>

```bash
# Analyze bottlenecks
codex "Profile this code and identify performance bottlenecks"

# Optimize database queries
codex "Refactor these N+1 queries to use batch loading"

# Bundle optimization
codex "Suggest webpack optimizations to reduce bundle size"
```

</details>

<details>
<summary><strong>Security Auditing</strong></summary>

```bash
# Find vulnerabilities
codex "Audit this code for security vulnerabilities"

# Dependency checks
codex "Review package.json for outdated or vulnerable dependencies"

# Compliance check
codex "Check if this code follows OWASP security guidelines"
```

</details>

<details>
<summary><strong>Troubleshooting & Debugging</strong></summary>

```bash
# Analyze error logs
cat error.log | codex exec "find the root cause"

# Debug specific function
codex "Debug why the login function is failing"

# Reproduce and fix
codex "Create a test case that reproduces this bug, then fix it"
```

</details>

<details>
<summary><strong>Documentation</strong></summary>

```bash
# Generate README
codex exec "Create a comprehensive README for this project"

# API documentation
codex exec "Generate API docs from JSDoc comments"

# Code comments
codex "Add detailed comments to this complex function"
```

</details>

<details>
<summary><strong>Testing</strong></summary>

```bash
# Generate tests
codex "Create unit tests for all functions in utils.js"

# Test coverage
codex "Analyze test coverage and suggest missing tests"

# E2E test generation
codex "Create Playwright E2E tests for the user flow"
```

</details>

<details>
<summary><strong>Refactoring</strong></summary>

```bash
codex "Refactor this code to:
1. Improve readability
2. Add error handling
3. Follow TypeScript best practices
4. Add type definitions"
```

</details>
## 추가 리소스

**공식 OpenAI Codex 문서:**
- [공식 저장소](https://github.com/openai/codex) - 주요 저장소 및 문서 허브
- [시작 가이드](https://developers.openai.com/codex/quickstart) - 종합 시작 가이드
- [구성 참조](https://developers.openai.com/codex/configuration) - config.toml 참조 완료
- [개발자 명령](https://developers.openai.com/codex/developer-commands) - CLI 명령, 플래그, 슬래시 명령
- [비대화형 모드(exec)](https://developers.openai.com/codex/non-interactive-mode) - codex exec를 사용한 자동화
- [인증](https://developers.openai.com/codex/auth) - 인증방법
- [샌드박스 및 승인](https://developers.openai.com/codex/sandboxing) - 보안 및 샌드박싱
- [AGENTS.md 문서](https://developers.openai.com/codex/agent-configuration/agents-md) - 프로젝트 지침 가이드
- [MCP 통합](https://developers.openai.com/codex/configuration) - MCP 설정 및 사용법
- [사용자 정의 프롬프트](https://developers.openai.com/codex/prompting) - 사용자 정의 프롬프트 만들기
- [FAQ](https://developers.openai.com/codex/reference/troubleshooting) - 자주 묻는 질문
- [스킬](https://developers.openai.com/codex/skills-and-plugins) - 공식 가이드

**확장 및 통합:**
- [GitHub 액션](https://github.com/openai/codex-action) - CI/CD 통합
- [TypeScript SDK](https://developers.openai.com/codex/codex-sdk) - 프로그래밍 방식 사용
- [VS 코드 확장](https://developers.openai.com/codex/ide) - IDE 통합

**관련 도구:**
- [Kimi 치트 시트](https://github.com/BA-CalderonMorales/kimi-cheat-sheet) - Kimi Code CLI 동반 가이드

**모델 컨텍스트 프로토콜:**
- [MCP 사양](https://modelcontextprotocol.io/) - 공식 MCP 프로토콜 문서
- [MCP 서버 예제](https://github.com/modelcontextprotocol/servers) - 커뮤니티 MCP 서버

> **팁**: 항상 [공식 Codex 문서](https://github.com/openai/codex)에서 최신 기능과 업데이트를 확인하세요. 이 치트 시트는 빠른 참조용이지만 공식 문서에는 가장 포괄적이고 최신 정보가 포함되어 있습니다.

## 기여

문제를 발견했거나 제안사항이 있으신가요? 기여를 환영합니다!

- 버그나 문제 신고
- 새로운 사례를 제안해 보세요.
- 문서 개선
- 작업 흐름을 공유하세요

## 라이센스

MIT 라이선스 — 무료로 사용하고 수정할 수 있습니다.

## 크레딧 및 영감

이 치트 시트는 @Njengah의 뛰어난 [claude-code-cheat-sheet](https://github.com/Njengah/claude-code-cheat-sheet)에서 영감을 받았습니다. 우리는 OpenAI Codex CLI에 대한 유사한 빠른 참조 가이드를 만들기 위해 점진적인 학습 구조를 조정했습니다.
모든 명령과 예제는 [공식 OpenAI Codex 문서](https://developers.openai.com/codex)를 기준으로 검증되었습니다.

**최종 업데이트: 2026년 9월**  
**기준**: OpenAI Codex CLI(codex-cli 0.147.0, npm: @openai/codex)

---
*마지막 동기화 날짜: 2026년 9월 3일 [작업공간 관리자](https://github.com/BA-CalderonMorales)를 통해*
