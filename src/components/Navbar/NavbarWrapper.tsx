"use client";
import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import "./style.css";
import { ButtonNavContainer } from '../Button/NavButton';
import { PortfolioContext } from '@/context/Portfolio';

type NavbarWrapperProps = {
    isHome: boolean;
}

export const NavbarWrapper = ({ isHome }: NavbarWrapperProps) => {
    const { navBarOpen } = useContext(PortfolioContext);
    const { navRef } = useContext(PortfolioContext);

    const [width, setWidth] = useState<number>(0);
    useEffect(() => {
        if (window != undefined) {
            const Innerwidth = window.innerWidth;
            console.log(Innerwidth, "akarsh");
            setWidth(Innerwidth);
            console.log(width);
        }

    }, []);

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
                            <a className='link-block-home w-inline-block' href="/">
                                <div className='logo-container'>
                                    {isHome && <img
                                        src="https://cdn.prod.website-files.com/6683c7a124683f081d444a5a/6696b362b5da70394204e3f3_Nav_logo.svg"
                                        loading="lazy"
                                        width={width < 498 ? "108" : "216"}
                                        alt="logo"
                                    />}
                                </div>
                            </a>
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
