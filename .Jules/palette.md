## 2025-05-14 - Standardizing Form Feedback and Accessibility
**Learning:** Standardizing form feedback states ('idle', 'submitting', 'success') and ensuring explicit accessibility associations (label `htmlFor` -> input `id`) significantly improves perceived responsiveness and screen reader compatibility. Using `AnimatePresence` for success states provides a smooth UX transition.
**Action:** Always implement status-based feedback for forms and verify label associations early in the development cycle. Wrap success messages in `role="status"` for a11y.

## 2025-05-14 - R3F Type Safety and Linting
**Learning:** When resolving ESLint errors in React Three Fiber components, avoid `any` by using explicit Three.js types (e.g., `useRef<THREE.Points>(null)`) and `Record<string, unknown>` for props. Replace `@ts-ignore` with `@ts-expect-error` to maintain better long-term code health.
**Action:** Use proper types for Three.js refs and objects to avoid linting issues and improve developer experience.

## 2026-02-21 - [Navigation & Mobile Accessibility]
**Learning:** Implementing active route indicators using `usePathname` significantly improves visual orientation for users. Additionally, ensuring mobile menus have proper ARIA attributes (`aria-expanded`, `aria-controls`, `role="dialog"`) is critical for screen reader users to understand the state and purpose of the menu.
**Action:** Always include active link styling and comprehensive ARIA roles when building or updating navigation components.
