## 2025-05-14 - Standardizing Form Feedback and Accessibility
**Learning:** Standardizing form feedback states ('idle', 'submitting', 'success') and ensuring explicit accessibility associations (label `htmlFor` -> input `id`) significantly improves perceived responsiveness and screen reader compatibility. Using `AnimatePresence` for success states provides a smooth UX transition.
**Action:** Always implement status-based feedback for forms and verify label associations early in the development cycle. Wrap success messages in `role="status"` for a11y.

## 2025-05-14 - R3F Type Safety and Linting
**Learning:** When resolving ESLint errors in React Three Fiber components, avoid `any` by using explicit Three.js types (e.g., `useRef<THREE.Points>(null)`) and `Record<string, unknown>` for props. Replace `@ts-ignore` with `@ts-expect-error` to maintain better long-term code health.
**Action:** Use proper types for Three.js refs and objects to avoid linting issues and improve developer experience.

## 2026-02-17 - Navigation Clarity and Accessibility
**Learning:** Users often lack context on their current location within a site without visual cues in the navigation. Adding a 'Skip to content' link is a low-effort, high-impact accessibility win that allows keyboard users to bypass repetitive header links.
**Action:** Implement active route indicators in navigation components using `usePathname` and always include a keyboard-accessible 'Skip to content' link in the main layout.
