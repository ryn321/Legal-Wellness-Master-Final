## 2026-02-15 - Missing Security Headers in Next.js Config
**Vulnerability:** The application was missing critical security headers (X-Frame-Options, HSTS, etc.) in `next.config.ts`, despite memory suggesting they were present.
**Learning:** Always verify core security configurations directly in the code, as documentation or memory may be outdated or incorrect.
**Prevention:** Implement standard security headers in `next.config.ts` for all routes to provide a baseline defense-in-depth layer.
