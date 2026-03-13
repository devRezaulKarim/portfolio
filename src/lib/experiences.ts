export type ExperienceItem = {
  key: string;
  role: string;
  type: string;
  company: string;
  website: string;
  startDate: string;
  endDate: string;
  responsibilities: string;
  skills: string[];
  isCurrent?: boolean;
};

export const experiences: ExperienceItem[] = [
  {
    key: "ds",
    role: "Frontend Developer",
    type: "Full-time",
    company: "Debuggers Studio",
    website: "https://debuggersstudio.com/",
    startDate: "6.2024",
    endDate: "Present",
    isCurrent: true,
    responsibilities: `
- Built and maintained production React/Next.js applications, improving performance and SEO for client websites.
- Integrated REST APIs with backend services, accelerating feature delivery.
- Implemented accessibility best practices, achieving 90+ Lighthouse accessibility scores.
- Optimized bundle size and caching to improve page load speed.
- Collaborated with designers in Figma-to-code workflows for pixel-perfect, responsive UI.

In-house Project: [Marquee Addons](https://marqueeaddons.com)
- Developed UI features for an Elementor addon plugin with 20+ animated widgets.
- Built components including Text Marquee, Animated Heading, News Ticker, Image Accordion, and Bento Grid.
- Implemented advanced layouts like Stacked Slider, Sticky Cards, Smart Tabs, and Media Marquee.
- Focused on smooth animations, responsive design, and Elementor compatibility.

In-house Project: [ReelsWP](https://reelswp.com)
- Developed frontend features for a WooCommerce video reels plugin.
- Implemented Grid, Carousel, Marquee, and Stacked video layouts.
- Built swipe-based video player with autoplay, hover play, and popup reels.
- Added shoppable video functionality with product tagging inside reels.
- Integrated Elementor widget and Gutenberg block support.
`,
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Shadcn",
      "REST API Integration",
      "WordPress",
      "Elementor",
      "WooCommerce",
      "Performance Optimization",
      "Accessibility",
      "Figma",
    ],
  },
  {
    key: "tx",
    role: "Frontend Developer",
    type: "Intern",
    company: "ThemeXpert",
    website: "https://www.themexpert.com/",
    startDate: "3.2024",
    endDate: "5.2024",
    responsibilities: `
- Contributed to development of responsive UI components in React + Tailwind CSS used by thousands of users.
- Participated in code reviews, ensuring adherence to best practices and reusability.
- Learned production workflow with Git, Agile standups, and collaborative feature development.`,
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Shadcn",
      "Git",
      "Figma",
      "Responsive Design",
      "Component Architecture",
    ],
  },
];
