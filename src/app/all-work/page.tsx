import { Footer } from '@/components/Footer/Footer';
import { Navbar } from '@/components/Navbar/Navbar';
import { NavbarWrapper } from '@/components/Navbar/NavbarWrapper';
import AllWork from '@/components/Projects/AllWork';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
    title: 'All Work',
}

type AllWorkPageProps = {}

const AllWorkPage = ({ }: AllWorkPageProps) => (
    <>
        <NavbarWrapper isHome={true} />
        <Navbar />
        <AllWork />
        <Footer />
    </>
);

export default AllWorkPage;