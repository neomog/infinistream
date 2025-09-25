# TechFix Pro by Infinistream

A professional website for TechFix Pro, providing expert device repair and installation services.

## Features

- **Multi-page Website**: Home, About, Services, Contact, Blog pages
- **Business Tools**: Invoice generator, job order management, receipt system
- **Responsive Design**: Mobile-friendly layout
- **Professional UI**: Clean, modern design with Font Awesome icons

## GitHub Pages Deployment

This website is automatically deployed to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages**: 
   - Go to repository Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy on push to `master` branch

2. **Custom Domain** (optional):
   - Add a `CNAME` file with your custom domain
   - Configure DNS settings with your domain provider

### Manual Deployment

The deployment happens automatically when you push to the `master` branch. You can also trigger a manual deployment:

1. Go to the Actions tab in the GitHub repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

## Website Structure

```
├── index.html              # Homepage
├── about.html              # About page
├── services.html           # Services page
├── contact.html            # Contact page
├── blog.html               # Blog page
├── service-request.html    # Service request form
├── privacy.html            # Privacy policy
├── terms.html              # Terms of service
├── assets/                 # CSS, JS, and images
├── invoice-generator/      # Invoice generation tool
├── job-orders/            # Job order management
├── receipts/              # Receipt management
└── invoices/              # Invoice management
```

## Development

This is a static website using HTML, CSS, and JavaScript. No build process is required.

To run locally:
1. Clone the repository
2. Open `index.html` in a web browser
3. Or use a local server: `python -m http.server 8000`

## Contact

- **Phone**: +2349036425748
- **Email**: infinistream01@gmail.com
- **Location**: Serving Ibadan and surrounding areas