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
      "https://static.wixstatic.com/media/b90705_728c3dc737fc4075a4e91e93de53ec19~mv2.png/v1/fill/w_390,h_390,al_c,q_85,usm_2.00_1.00_0.00,enc_auto/Artboard%201%20copy%203.png",
    title: "Fineapple",
    subHeading: "Mobile Application",
    skills: ["UI/UX", "DESIGN LEAD"],
  },
  {
    content:
      "https://lever-client-logos.s3.us-west-2.amazonaws.com/9f8ae7a1-e18b-49a4-98cc-32d767d4663c-1621589042415.png",
    title: "Cred",
    subHeading: "Homepage Redesign - Unofficial",
    skills: ["UI/UX", "PRODUCT"],
  },
  {
    content:
      "https://play-lh.googleusercontent.com/UwxM-7Oay90oXBeX6PlA_cu_KCZP1Tk4yPUmFbH7z8D598DMPJkE5TCqUkPlDOy9fUg=w240-h480",
    title: "Oda Class",
    subHeading: "Graphic Designing",
    skills: ["VISUAL", "UI"],
  },
  {
    content:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/58268e174205367.649dbe49c95fa.png",
    title: "Chinmaya Honey",
    subHeading: "Website Design",
    skills: ["Product", "Freelance"],
  },
  {
    content:
      "https://instagram.fhyd14-2.fna.fbcdn.net/v/t51.2885-19/336024203_3069543656688240_904584511367662742_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fhyd14-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=lMCyoiaCndcQ7kNvgGeaIjA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYAhRn76wPrPXYW1H3F9NAh21g_SXyvjiDPZiaXl9kiFqw&oe=66D42203&_nc_sid=8b3546",
    title: "Sweetscapes",
    subHeading: "Mobile Application",
    skills: ["PRODUCT", "UX"],
  },
];


export const aboutContent: JSX.Element =
  <>
    Transitioning to digital design, I now focus on creating thoughtful and intuitive user experiences. I thrive in collaborative environments and enjoy working directly with clients to bring projects to life.
    <br />
    <br />
    I thrive in collaborative environments and enjoy working directly with clients to bring projects to life. My expertise includes developing pattern libraries, style guides, and exploring branding. I’m passionate about animation, prototyping, and illustration, with experience in large-scale web builds, app design.
    <br />
    <br />
    In my spare time, I enjoy being with friends and family.
  </>


export const aboutIntroString: string = " Nicola is a Lead Designer with over 15 years industry experience, focusing on crafting visually beautiful, engaging experiences through innovative UI and interaction design."

export const contactIntroString: string = "I'm currently available for freelance work whilst considering my next permanent position."

export const contactAbout: JSX.Element = <>
  If you would like to catch up to discuss any opportunities please send me a message.
</>
