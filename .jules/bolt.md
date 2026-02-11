## 2025-05-14 - Three.js visibility-based frameloop optimization
**Learning:** React Three Fiber (R3F) continues to run its animation loop even when the Canvas is not visible in the viewport, which consumes unnecessary GPU and CPU resources. Using `useInView` from `framer-motion` to toggle the `frameloop` prop between `'always'` and `'never'` effectively pauses the component when scrolled out of view.
**Action:** Always implement visibility-based `frameloop` control for R3F components that are not persistently visible to save system resources.
