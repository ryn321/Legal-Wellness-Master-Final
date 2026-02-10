## 2025-05-15 - [Security Headers]
**Vulnerability:** Missing standard security headers (X-Frame-Options, HSTS, CSP, etc.) in Next.js configuration.
**Learning:** Default Next.js configurations often omit these critical security layers, leaving applications vulnerable to clickjacking and MIME-sniffing.
**Prevention:** Always implement a robust `headers()` configuration in `next.config.ts` as a baseline defense-in-depth measure.
