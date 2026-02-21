## 2025-05-15 - [R3F Visibility-based Frame Loop Management]
**Learning:** React Three Fiber (R3F) `Canvas` components by default run their render loop continuously (`frameloop="always"`), which consumes GPU and CPU even when the component is scrolled out of view.
**Action:** Use a native `IntersectionObserver` within a `useEffect` to toggle the `frameloop` prop between `'always'` and `'never'` based on component visibility. This significantly reduces idle resource consumption on pages with long scrollable content.
