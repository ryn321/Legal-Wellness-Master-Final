## 2026-02-13 - Missing Foundational Security Headers

**Vulnerability:** The application was missing standard security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, Strict-Transport-Security) which were expected to be present according to project context.

**Learning:** Discrepancies can occur between the documented security state and the actual codebase implementation. Foundation headers are critical for defense-in-depth but can be easily omitted or lost during initial project scaffolding.

**Prevention:** Explicitly configure security headers in `next.config.ts` as part of the initial project setup and maintain a security manifest to verify their presence.
