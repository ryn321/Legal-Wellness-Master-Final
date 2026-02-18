## 2025-05-15 - Enhanced Navigation States and Mobile Accessibility
**Learning:** Use `pathname?.startsWith(href)` (for non-root routes) to ensure parent links stay active on nested pages (like news articles or service details) and to provide safety against null pathname values. Adding `aria-expanded` and `aria-controls` to the mobile toggle is essential for screen reader users to understand the state of the menu.
**Action:** Apply this pattern to all navigation components. Always ensure mobile toggles have a stable ID to target with `aria-controls`.
