## 2025-05-14 - Standardizing Form Feedback and Accessibility
**Learning:** Standardizing form feedback states ('idle', 'submitting', 'success') and ensuring explicit accessibility associations (label `htmlFor` -> input `id`) significantly improves perceived responsiveness and screen reader compatibility. Using `AnimatePresence` for success states provides a smooth UX transition.
**Action:** Always implement status-based feedback for forms and verify label associations early in the development cycle. Wrap success messages in `role="status"` for a11y.

## 2025-05-14 - R3F Type Safety and Linting
**Learning:** When resolving ESLint errors in React Three Fiber components, avoid `any` by using explicit Three.js types (e.g., `useRef<THREE.Points>(null)`) and `Record<string, unknown>` for props. Replace `@ts-ignore` with `@ts-expect-error` to maintain better long-term code health.
**Action:** Use proper types for Three.js refs and objects to avoid linting issues and improve developer experience.

## 2025-05-15 - Synchronizing Build and Runtime for Frontend Verification
**Learning:** If local frontend verification (e.g., Playwright) fails to reflect recent code changes, it is often due to the Next.js production server running an outdated build. In headless testing, high-z-index navigation elements can sometimes be intercepted by absolute-positioned background components (like Hero images) if not handled with `force=True`.
**Action:** Always restart the production server (`pnpm start`) after a new build (`pnpm build`) to ensure the runtime environment is synchronized with the latest source code. Use `force=True` for click actions in Playwright if hit-tests are blocked by background overlays.
