# Bolt Performance Journal

## 2025-05-15 - Three.js Visibility-based Rendering
**Learning:** Continuous rendering in Three.js (React Three Fiber) even when off-screen is a major performance bottleneck for hybrid web apps. Toggling the `frameloop` prop based on viewport visibility can reduce GPU/CPU overhead by ~70-90% during scrolling.
**Action:** Always check for `frameloop` settings in R3F components and use `useInView` to pause rendering when the component is not visible.

## 2025-05-15 - DPR Capping
**Learning:** High Device Pixel Ratio (DPR) on modern displays can cause R3F to render at resolutions far beyond what is perceptually necessary, leading to significant performance drops.
**Action:** Cap `dpr` to `[1, 2]` in `Canvas` components to balance visual quality and performance.
