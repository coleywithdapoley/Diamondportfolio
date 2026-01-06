# Design System Documentation

## 🎨 Color Palette

### Primary Colors (Deep Jewel Purple)
```css
primary-50   #faf5ff
primary-100  #f3e8ff
primary-200  #e9d5ff
primary-300  #d8b4fe
primary-400  #c084fc
primary-500  #a855f7
primary-600  #9333ea
primary-700  #7e22ce
primary-800  #6b21a8
primary-900  #4C1D95  /* Deep jewel purple - Main brand color */
primary-950  #3b0764
```

**Usage:**
- Main brand color: `bg-primary-900`, `text-primary-900`
- Hover states: `hover:bg-primary-800`
- Gradients: `bg-gradient-to-r from-primary-900 to-primary-700`

### Secondary Colors (Gold Accent)
```css
gold-50   #fffbeb
gold-100  #fef3c7  /* Soft cream */
gold-200  #fde68a
gold-300  #fcd34d
gold-400  #fbbf24
gold-500  #F59E0B  /* Gold accent - Main accent color */
gold-600  #d97706
gold-700  #b45309
gold-800  #92400e
gold-900  #78350f
```

**Usage:**
- Accent color: `bg-gold-500`, `text-gold-500`
- Highlights: `border-gold-400`
- Buttons: `bg-gradient-to-r from-gold-500 to-gold-600`

### Accent Colors (Soft Cream)
```css
cream-100  #FEF3C7  /* Soft cream - Background accent */
```

**Usage:**
- Backgrounds: `bg-cream-100`
- Subtle highlights: `bg-cream-50`

### Neutral Colors (Slate Grays)
```css
neutral-50   #f8fafc
neutral-100  #f1f5f9
neutral-200  #e2e8f0
neutral-300  #cbd5e1
neutral-400  #94a3b8
neutral-500  #64748b
neutral-600  #475569
neutral-700  #334155
neutral-800  #1e293b
neutral-900  #0f172a
```

### Text Colors
```css
text-primary    #1e293b  /* High contrast dark gray - Main text */
text-secondary  #475569
text-tertiary   #64748b
text-light      #94a3b8
text-inverse    #ffffff
```

**Usage:**
- Main text: `text-text-primary`
- Secondary text: `text-text-secondary`
- Light text: `text-text-light`

---

## 📝 Typography

### Font Families

```css
/* Headings - Elegant serif */
font-heading: 'Playfair Display', 'Georgia', serif

/* Alternative headings - Sophisticated sans-serif */
font-heading-alt: 'Inter', 'system-ui', sans-serif

/* Body - Clean, readable sans-serif */
font-body: 'Inter', 'system-ui', '-apple-system', sans-serif

/* Tagline - Script or decorative font */
font-script: 'Dancing Script', 'Brush Script MT', cursive

/* Decorative - Elegant serif */
font-decorative: 'Playfair Display', 'Georgia', serif
```

### Font Sizes

```css
text-display   4.5rem  /* Hero titles */
text-h1        3.5rem  /* Main headings */
text-h2        2.5rem  /* Section headings */
text-h3        2rem    /* Subsection headings */
text-h4        1.5rem
text-h5        1.25rem
text-h6        1rem
text-body-lg   1.125rem
text-body      1rem     /* Default body text */
text-body-sm   0.875rem
text-tagline   1.5rem   /* "Dropping Gems" tagline */
```

### Usage Examples

```tsx
// Main heading
<h1 className="font-heading text-h1 text-text-primary">
  Diamond Bazile
</h1>

// Tagline with script font
<p className="font-script text-tagline text-gold-200">
  "Dropping Gems, Shaping Futures!"
</p>

// Body text
<p className="font-body text-body text-text-secondary">
  Your content here
</p>
```

---

## ✨ Animations

### Fade In Animations
```css
animate-fade-in        /* Basic fade in */
animate-fade-in-up    /* Fade in from bottom */
animate-fade-in-down  /* Fade in from top */
animate-fade-in-left  /* Fade in from left */
animate-fade-in-right /* Fade in from right */
```

### Slide Animations
```css
animate-slide-up
animate-slide-down
animate-slide-in-left
animate-slide-in-right
```

### Hover Transitions
```css
animate-hover-lift    /* Lifts element on hover */
animate-hover-scale   /* Scales element on hover */
```

### Loading States
```css
animate-pulse-slow    /* Slow pulse animation */
animate-spin-slow     /* Slow spin animation */
animate-bounce-slow   /* Slow bounce animation */
```

### Button Interactions
```css
animate-button-press  /* Press animation */
animate-button-glow   /* Glowing effect */
```

