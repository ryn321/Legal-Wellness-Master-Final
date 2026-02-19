
## 2025-05-15 - Security Header Enhancement
**Vulnerability:** Lack of defense-in-depth headers (CSP, HSTS, X-Frame-Options) making the site susceptible to clickjacking and XSS if a content injection point were discovered.
**Learning:** Next.js App Router projects with Three.js and Google Maps can support a relatively strict CSP. 'unsafe-inline' is required for hydration and Tailwind, but 'unsafe-eval' can be omitted even when using Three.js and Google Maps Embeds.
**Prevention:** Always implement a baseline CSP and standard security headers in next.config.ts for all new projects.
