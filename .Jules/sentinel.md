## 2025-05-14 - Content Security Policy & Third-Party Iframes
**Vulnerability:** Missing security headers (CSP, HSTS, X-Frame-Options) exposing the application to XSS and Clickjacking.
**Learning:** Implementing a strict CSP in Next.js requires careful handling of third-party integrations. The interactive map on the `/contact` page uses a Google Maps iframe, which was blocked by the initial strict `frame-src 'none'` policy.
**Prevention:** Always audit the application for iframes and external scripts before deploying a CSP. Use `frame-src` to explicitly whitelist trusted domains like `https://www.google.com` and `https://maps.google.com` to maintain functionality while preventing unauthorized framing.
