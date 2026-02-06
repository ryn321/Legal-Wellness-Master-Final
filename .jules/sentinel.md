## 2025-05-24 - Security Header Implementation and Build Blockers
**Vulnerability:** Missing security headers (X-Frame-Options, X-Content-Type-Options, etc.) in Next.js config.
**Learning:** While implementing security headers, the build process was blocked by unrelated TypeScript errors in a Three.js component. This highlights that security improvements often require cleaning up technical debt to pass CI/CD checks.
**Prevention:** Maintain a clean build/lint state to ensure security patches can be deployed rapidly without being delayed by unrelated code quality issues.
