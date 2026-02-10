# Bolt's Performance Journal

## 2025-05-15 - R3F Optimization Pattern
**Learning:** Capping `dpr` to [1, 2] and using `framer-motion`'s `useInView` to toggle the `frameloop` between 'always' and 'never' is a high-impact, low-risk optimization for React Three Fiber components. It prevents GPU exhaustion on high-DPI screens and eliminates background rendering when the component is off-screen.
**Action:** Always audit `Canvas` components for these props and implement visibility-based pausing by default.
