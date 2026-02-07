## 2026-02-07 - [Missing Security Headers]
**Vulnerability:** Standard security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) were missing from `next.config.ts`.
**Learning:** Even if memory suggests they are implemented, the codebase should always be verified as the source of truth.
**Prevention:** Regularly audit `next.config.ts` or use a middleware to enforce security headers across the application.
