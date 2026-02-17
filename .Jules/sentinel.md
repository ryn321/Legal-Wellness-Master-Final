## 2025-05-15 - Missing Security Headers

**Vulnerability:** The application was missing critical security headers (CSP, X-Frame-Options, HSTS, etc.) despite initial memory indicating they were present.

**Learning:** Next.js projects do not always include these headers by default in `next.config.ts`, and relying on memory or documentation without verifying the actual configuration can lead to a false sense of security.

**Prevention:** Always explicitly define security headers in `next.config.ts` or a custom middleware to ensure defense-in-depth protections are active.
