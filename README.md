# Muhammad Saeed Akhtar - GIS Specialist Portfolio

A professional portfolio website showcasing expertise in GIS, remote sensing, and geospatial analysis.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Maps**: Leaflet-powered map showing global project locations
- **Skill Visualizations**: Radar chart displaying technical proficiencies
- **Animated Timeline**: Interactive experience timeline with hover effects
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Form**: Functional contact form with validation

## Technologies Used

- HTML5, CSS3, JavaScript
- Leaflet.js for interactive maps
- Font Awesome icons
- Google Fonts (Inter)
- CSS Grid and Flexbox for responsive layout

## Deployment to GitHub Pages

### Method 1: Direct Upload

1. Create a new repository named `saeedkhanzeerak.github.io` (or use existing repository)
2. Upload all files from the portfolio-website folder to the repository
3. Go to repository Settings > Pages
4. Select "Deploy from a branch" as source
5. Choose "main" branch and "/ (root)" folder
6. Click Save
7. Your site will be available at `https://saeedkhanzeerak.github.io`

### Method 2: Using Git Commands

```bash
# Clone your repository
git clone https://github.com/saeedkhanzeerak/saeedkhanzeerak.github.io.git
cd saeedkhanzeerak.github.io

# Copy portfolio files
cp -r /path/to/portfolio-website/* .

# Add and commit files
git add .
git commit -m "Add professional GIS portfolio website"
git push origin main
```

### Method 3: Using GitHub Desktop

1. Open GitHub Desktop
2. Clone your repository
3. Copy all portfolio files to the local repository folder
4. Commit changes with a descriptive message
5. Push to origin

## File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   ├── script.js       # Main JavaScript functionality
│   └── maps.js         # Interactive maps and visualizations
├── images/
│   ├── hero-bg.jpg     # Hero section background
│   ├── gis-software.jpg
│   ├── satellite-data.webp
│   ├── data-viz.png
│   └── dashboard.png
└── README.md           # This file
```

## Customization

### Updating Content

1. **Personal Information**: Edit the hero section and about section in `index.html`
2. **Experience**: Update the timeline items in the experience section
3. **Projects**: Modify project cards and add new projects
4. **Skills**: Update skill percentages in the skills section
5. **Contact**: Update contact information in the contact section

### Adding New Projects to Map

Edit the `projectLocations` array in `js/maps.js`:

```javascript
{
    name: "Your Project Name",
    location: "City, Country",
    coords: [latitude, longitude],
    description: "Project description",
    type: "Project Type"
}
```

### Styling Changes

- **Colors**: Update CSS custom properties in `css/style.css`
- **Fonts**: Change font imports in the HTML head section
- **Layout**: Modify CSS Grid and Flexbox properties

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance Optimization

- Images are optimized for web
- CSS and JavaScript are minified for production
- Lazy loading implemented for images
- Responsive images for different screen sizes

## SEO Features

- Semantic HTML structure
- Meta tags for search engines
- Open Graph tags for social media
- Structured data markup
- Optimized page titles and descriptions

## Accessibility

- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast color scheme
- Screen reader friendly
- Focus indicators for all interactive elements

## License

This portfolio template is open source and available under the MIT License.

## Contact

For questions or support regarding this portfolio:

- **Email**: saeedkhanzeerak@gmail.com
- **LinkedIn**: [linkedin.com/in/saeedkhanzeerak](https://linkedin.com/in/saeedkhanzeerak)
- **GitHub**: [github.com/saeedkhanzeerak](https://github.com/saeedkhanzeerak)

---

© 2025 Muhammad Saeed Akhtar. All rights reserved.

