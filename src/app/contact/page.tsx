import { About } from '@/components/About/About';
import { Navbar } from '@/components/Navbar/Navbar';
import { NavbarWrapper } from '@/components/Navbar/NavbarWrapper';
import { contactIntroString, contactAbout } from '@/api/data';
import React from 'react';
import { MoreWorkWrapper } from '@/components/Projects/MoreWork';
import { Footer } from '@/components/Footer/Footer';
import { Contact } from '@/components/Contact/Contact';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Contact',
}

type ContactPageProps = {}

const ContactPage = ({ }: ContactPageProps) => (
    <>
        <NavbarWrapper isHome={true} />
        <Navbar />
        <About title='Contact' intro={contactIntroString} about={contactAbout} isContact={true} />
        <MoreWorkWrapper />
        <Footer />



    </>
);


export default ContactPage;