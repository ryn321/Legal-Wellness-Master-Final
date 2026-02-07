## 2025-02-12 - [Form Accessibility & State Feedback]
**Learning:** Combining accessibility fixes (label/id association) with immediate visual feedback (loading/success states) provides a significant UX boost with minimal code. In React 19/Next.js environments, ensuring forms have proper `onSubmit` handlers and `type="submit"` buttons is crucial for both usability and accessibility.
**Action:** Always check for missing `htmlFor` on labels and implement simple status-based button feedback for all async operations.
