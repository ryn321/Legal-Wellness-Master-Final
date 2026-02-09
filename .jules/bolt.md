## 2025-05-14 - R3F Performance Optimizations in Hero
**Learning:** React Three Fiber (R3F) Canvas can be a significant GPU drain if left running in the background or rendering at ultra-high resolutions on high-DPI screens.
**Action:** Always cap `dpr` to `[1, 2]` on `Canvas` to prevent performance degradation on 4K/5K displays, and use `useInView` to toggle `frameloop` between 'always' and 'never' to stop GPU work when the component is off-screen.
