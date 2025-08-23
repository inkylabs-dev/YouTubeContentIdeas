# YouTube Content Ideas

A modern, responsive website showcasing 100 trending YouTube content ideas to inspire content creators.

## Features

- **100 Content Ideas**: Carefully curated list of trending YouTube video concepts
- **Search Functionality**: Real-time search through titles, descriptions, and tags
- **Category Filtering**: Filter content by categories like Food, DIY, Gaming, etc.
- **Modern Design**: Built with Astro and styled with Tailwind CSS
- **ShadCN Components**: Beautiful, accessible card components
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile

## Technologies Used

- **Astro**: Modern static site generator
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe JavaScript
- **ShadCN-inspired Components**: Reusable UI components

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/inkylabs-dev/YouTubeContentIdeas.git
cd YouTubeContentIdeas
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Card.astro
│   ├── CardHeader.astro
│   ├── CardTitle.astro
│   ├── CardDescription.astro
│   └── CardContent.astro
├── data/
│   └── contentIdeas.ts  # 100 YouTube content ideas
├── layouts/
│   └── Layout.astro     # Main page layout
├── lib/
│   └── utils.ts         # Utility functions
└── pages/
    └── index.astro      # Main landing page
```

## Features in Detail

### Search & Filter
- Real-time search across titles, descriptions, and tags
- Category-based filtering with 20+ categories
- Responsive design that works on all devices

### Content Ideas
Each content idea includes:
- Unique ID and title
- Category classification
- Detailed description
- Relevant tags for discoverability

### Design Philosophy
- **Content-First**: Clean, simple design that focuses on the content
- **Accessibility**: Proper semantic HTML and keyboard navigation
- **Performance**: Fast loading times with Astro's static generation

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.