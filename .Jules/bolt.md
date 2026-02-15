## 2025-05-14 - Optimize R3F Canvas visibility and resolution

**Learning:** React Three Fiber (R3F) Canvas components default to `frameloop="always"`, which consumes GPU resources even when the component is not visible in the viewport. Additionally, high-DPI screens can cause performance degradation if `dpr` is not capped.

**Action:** Always use an `IntersectionObserver` to toggle `frameloop` between `'always'` and `'never'` based on visibility. Cap `dpr` to `[1, 2]` to ensure consistent performance across devices.
