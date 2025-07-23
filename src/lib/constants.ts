import type { SectionData } from "./custom-types";

export const SECTION_CONST = {
  SECTION1: {
    sectionId: "section-1",
    bgColor: "#061515", // Darkest
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

export const originalSections: SectionData[] = [
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
