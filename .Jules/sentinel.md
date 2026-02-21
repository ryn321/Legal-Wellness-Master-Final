## 2026-02-21 - [Security Headers & CSP Implementation]
**Vulnerability:** Missing standard security headers (HSTS, X-Frame-Options, CSP) and information disclosure via X-Powered-By header.
**Learning:** Baseline security headers and a CSP were missing despite previous documentation/memory suggesting their presence, indicating a regression or incomplete initial setup. A strict CSP in Next.js 15+ requires whitelisting specific external domains like Google Maps for frames.
**Prevention:** Always verify security configurations directly in the source code rather than relying on external documentation or memory. Use a standardized security header template for Next.js projects.
