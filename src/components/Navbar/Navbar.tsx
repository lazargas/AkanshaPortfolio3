"use client"
import React, { useContext } from 'react';
import "./style.css";
import { PortfolioContext } from '@/context/Portfolio';
import { Typography } from '../Typography/Typography';
import { NavbarLinks } from './NavbarLinks';
import { AnimatePresence, cubicBezier, delay, motion, stagger } from 'framer-motion';



const containerVars = {
    initial: {
        scaleY: 0,
    },
    animate: {
        scaleY: 1,
        transition: {
            duration: 0.375,
            ease: cubicBezier(.35, .17, .3, .86),
        },
    },
    exit: {
        scaleY: 0,
        transition: {
            delay: 0.25,
            duration: 1,
            ease: cubicBezier(.35, .17, .3, .86),
        },
    },
}

const childrenVars = {
    initial: {
        opacity: 0,
        y: -20, // Optional: you can animate y position for additional effect
    },
    animate: {
        opacity: 1,
        y: 0, // Reset y position
        transition: {
            duration: 0.25,
            ease: [0.12, 0, 0.39, 0],
        },
    },
    exit: {
        opacity: 0,
        y: -20, // Optional: keep y position to maintain consistency
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}




type NavbarProps = {}

export const Navbar = ({ }: NavbarProps) => {

    const { navBarOpen, setNavBarOpen } = useContext(PortfolioContext);




    return (

        <AnimatePresence>
            {
                navBarOpen && <motion.nav
                    variants={containerVars}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    role="navigation" className="nav-menu-new w-nav-menu origin-top" id="nav-container" >
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="w-layout-vflex nav-links-flex-block">
                        {
                            [["/", "Home"], ["/all-work", "All Work"], ["/about", "About"], ["/contact", "Contact"]].map((_, i) => {
                                return (
                                    <motion.div key={`${i}-link`} variants={childrenVars} >
                                        <NavbarLinks text={_[1]} link={_[0]} />
                                    </motion.div>
                                );
                            }
                            )
                        }
                    </motion.div>
                </motion.nav>
            }
        </AnimatePresence>

    )
};