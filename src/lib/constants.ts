import { HatCrossIcon } from "../components/custom-svgs/hat-cross-icon";
import { HatIcon } from "../components/custom-svgs/hat-icon";
import { TieIcon } from "../components/custom-svgs/tie-icon";
import { AuthJSIcon } from "../components/custom-svgs/tool-icons/auth-js-icon";
import { CSSIcon } from "../components/custom-svgs/tool-icons/css-icon";
import { ExpressIcon } from "../components/custom-svgs/tool-icons/express-icon";
import { FirebaseIcon } from "../components/custom-svgs/tool-icons/firebase-icon";
import { GithubIcon } from "../components/custom-svgs/tool-icons/github-icon";
import { HTMLIcon } from "../components/custom-svgs/tool-icons/html-icon";
import { JSIcon } from "../components/custom-svgs/tool-icons/js-icon";
import { LaravelIcon } from "../components/custom-svgs/tool-icons/laravel-icon";
import { MongoDBIcon } from "../components/custom-svgs/tool-icons/mongo-db-icon";
import { MySQLIcon } from "../components/custom-svgs/tool-icons/my-sql-icon";
import { NetlifyIcon } from "../components/custom-svgs/tool-icons/netlify-icon";
import { NextIcon } from "../components/custom-svgs/tool-icons/next-icon";
import { NodeIcon } from "../components/custom-svgs/tool-icons/node-icon";
import { NPMIcon } from "../components/custom-svgs/tool-icons/npm-icon";
import { PHPIcon } from "../components/custom-svgs/tool-icons/php-icon";
import { PostgreSQLIcon } from "../components/custom-svgs/tool-icons/postgresql-icon";
import { PrismaIcon } from "../components/custom-svgs/tool-icons/prisma-icon";
import { ReactIcon } from "../components/custom-svgs/tool-icons/react-icon";
import { ReduxIcon } from "../components/custom-svgs/tool-icons/redux-icon";
import { RestAPIIcon } from "../components/custom-svgs/tool-icons/rest-api-icon";
import { TailwindIcon } from "../components/custom-svgs/tool-icons/tailwind-icon";
import { TSIcon } from "../components/custom-svgs/tool-icons/ts-icon";
import { VercelIcon } from "../components/custom-svgs/tool-icons/vercel-icon";
import { VSCodeIcon } from "../components/custom-svgs/tool-icons/vs-code-icon";
import { WPIcon } from "../components/custom-svgs/tool-icons/wp-icon";
import type {
  JourneyCardType,
  ProjectType,
  SectionDataType,
  ToolsType,
} from "./custom-types";

export const SECTION_CONST = {
  SECTION1: {
    sectionId: "section-1",
    bgColor: "#061414", // Darkest
    textColor: "#bdc3c7",
  },
  SECTION2: {
    sectionId: "section-2",
    bgColor: "#143232", // Similar contrast to #2c3e50
    textColor: "#ffffff",
  },
  SECTION3: {
    sectionId: "section-3",
    bgColor: "#245050", // Similar contrast to #34495e
    textColor: "#ffffff",
  },
  SECTION4: {
    sectionId: "section-4",
    bgColor: "#5c7f7f", // Similar contrast to #7f8c8d
    textColor: "#ffffff",
  },
  SECTION5: {
    sectionId: "section-5",
    bgColor: "#bcdada", // Similar contrast to #bdc3c7
    textColor: "#1a2a2a", // Dark for contrast
  },
};

export const originalSections: SectionDataType[] = [
  {
    id: "section-1",
    bgColor: "#061515", // Darkest
    textColor: "#bdc3c7", // Soft light gray
  },
  {
    id: "section-2",
    bgColor: "#143232", // Similar contrast to #2c3e50
    textColor: "#ffffff",
  },
  {
    id: "section-3",
    bgColor: "#245050", // Similar contrast to #34495e
    textColor: "#ffffff",
  },
  {
    id: "section-4",
    bgColor: "#5c7f7f", // Similar contrast to #7f8c8d
    textColor: "#ffffff",
  },
  {
    id: "section-5",
    bgColor: "#bcdada", // Similar contrast to #bdc3c7
    textColor: "#1a2a2a", // Dark for contrast
  },
];

export const heroSubtitles = [
  "From pixels to performance, I design and develop frontend solutions that bring ideas to life.",
  "I create modern web interfaces that are fast, intuitive, and responsive across every device.",
  "I craft high-performing UIs that users love and developers trust. Let’s bring your vision to the browser.",
  "I build sleek, scalable web apps that look great and perform even better. Let's craft digital experiences your users will love.",
  "Design is the voice. Code is the action. I make both work in harmony.",
];

