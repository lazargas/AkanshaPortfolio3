import { ReactNode, JSXElementConstructor } from "react";

export type Project = {
  content?: string;
  title: string;
  subHeading: string;
  skills: string[];
};

export const projects: Project[] = [
  {
    content:
      "https://cdn.prod.website-files.com/6684052a067906bc8f1b443e/669538ef79c8c4181af7de28_Apple-preview.jpg",
    title: "Apple",
    subHeading: "Campaign Pages",
    skills: ["VISUAL", "INTERACTIVE"],
  },
  {
    content:
      "https://cdn.prod.website-files.com/6684052a067906bc8f1b443e/668d4e4105f2f0146ecb9489_Moneybox-30-preview.jpg",
    title: "Moneybox",
    subHeading: "Mobile App Version 3.0",
    skills: ["UI/UX", "PRODUCT"],
  },
  {
    content:
      "https://cdn.prod.website-files.com/6684052a067906bc8f1b443e/668e9d3c3c3576465c718462_WWE-preview.jpg",
    title: "WWE",
    subHeading: "TV apps, mobile app and web",
    skills: ["VISUAL", "UI"],
  },
  {
    content:
      "https://cdn.prod.website-files.com/6684052a067906bc8f1b443e/669538ef79c8c4181af7de28_Apple-preview.jpg",
    title: "Apple",
    subHeading: "Ennie moo",
    skills: ["VISUAL", "INTERACTIVE"],
  },
  {
    content:
      "https://cdn.prod.website-files.com/6684052a067906bc8f1b443e/668d4e4105f2f0146ecb9489_Moneybox-30-preview.jpg",
    title: "Moneybox",
    subHeading: "Mobile App Version 3.0",
    skills: ["UI/UX", "PRODUCT"],
  },
  {
    content:
      "https://cdn.prod.website-files.com/6684052a067906bc8f1b443e/668e9d3c3c3576465c718462_WWE-preview.jpg",
    title: "WWE",
    subHeading: "TV apps, mobile app and web",
    skills: ["VISUAL", "UI"],
  },
  {
    content:
      "https://cdn.prod.website-files.com/6684052a067906bc8f1b443e/669538ef79c8c4181af7de28_Apple-preview.jpg",
    title: "Apple",
    subHeading: "Ennie moo",
    skills: ["VISUAL", "INTERACTIVE"],
  },
  {
    content:
      "https://cdn.prod.website-files.com/6684052a067906bc8f1b443e/668d4e4105f2f0146ecb9489_Moneybox-30-preview.jpg",
    title: "Moneybox",
    subHeading: "Mobile App Version 3.0",
    skills: ["UI/UX", "PRODUCT"],
  },
  {
    content:
      "https://cdn.prod.website-files.com/6684052a067906bc8f1b443e/668e9d3c3c3576465c718462_WWE-preview.jpg",
    title: "WWE",
    subHeading: "TV apps, mobile app and web",
    skills: ["VISUAL", "UI"],
  },
  {
    content:
      "https://cdn.prod.website-files.com/6684052a067906bc8f1b443e/668e9d3c3c3576465c718462_WWE-preview.jpg",
    title: "WWE",
    subHeading: "TV apps, mobile app and web",
    skills: ["VISUAL", "UI"],
  },
];


export const aboutContent: JSX.Element =
  <>
    My expertise encompasses visual, UI, and interaction design, with a strong emphasis on crafting aesthetically pleasing and engaging experiences.
    <br />
    <br />
    I thrive in collaborative environments and enjoy working directly with clients to bring projects to life. My skill set includes developing pattern libraries, style guides, conceptualising designs, and delving into branding.
    <br />
    <br />
    I am also passionate about animation, prototyping, and illustration and have a proven track record in large-scale web and platform builds, app design, and content creation for social media.
    <br />
    <br />
    In my spare time, I enjoy painting and drawing; you can see more of my work in my art portfolio.
  </>


export const aboutIntroString: string = " Nicola is a Lead Designer with over 15 years industry experience, focusing on crafting visually beautiful, engaging experiences through innovative UI and interaction design."

export const contactIntroString: string = "I'm currently available for freelance work whilst considering my next permanent position."

export const contactAbout: JSX.Element = <>
  If you would like to catch up to discuss any opportunities please send me a message.
</>
