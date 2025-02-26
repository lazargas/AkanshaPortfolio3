"use client";
import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import "./style.css";
import { ButtonNavContainer } from '../Button/NavButton';
import { PortfolioContext } from '@/context/Portfolio';
import { useDispatch, useSelector } from 'react-redux';
import { selectViewportWidth } from '@/redux/slice/viewPortSlice';
import akansha from '@/assets/Images/AKANSHA.svg';  
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type NavbarWrapperProps = {
    isHome: boolean;
}

export const NavbarWrapper = ({ isHome }: NavbarWrapperProps) => {
    const { navBarOpen } = useContext(PortfolioContext);
    const { navRef } = useContext(PortfolioContext);
    const width = useSelector(selectViewportWidth);

    const router = useRouter();

    const handleNavigation = () => {
        router.push('/');
    }

    return (
        <>
            <motion.div
                className="navbar-new w-nav"
                ref={navRef}
                animate={{ backgroundColor: navBarOpen ? "#fdfff8" : "#fdfff8" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            >
                <div className='container-navbar w-container'>
                    <div className='w-layout-hflex nav-bar-wrapper new'>
                        <div className='nav-left'>
                            <div
                            onClick={handleNavigation}
                            className='link-block-home w-inline-block' >
                                <div className='logo-container'>
                                    {isHome && <Image
                                        src={akansha}
                                        loading="lazy"
                                        width={width < 498 ? "108" : "216"}
                                        alt="logo"
                                    />}
                                </div>
                            </div>
                        </div>
                        <div className='nav-right' >
                            <ButtonNavContainer />
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
};
