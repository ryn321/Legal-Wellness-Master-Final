# Bolt's Journal - Critical Learnings

## 2025-05-14 - [Three.js Viewport-Aware Animation]
**Learning:** React Three Fiber (R3F) Canvas components continue to run their animation loop (frameloop) even when they are not visible in the viewport, which consumes unnecessary GPU/CPU resources.
**Action:** Use a native `IntersectionObserver` to toggle the `frameloop` prop between `'always'` and `'never'` based on visibility. Initialize visibility to `true` to ensure initial render, then use `useEffect` to manage the observer. Additionally, cap the device pixel ratio (`dpr`) to `[1, 2]` to avoid performance degradation on ultra-high-DPI screens without significant visual loss.
