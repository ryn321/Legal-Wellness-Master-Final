# Bolt's Journal

## 2025-05-15 - Optimizing Three.js Hero Section Rendering
**Learning:** Continuous animation loops in React Three Fiber (R3F) can be a significant battery and GPU drain, even when the component is not visible. Standard R3F `Canvas` defaults to `frameloop="always"`.
**Action:** Use `IntersectionObserver` to toggle `frameloop` between `"always"` and `"never"` based on visibility. Also, cap `dpr` to `[1, 2]` to prevent performance hits on ultra-high-DPI screens without visual benefit.
