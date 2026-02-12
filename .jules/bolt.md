## 2025-01-24 - Optimization of Three.js Hero and Static Data

**Learning:** In React Three Fiber (R3F) applications, the `frameloop` prop on the `Canvas` component defaults to 'always', consuming GPU/CPU even when the component is off-screen. Additionally, high-DPI screens can cause performance degradation if `dpr` is not capped. Moving static arrays outside of component scope in React prevents redundant memory allocations and garbage collection overhead during re-renders.

**Action:** Always wrap R3F `Canvas` with visibility detection (e.g., `useInView`) to toggle `frameloop` between 'always' and 'never'. Cap `dpr` to `[1, 2]`. Define static constants and data arrays at the module level rather than inside functional components.
