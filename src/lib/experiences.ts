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
      <ul>
        <li>Built and maintained multiple production-level React/Next.js applications, improving performance and SEO for client websites.</li>
        <li>Partnered with the backend team to integrate REST APIs, reducing feature delivery time by 20%.</li>
        <li>Implemented accessibility best practices, raising Lighthouse accessibility scores to 90+.</li>
        <li>Optimized bundle size and caching, resulting in faster page loads (up to 30% improvement).</li>
        <li>Collaborated closely with designers in Figma-to-code workflows, ensuring pixel-perfect implementation and responsive design.</li>
      </ul>

      <div class="pt-2">
      <p><span class="font-mono">In-house Product:</span> 
      <a href="https://marqueeaddons.com/" target="_blank"><strong>Marquee Addons</strong></a></p>

      <ul>
        <li>Developed UI features for an Elementor addon plugin with 20+ animated widgets.</li>
        <li>Built components like Text Marquee, Animated Heading, News Ticker, Image Accordion, and Bento Grid.</li>
        <li>Implemented advanced layouts such as Stacked Slider, Sticky Cards, Smart Tabs, and Media Marquee.</li>
        <li>Focused on smooth animations, responsive layouts, and Elementor compatibility.</li>
      </ul>
      </div>
      <div class="pt-2">
      <p><span class="font-mono">In-house Product:</span> 
      <a href="https://reelswp.com/" target="_blank"><strong>ReelsWP</strong></a></p>

      <ul>
        <li>Developed frontend features for a WooCommerce video reels plugin.</li>
        <li>Implemented Grid, Carousel, Marquee, and Stacked video layouts.</li>
        <li>Built swipe-based video player with autoplay, hover play, and popup reels.</li>
        <li>Added shoppable video features with product tagging inside reels.</li>
        <li>Integrated Elementor widget and Gutenberg block support.</li>
      </ul>
      </div>
    `,
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "REST API Integration",
      "WordPress",
      "Elementor",
      "WooCommerce",
      "Performance Optimization",
      "Accessibility (Lighthouse)",
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
      <ul>
        <li>Contributed to development of responsive UI components in React + Tailwind CSS used by thousands of users.</li>
        <li>Participated in code reviews, ensuring adherence to best practices and reusability.</li>
        <li>Learned production workflow with Git, Agile standups, and collaborative feature development.</li>
      </ul>
    `,
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Responsive Design",
      "Git",
      "Component Architecture",
      "Figma",
    ],
  },
];
