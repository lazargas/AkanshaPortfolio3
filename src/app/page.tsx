import Image from "next/image";
import { ButtonNavContainer } from "@/components/Button/NavButton";
import { PortfolioProvider } from "@/context/Portfolio";
import { Metadata } from 'next'
import { Typography } from "@/components/Typography/Typography";
import { Navbar } from "@/components/Navbar/Navbar";
import { Icon } from "@/components/Icons/Icon";
import ProjectItem from "@/components/Projects/ProjectRow";
import { Card } from "@/components/Cards/Card";
import { NavbarWrapper } from "@/components/Navbar/NavbarWrapper";
import { About } from "@/components/About/About";
import { ProjectsWrapper } from "@/components/Projects/MoreProjectsWrapper";
import { Hero } from "@/components/Hero/Hero";
import { Footer } from "@/components/Footer/Footer";
import { useScrollOpacity } from "@/hooks/useScrollOpacity";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";

export const metadata: Metadata = {
  title: 'Portfolio',
}



export default function Home() {

  return (
    <>
      <NavbarWrapper isHome={false} />
      <Navbar />
      <Hero />
      <ProjectsWrapper />
      <Footer />
    </>
  );
}
