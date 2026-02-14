## 2025-05-14 - [Three.js Resource Management]
**Learning:** React Three Fiber (R3F) `Canvas` components can be a significant GPU/CPU drain if the `frameloop` is always set to 'always', especially on pages with lots of content where the 3D element is scrolled out of view.
**Action:** Use a native `IntersectionObserver` to toggle the `frameloop` prop between `'always'` and `'never'` based on visibility. This ensures the rendering loop only runs when the user can actually see it.

## 2025-05-14 - [Static Data Allocation]
**Learning:** Defining large static arrays (like service lists) inside functional components causes unnecessary memory allocation and object creation on every render cycle.
**Action:** Hoist static configuration and data arrays outside the component scope to ensure they are only created once during module initialization.
