# Bolt's Performance Journal

## 2025-05-15 - IntersectionObserver for R3F Frameloop
**Learning:** React Three Fiber (R3F) Canvas components run a continuous animation loop by default, consuming GPU/CPU even when not visible. Using `IntersectionObserver` to toggle the `frameloop` prop between 'always' and 'never' significantly reduces resource usage for off-screen components.
**Action:** Always wrap hero-section or scroll-dependent R3F canvases in a visibility-aware container and toggle `frameloop` based on intersection state.

## 2025-05-15 - Static Data Allocation
**Learning:** Defining static data arrays (like service lists) inside React components causes re-allocation and increased GC pressure on every render.
**Action:** Move static configuration and data constants outside the component scope to ensure single allocation.