export const JourneyCards: JourneyCardType[] = [
  {
    id: 1,
    date: 2012,
    title: "Completed SSC (Business Studies)",
    description:
      "Successfully completed my SSC, marking the beginning of my formal education and setting the stage for lifelong learning.",
    cardIcon: HatIcon,
  },
  {
    id: 2,
    date: 2014,
    title: "Completed HSC (Business Studies)",
    description:
      "Graduated in Business Studies, where I built a foundational understanding of economics, commerce, and systems thinking—skills that still serve me in client-focused tech roles.",
    cardIcon: HatIcon,
  },
  {
    id: 3,
    date: 2016,
    title: "University Dropout",
    description:
      "Made the tough decision to leave university to pursue practical skills and hands-on experience. Though unconventional, this choice became the turning point that led me to discover freelancing, tech, and self-driven learning.",
    cardIcon: HatCrossIcon,
  },
  {
    id: 4,
    date: 2016,
    title: "Display Marketing",
    designation: "@Freelancing",
    description:
      "Worked as a freelancer and outsourcing partner for local clients, managing campaigns in display marketing. This phase helped me build critical soft skills like client communication, self-discipline, and project delivery under pressure. It also sparked my interest in the digital ecosystem, leading me to frontend development.",
    cardIcon: TieIcon,
  },
  {
    id: 5,
    date: 2022,
    title: "Web Development Bootcamp ",
    designation: "@Programming Hero",
    description:
      "Enrolled in a comprehensive course where I learned modern web development fundamentals: HTML, CSS, JavaScript, React, Firebase, Git, and more. Built real-world projects, followed best practices, and started sharing my code publicly.",
    cardIcon: HatIcon,
  },
  {
    id: 6,
    date: 2023,
    title: "Web Development Course",
    designation: "@As-Sunnah Skill Development Institute",
    description:
      "Continued my learning journey with a structured program focused on advanced frontend development, teamwork, and project-based learning. This experience sharpened my problem-solving skills and deepened my understanding of scalable frontend architecture.",
    cardIcon: HatIcon,
  },
  {
    id: 7,
    date: 2024,
    title: "Frontend Development Internship",
    designation: "@Theme Xpert",
    description:
      "Joined a fast-paced team as a frontend intern, contributing to real production projects. Focused on layout optimization, bug fixing, and writing clean, maintainable React components while gaining hands-on experience with Git and agile workflows.",
    cardIcon: TieIcon,
  },
  {
    id: 8,
    date: 2024,
    title: "Frontend Developer",
    designation: "@Debuggers Studio",
    description:
      "Currently working as a Frontend Developer, where I build responsive, SEO-friendly web interfaces using React, Next.js, and Tailwind CSS. I collaborate closely with designers and backend teams to craft modern, accessible user experiences that deliver real-world impact.",
    cardIcon: TieIcon,
  },
];

export const devTools: ToolsType[] = [
  // 🧠 Core Frontend Stack
  { id: 1, toolName: "HTML", toolIcon: HTMLIcon },
  { id: 2, toolName: "CSS", toolIcon: CSSIcon },
  { id: 3, toolName: "JavaScript", toolIcon: JSIcon },
  { id: 4, toolName: "TypeScript", toolIcon: TSIcon },
  { id: 5, toolName: "React JS", toolIcon: ReactIcon },
  { id: 6, toolName: "Next JS", toolIcon: NextIcon },
  { id: 7, toolName: "Tailwind CSS", toolIcon: TailwindIcon },
  { id: 8, toolName: "Redux", toolIcon: ReduxIcon },

  // 🔧 Tooling & Deployment
  { id: 9, toolName: "Git & GitHub", toolIcon: GithubIcon },
  { id: 10, toolName: "VS Code", toolIcon: VSCodeIcon },
  { id: 11, toolName: "NPM", toolIcon: NPMIcon },
  { id: 12, toolName: "Vercel", toolIcon: VercelIcon },
  { id: 13, toolName: "Netlify", toolIcon: NetlifyIcon },

  // 🔌 Backend & APIs
  { id: 14, toolName: "Node JS", toolIcon: NodeIcon },
  { id: 15, toolName: "Express JS", toolIcon: ExpressIcon },
  { id: 16, toolName: "REST API", toolIcon: RestAPIIcon },
  { id: 17, toolName: "Prisma ORM", toolIcon: PrismaIcon },

  // 🗃️ Databases
  { id: 18, toolName: "MongoDB", toolIcon: MongoDBIcon },
  { id: 19, toolName: "MySQL", toolIcon: MySQLIcon },
  { id: 20, toolName: "PostgreSQL", toolIcon: PostgreSQLIcon },

  // ☁️ Auth & Hosting
  { id: 21, toolName: "Auth JS", toolIcon: AuthJSIcon },
  { id: 22, toolName: "Firebase", toolIcon: FirebaseIcon },

  // 🐘 PHP & CMS
  { id: 23, toolName: "PHP", toolIcon: PHPIcon },
  { id: 24, toolName: "Laravel", toolIcon: LaravelIcon },
  { id: 25, toolName: "WordPress", toolIcon: WPIcon },
];

export const projects: ProjectType[][] = [
  [
    {
      id: 1,
      title: "My Portfolio",
      subtitle: "Subtitle 1",
      image: "/projects-img/portfolio.png",
      aspect: "square",
    },
    {
      id: 2,
      title: "Travel Vista",
      subtitle: "Subtitle 2",
      image: "/projects-img/Travel-vista-long.jpg",
      aspect: "portrait",
    },
  ],
  [
    {
      id: 3,
      title: "Carz",
      subtitle: "Subtitle 3",
      image: "/projects-img/carz-long.png",
      aspect: "portrait",
    },
    {
      id: 4,
      title: "Halal Jibica",
      subtitle: "Subtitle 4",
      image: "/projects-img/HJ-long.png",
      aspect: "square",
    },
  ],
  [
    {
      id: 5,
      title: "Fontawesome (clone)",
      subtitle: "Subtitle 5",
      image: "/projects-img/font.png",
      aspect: "square",
    },
    {
      id: 6,
      title: "Expense Tracker",
      subtitle: "Subtitle 6",
      image: "/projects-img/ET-long.png",
      aspect: "portrait",
    },
  ],
  [
    {
      id: 7,
      title: "Task Management",
      subtitle: "Subtitle 7",
      image: "/projects-img/TM-long.png",
      aspect: "portrait",
    },
    {
      id: 8,
      title: "Inventory Management",
      subtitle: "Subtitle 8",
      image: "/projects-img/IM-long.png",
      aspect: "square",
    },
  ],
];
