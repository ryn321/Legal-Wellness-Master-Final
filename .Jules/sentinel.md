# Sentinel Journal - Critical Security Learnings

## 2025-05-15 - Missing Standard Security Headers in Production-Ready Config
**Vulnerability:** The application was missing critical security headers like `X-Frame-Options`, `X-Content-Type-Options`, and `Strict-Transport-Security`, despite these being identified as standards for the project.
**Learning:** Even well-structured projects can overlook global security configurations in the build tool or framework config (e.g., `next.config.ts`). These headers are a low-effort, high-impact "Defense in Depth" layer.
**Prevention:** Always verify global security headers in `next.config.ts` during initial security scans. Ensure they are documented and commented to explain their purpose.

## 2025-05-15 - Potential XSS in Content Rendering
**Vulnerability:** Use of `dangerouslySetInnerHTML` in `app/news/[slug]/page.tsx` for article content.
**Learning:** While currently safe due to static/hardcoded data sources, this pattern is a "landmine" that will become a vulnerability if the data source ever shifts to user-provided or external API content without introducing sanitization.
**Prevention:** Prefer structured rendering over `dangerouslySetInnerHTML` where possible. If it must be used, implement a sanitization layer (e.g., DOMPurify) as soon as the data becomes dynamic.
