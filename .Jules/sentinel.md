# Sentinel Security Journal

## 2025-02-25 - Standard Security Headers Implementation
**Vulnerability:** Missing standard security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security`) in `next.config.ts`.
**Learning:** Next.js does not include these headers by default. They must be explicitly configured in `next.config.ts` using the `headers` function to provide a baseline layer of defense against common web vulnerabilities like clickjacking and MIME-type sniffing.
**Prevention:** Always ensure `next.config.ts` is configured with these standard security headers for all routes.

## 2025-02-25 - Secure HTML Rendering Practice
**Vulnerability:** Potential XSS through `dangerouslySetInnerHTML`.
**Learning:** While the current data source is static (`lib/news.ts`), the use of `dangerouslySetInnerHTML` is a risk if the source ever becomes dynamic.
**Prevention:** Include a Sentinel warning comment near `dangerouslySetInnerHTML` usages and implement sanitization (e.g., DOMPurify) if the data source becomes non-static.
