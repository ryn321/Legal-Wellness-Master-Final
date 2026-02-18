## 2025-05-14 - Comprehensive Security Headers Implementation
**Vulnerability:** Missing security headers (CSP, HSTS, X-Frame-Options, etc.) left the application vulnerable to XSS, Clickjacking, and MIME-sniffing.
**Learning:** Next.js applications require explicit configuration in `next.config.ts` to implement these headers at the server level. Standard Next.js hydration requires `'unsafe-inline'` and `'unsafe-eval'` in the CSP unless nonces or hashes are implemented for all scripts, which is complex for a quick fix.
**Prevention:** Always include a baseline security header configuration in `next.config.ts` from the start of a project.
