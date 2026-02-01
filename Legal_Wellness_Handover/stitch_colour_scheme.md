# Stitch Design System - Colour Scheme

The Legal Wellness website utilizes the "**Stitch**" design system, characterized by a deep, authoritative navy background and striking electric gold accents.

## Primary Palette

| Color Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Stitch Navy** | `#061037` | **Primary Background**. Used for the main body background to create depth and premium feel. |
| **Light Navy** | `#18255A` | **Secondary Background**. Used for cards, gradients, and subtle overlays. |
| **Electric Gold** | `#D4AF37` | **Primary Accent**. Used for buttons, active states, key icons, and highlights. |
| **White** | `#FFFFFF` | **Text**. Used for primary headings and body text (often with opacity). |

## CSS Variables (Tailwind)

```css
:root {
    --background: #061037;
    --foreground: #ffffff;
}
```

## Tailwind Configuration

```typescript
colors: {
    primary: {
        DEFAULT: "#061037", // Stitch Navy
        light: "#18255A",
    },
    accent: {
        DEFAULT: "#D4AF37", // Stitch Gold
        hover: "#B5952F",
    }
}
```

## Gradients & Effects

- **Gold Gradient**: `bg-gradient-to-r from-accent to-yellow-500` (Used on Primary Buttons)
- **Glassmorphism**: `background: rgba(6, 16, 55, 0.9); backdrop-filter: blur(10px);`
