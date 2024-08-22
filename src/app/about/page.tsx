import React from 'react';
import "./style.css";
import { NavbarWrapper } from '@/components/Navbar/NavbarWrapper';
import { Navbar } from '@/components/Navbar/Navbar';
import { About } from '@/components/About/About';
import { MoreWorkWrapper } from '@/components/Projects/MoreWork';
import { Footer } from '@/components/Footer/Footer';
import { aboutContent, aboutIntroString } from '@/api/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
}

type AboutProps = {}

const AboutPage = ({ }: AboutProps) => (
    <>
        <NavbarWrapper isHome={true} />
        <Navbar />
        <About title='About' intro={aboutIntroString} about={aboutContent} isContact={false} />
        <MoreWorkWrapper />
        <Footer />
    </>
);

export default AboutPage;