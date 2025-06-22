# 3D Portfolio Website

A stunning 3D portfolio website built with React, Three.js, and Framer Motion featuring a beautiful pastel color scheme and interactive 3D elements.

## ✨ Features

- **3D Interactive Elements**: Floating geometric shapes, animated cards, and dynamic visualizations
- **Pastel Color Scheme**: Beautiful, soft color palette that's easy on the eyes
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Complete Resume Integration**: All resume sections including experience, education, skills, projects, and contact
- **Modern UI/UX**: Glass morphism effects, hover animations, and intuitive navigation

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd 3d-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Customization

### Personal Information

Edit the `src/data/portfolioData.js` file to customize your personal information:

```javascript
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "City, State",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    summary: "Your professional summary..."
  },
  // ... other sections
}
```

### Experience

Add your work experience in the `experience` array:

```javascript
experience: [
  {
    company: "Company Name",
    position: "Job Title",
    duration: "2022 - Present",
    location: "Location",
    description: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3"
    ]
  }
]
```

### Education

Update your educational background:

```javascript
education: [
  {
    degree: "Degree Name",
    school: "University Name",
    duration: "2015 - 2019",
    location: "City, State",
    gpa: "3.8/4.0",
    relevantCourses: ["Course 1", "Course 2", "Course 3"]
  }
]
```

### Skills

Organize your skills by category:

```javascript
skills: {
  programming: ["JavaScript", "Python", "Java"],
  frontend: ["React", "Vue.js", "HTML/CSS"],
  backend: ["Node.js", "Express", "Django"],
  database: ["MongoDB", "PostgreSQL", "MySQL"],
  tools: ["Git", "Docker", "AWS"],
  other: ["Agile", "Scrum", "JIRA"]
}
```

### Projects

Add your portfolio projects:

```javascript
projects: [
  {
    name: "Project Name",
    description: "Project description",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project",
    live: "https://project-demo.com",
    features: ["Feature 1", "Feature 2", "Feature 3"]
  }
]
```

### Color Scheme

Customize the pastel color palette in `src/App.css`:

```css
:root {
  --pastel-pink: #ffd1dc;
  --pastel-blue: #b8d4e3;
  --pastel-purple: #e6d7ff;
  --pastel-green: #d4f0c5;
  --pastel-yellow: #fffacd;
  --pastel-orange: #ffdab9;
  --pastel-mint: #c1f4cd;
  --pastel-lavender: #e6e6fa;
}
```

## 🎨 3D Components

The portfolio includes several 3D components:

- **Hero**: Floating geometric shapes with smooth animations
- **Experience**: Timeline-style cards with floating elements
- **Education**: Diploma-style cards with academic achievements
- **Skills**: Orbital skill visualization with category cards
- **Projects**: Rotating project cards with connecting lines
- **Contact**: Interactive contact information cards

## 📱 Responsive Design

The portfolio is fully responsive and includes:

- Mobile-first design approach
- Adaptive navigation (top on desktop, bottom on mobile)
- Flexible grid layouts
- Optimized typography scaling
- Touch-friendly interactions

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder to Netlify

### GitHub Pages

1. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Deploy:
```bash
npm run deploy
```

## 🛠️ Technologies Used

- **React 19**: Modern React with hooks and functional components
- **Three.js**: 3D graphics and animations
- **React Three Fiber**: React renderer for Three.js
- **React Three Drei**: Useful helpers for React Three Fiber
- **Framer Motion**: Smooth animations and transitions
- **Vite**: Fast build tool and development server
- **CSS3**: Modern styling with CSS custom properties

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing your portfolio, please open an issue on GitHub.

---

**Happy coding! 🎉**
