# Sentinel's Security Journal

This journal documents critical security vulnerabilities, patterns, and learnings specific to the Legal Wellness codebase.

## Security Standards
- Standard security headers should be implemented in `next.config.ts`.
- Input validation and sanitization should be used for all user-provided data.
- Avoid using `dangerouslySetInnerHTML` with unsanitized content.

## 2025-02-09 - Missing Standard Security Headers
**Vulnerability:** Application was missing basic defense-in-depth security headers (X-Frame-Options, HSTS, CSP-related policies).
**Learning:** Default Next.js configurations do not automatically include these headers, leaving the application susceptible to clickjacking and MIME-sniffing.
**Prevention:** Always explicitly define security headers in `next.config.ts` during initial project setup and verify them using security audit tools.
