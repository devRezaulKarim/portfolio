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
        <li>Developed UI features for a popular Elementor addon plugin providing multiple animated content widgets.</li>
        <li>Implemented widgets including Text Marquee, Animated Heading, Animated Word Roller, and News Ticker.</li>
        <li>Built advanced interactive widgets such as Image Marquee, Video Marquee, Image Accordion, and Image Hotspot.</li>
        <li>Contributed to creative layout components like Bento Grid, Stacked Slider, Smart Tabs, and Sticky Cards.</li>
        <li>Developed animation-focused components including Circular Text Rotation, Card Marquee, and Text Reveal.</li>
        <li>Worked on dynamic WordPress + Elementor integrations ensuring smooth widget configuration and performance.</li>
      </ul>
      </div>
      <div class="pt-2">
      <p><span class="font-mono">In-house Product:</span> 
      <a href="https://reelswp.com/" target="_blank"><strong>ReelsWP</strong></a></p>

      <ul>
        <li>Developed frontend features for a WordPress plugin that enables Instagram/TikTok-style video reels for WooCommerce stores.</li>
        <li>Implemented multiple display layouts including Grid, Carousel, Marquee Reels, and Stacked Reels experiences.</li>
        <li>Built interactive video player features including swipe navigation, hover play, autoplay, and popup reels.</li>
        <li>Implemented shoppable video functionality allowing products to be tagged directly inside videos.</li>
        <li>Worked on Elementor widget and Gutenberg block integrations for seamless page builder support.</li>
        <li>Developed customizable UI controls including typography, spacing, colors, shapes, and CTA elements.</li>
        <li>Added support for multiple video sources including self-hosted videos, Vimeo, and custom video URLs.</li>
        <li>Improved user engagement with features like video view counters and drag-and-drop reel management.</li>
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
