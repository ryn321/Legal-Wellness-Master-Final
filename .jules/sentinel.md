## 2025-05-14 - Security Header Implementation
**Vulnerability:** Missing defense-in-depth security headers (HSTS, CSP, X-Frame-Options, etc.).
**Learning:** Next.js applications require manual configuration in `next.config.ts` to ensure standard security headers are applied to all routes. While some headers like `X-XSS-Protection` are legacy, others like `Permissions-Policy` and `Strict-Transport-Security` are critical for modern defense.
**Prevention:** Include a standard security header block in all new Next.js projects to establish a secure baseline from the start.
