# Project Instructions & Workflow Guidelines

## Git & Repository Maintenance Rules
1. **Push After Every Task**:
   - At the completion of each task/feature/fix, verify that the application builds cleanly (`npm run build`).
   - Stage the changes properly using `git add`.
   - Create a clean, meaningful commit message.
   - Push the commits to the remote repository (`git push origin <branch>`).

2. **Strictly Respect `.gitignore`**:
   - Never force-add (`git add -f`) or commit ignored files.
   - Files such as `.env`, `.env.local`, `dist/`, `node_modules/`, logs, and temporary editor files must remain ignored and excluded from git at all times.

3. **Code Quality & Maintenance**:
   - Maintain clean code structure, verify imports, and test builds before pushing.
   - Keep dependencies up-to-date and maintain repository health.
