## 2026-02-20 - Optimizing Three.js Canvas Visibility and Resolution
**Learning:** For React Three Fiber applications, the GPU continues to work even if the Canvas is scrolled out of view if `frameloop` is set to 'always'. Additionally, high-DPI screens can significantly tank performance if `dpr` is not capped.
**Action:** Always implement an `IntersectionObserver` to toggle `frameloop` between 'always' and 'never' based on visibility. Cap `dpr` to `[1, 2]` on the `Canvas` component.
