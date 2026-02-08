## 2025-05-15 - Security Header Implementation & Build Restoration

**Vulnerability:** Missing standard security headers (X-Frame-Options, X-Content-Type-Options, etc.) in Next.js configuration, leaving the application vulnerable to clickjacking and MIME-sniffing.

**Learning:** Implementing security enhancements sometimes requires resolving unrelated build-blocking technical debt. In this case, a TypeScript error in `ThreeHero.tsx` (missing initial value for `useRef` in React 19) prevented verification of the security changes.

**Prevention:** Ensure `next.config.ts` includes a robust set of security headers by default. Maintain strict TypeScript types for `useRef` to avoid compatibility issues with newer React versions.
