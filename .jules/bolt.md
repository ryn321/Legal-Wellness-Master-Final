# Bolt's Performance Journal

## 2025-01-24 - R3F Visibility Optimization
**Learning:** React Three Fiber (R3F) Canvas components run their render loop continuously by default, even when they are not in the viewport. This results in significant and unnecessary GPU/CPU overhead for background decorative elements.
**Action:** Always wrap R3F Canvas in a visibility-aware container. Toggle the `frameloop` prop between `'always'` and `'never'` using tools like `framer-motion`'s `useInView` or `IntersectionObserver`. Additionally, cap the `dpr` (device pixel ratio) to `[1, 2]` to prevent performance degradation on ultra-high-resolution displays.
