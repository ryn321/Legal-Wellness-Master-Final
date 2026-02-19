# Palette's Journal - UX & Accessibility Learnings

## 2025-05-14 - Standardizing Form Feedback and Accessibility
**Learning:** Users experience lower cognitive load when forms provide clear, state-based feedback. Replacing a completed form with a success message (using `AnimatePresence` for smoothness) is more effective than simple toasts for critical conversions.
**Action:** Use 'idle', 'submitting', and 'success' states for all forms. Ensure success messages have `role="status"` for ARIA compatibility.

## 2025-05-14 - R3F Type Safety in Refs
**Learning:** When using `useRef` with React Three Fiber components in React 19, explicit typing (e.g., `useRef<THREE.Points>(null)`) is required to avoid build-time errors.
**Action:** Always provide explicit types and a `null` initial value to `useRef` for Three.js objects.

## 2025-07-28 - Surgical Micro-UX and Repo Cleanliness
**Learning:** Even well-intentioned UX improvements must respect strict line-count constraints (<50 lines) to remain "micro". Additionally, automated tools like `pnpm install` can generate heavy artifacts (lockfiles) that should not be committed if the repo tracks a different lockfile (e.g., `package-lock.json`).
**Action:** Aim for surgical `git diffs` by modifying only the necessary logic blocks. Always double-check for junk files (`server.log`, `pnpm-lock.yaml`) before submission.