### Scroll Animations
```css
animate-scroll-fade-up /* Fade up on scroll */
```

### Usage Examples

```tsx
// Fade in up on mount
<div className="animate-fade-in-up">
  Content
</div>

// Hover lift effect
<div className="hover:animate-hover-lift">
  Hover me
</div>

// Button with press animation
<button className="active:animate-button-press">
  Click me
</button>
```

---

## 📐 Spacing System

Based on 8px grid system:

```css
p-0   0px
p-1   4px
p-2   8px
p-3   12px
p-4   16px
p-5   20px
p-6   24px
p-8   32px
p-10  40px
p-12  48px
p-16  64px
p-18  72px   /* Custom */
p-20  80px
p-22  88px   /* Custom */
p-24  96px
p-26  104px  /* Custom */
p-30  120px  /* Custom */
```

---

## 🎯 Layout Grid System

### Container Widths
```css
max-w-container  1280px  /* Main container */
max-w-content   1024px  /* Content width */
max-w-narrow    768px   /* Narrow content */
```

### Grid Templates
```css
grid-portfolio  /* Auto-fit, minmax(300px, 1fr) */
grid-projects   /* Auto-fill, minmax(350px, 1fr) */
```

### Usage Examples

```tsx
// Main container
<div className="max-w-container mx-auto px-4">
  Content
</div>

// Portfolio grid
<div className="grid grid-portfolio gap-8">
  Items
</div>
```

---

## 🎨 Component Classes

### Buttons

```tsx
// Primary button
<button className="btn-primary">
  Primary Action
</button>

// Secondary button
<button className="btn-secondary">
  Secondary Action
</button>

// Gold accent button
<button className="btn-gold">
  Gold Button
</button>
```

### Cards

```tsx
// Basic card
<div className="card p-6">
  Card content
</div>

// Card with hover effect
<div className="card-hover p-6">
  Hoverable card
</div>
```

### Section Titles

```tsx
// Section title with decorative underline
<h2 className="section-title gradient-text-primary">
  About Me
</h2>
<div className="decorative-underline">
  <div className="w-2 h-2 bg-gold-500 rounded-full mx-2"></div>
  <div className="w-24 h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500"></div>
  <div className="w-2 h-2 bg-gold-500 rounded-full mx-2"></div>
</div>
```

### Tagline

```tsx
<p className="tagline">
  "Dropping Gems, Shaping Futures!"
</p>
```

### Gradient Text

```tsx
// Primary gradient text
<h1 className="gradient-text-primary">
  Diamond Bazile
</h1>

// Gold gradient text
<h2 className="gradient-text-gold">
  Subtitle
</h2>
```

### Glass Morphism

```tsx
// Light glass effect
<div className="glass rounded-lg p-6">
  Glass content
</div>

// Dark glass effect
<div className="glass-dark rounded-lg p-6">
  Dark glass content
</div>
```

---

## 🎭 Shadows

```css
shadow-soft        /* Soft shadow */
shadow-medium      /* Medium shadow */
shadow-large       /* Large shadow */
shadow-glow-purple /* Purple glow */
shadow-glow-gold   /* Gold glow */
```

### Usage

```tsx
<div className="shadow-soft">
  Soft shadow
</div>

<div className="shadow-glow-gold">
  Gold glow effect
</div>
```

---

## 🔄 Transitions

### Duration
```css
duration-400   400ms
duration-600   600ms
duration-800   800ms
duration-1200  1200ms
```

### Timing Functions
```css
ease-smooth    /* Smooth cubic-bezier */
ease-bounce-in /* Bounce in effect */
```

### Usage

```tsx
<div className="transition-all duration-600 ease-smooth">
  Smooth transition
</div>
```

---

## 📱 Responsive Breakpoints

Tailwind default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## 🎯 Best Practices

1. **Colors**: Always use design system colors, never hardcode hex values
2. **Typography**: Use semantic font classes (`font-heading`, `font-body`, `font-script`)
3. **Spacing**: Stick to the 8px grid system
4. **Animations**: Use predefined animations for consistency
5. **Components**: Use component classes for common patterns
6. **Dark Mode**: All colors support dark mode variants

---

## 🚀 Quick Reference

### Most Used Classes

```tsx
// Container
<div className="max-w-container mx-auto px-4">

// Heading
<h1 className="font-heading text-h1 gradient-text-primary">

// Tagline
<p className="font-script text-tagline text-gold-200">

// Button
<button className="btn-primary">

// Card
<div className="card-hover p-6">

// Animation
<div className="animate-fade-in-up">
```

---

This design system ensures consistency, maintainability, and a premium aesthetic throughout your portfolio!

