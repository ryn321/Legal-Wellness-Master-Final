## 2025-05-15 - Discrepancy between Memory and Codebase
**Vulnerability:** Missing security headers despite being documented as "configured" in memory.
**Learning:** Memory can contain intent or past states that no longer match the current codebase. Relying solely on memory for security assumptions (like "headers are already there") can lead to missing fundamental protections.
**Prevention:** Always verify security configurations directly in the source code. Use standard headers like `X-Frame-Options`, `X-Content-Type-Options`, and `Strict-Transport-Security` as a baseline for all Next.js projects.
