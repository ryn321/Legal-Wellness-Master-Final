## 2025-05-15 - [Security Headers & CSP Enhancement]
**Vulnerability:** Lack of basic security headers and Content Security Policy (CSP), leaving the application vulnerable to clickjacking, MIME-sniffing, and XSS.
**Learning:** Next.js applications (especially those using React Three Fiber or Google Maps) require specific CSP directives like `frame-src` and `unsafe-inline` (for style/script hydration) to maintain functionality while enhancing security.
**Prevention:** Always implement a baseline set of security headers in `next.config.ts` during initial setup and regularly audit CSP rules as the application grows.
