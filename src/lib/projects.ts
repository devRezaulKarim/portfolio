export type ProjectItem = {
  key: string;
  icon: string;
  iconLight?: string;
  iconDark?: string;
  title: string;
  subtitle: string;
  website?: string;
  github?: string;
  stack: string[];
  highlights: string;
  featured?: boolean;
  theme?: boolean;
};

export const projects: ProjectItem[] = [
  {
    key: "portfolio",
    icon: "rk-light.svg",
    iconLight: "rk-light.svg",
    iconDark: "rk-dark.svg",
    theme: true,
    title: "Rezaul Karim",
    subtitle: "React & Next.js Frontend Engineer",
    website: "https://rkz.vercel.app/",
    github: "https://github.com/devRezaulKarim/portfolio",
    stack: ["Next.js", "TypeScript", "Vite", "TailwindCSS", "Motion"],
    highlights: `
- Built a clean and minimal developer portfolio with responsive design.
- Implemented subtle UI animations using Motion for better user experience.
- Structured reusable UI components with TailwindCSS.
`,
    featured: true,
  },

  {
    key: "carz",
    icon: "carz.ico",
    title: "Carz",
    subtitle: " Car Marketplace",
    website: "https://carz-rkz.vercel.app/",
    github: "https://github.com/devRezaulKarim/carz",
    stack: [
      "Next.js",
      "TypeScript",
      "Auth.js",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "AI SDK",
    ],
    highlights: `
- Built a full-featured vehicle marketplace with advanced search and filtering.
- Implemented authentication and role-based admin dashboard.
- Developed multi-step reservation flow for car bookings.
- Integrated Prisma with PostgreSQL for scalable data management.
`,
    featured: true,
  },

  {
    key: "fontawesome-clone",
    icon: "fa.svg",
    title: "Fontawesome Clone",
    subtitle: "FontAwesome Icon Search Clone",
    website: "https://fontawesome-clone.vercel.app/",
    github: "https://github.com/devRezaulKarim/fontawesome-clone",
    stack: ["React", "Redux", "Axios", "JSON API", "React Paginate"],
    highlights: `
- Built an icon discovery interface for exploring thousands of icons.
- Implemented fast search with filtering by style, family, and category.
- Optimized rendering performance for smooth icon browsing.
`,
    featured: true,
  },
];
