# Bolt's Performance Journal

## 2025-05-14 - [R3F Visibility and DPR Optimization]
**Learning:** React Three Fiber (R3F) Canvas components run an animation loop that can consume significant GPU/CPU resources even when not visible. Using `useInView` to toggle `frameloop` and capping `dpr` are essential patterns for web performance in 3D-heavy apps.
**Action:** Always check for `Canvas` components and ensure they implement visibility-based frameloop toggling and DPR capping to `[1, 2]`.
