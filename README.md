# Suture the Future Website

A modern React and TailwindCSS website with video hero section, multi-section layout, and FAQ grid.

## Project Structure

```
suture_the_future_website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Section1.jsx
│   │   └── Section2.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```

## Features

- **Navbar**: Black background with right-aligned navigation
- **Hero Section**: Video background with overlay text
- **Section 1**: Two-column layout with heading, paragraphs, and note box
- **Section 2**: 3x3 grid with images, titles, and descriptions

## Customization Tips

### Adjusting FAQ Grid Box Heights

For the Section 2 grid:
- Change image height: Modify `h-48` to `h-40` (shorter) or `h-56` (taller)
- Add minimum height: Use `min-h-[400px]` on the text container
- Span multiple columns: Use `lg:col-span-2` on specific grid items
- Adjust text area: Modify `p-6` padding value

### Styling

All styles use TailwindCSS utility classes. To customize:
1. Edit component files in `src/components/`
2. Modify `tailwind.config.js` for theme changes
3. Add custom CSS in `src/index.css`

## Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **TailwindCSS**: Utility-first CSS framework
- **PostCSS**: CSS processing
