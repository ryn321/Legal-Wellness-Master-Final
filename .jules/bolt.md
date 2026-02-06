# Bolt's Performance Journal

## 2025-05-14 - Toggling R3F Frameloop via Visibility
**Learning:** React Three Fiber (R3F) Canvas components continue to consume GPU/CPU resources even when they are not visible on the screen if the `frameloop` is set to "always". Using `useInView` from `framer-motion` to toggle the `frameloop` between "always" and "never" is a low-overhead way to eliminate 100% of the component's rendering cost when scrolled out of view.
**Action:** For any heavy 3D or animation-driven components that are not globally fixed (like Hero sections), implement visibility-based pausing using `useInView` and the R3F `frameloop` prop.
