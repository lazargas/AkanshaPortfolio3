import React, { useContext } from 'react';
import "./style.css";
import { Typography } from '../Typography/Typography';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { PortfolioContext } from '@/context/Portfolio';

type NavbarLinksProps = {

    text: string;
    link: string;
}

const textVariants = {
    initial: {
        y: "0",
        opacity: 0,
    },
    animate: {
        y: "-90px",
        transition: {
            duration: 0.5,
            ease: [0.12, 0, 0.39, 1]
        }
    },
    open: {
        opacity: 1,
        transition: {
            delay: 0.6
        }
    }
}




export const NavbarLinks = ({ text, link }: NavbarLinksProps) => {

    const {navBarOpen,setNavBarOpen} = useContext(PortfolioContext);

    const router = useRouter();

    const handleNavigation = (href: string) => {
        setNavBarOpen((prev:boolean)=>!prev);
        setTimeout(()=>router.push(href),1000);
    }

    return (
        <>
            <motion.div className="nav-link-new" style={{ opacity: 1 }} initial="initial" animate="open" whileHover="animate" >
                <motion.div onClick={() => handleNavigation(link)} aria-current="page" className="nav-link w-inline-block w--current"   >
                    <motion.div className="nav-link-text" id="textTranslateId" variants={textVariants} ><Typography text={text} size={64} smallSize={48} font='roca' weight={600} letterSpacing={0.01} /></motion.div>
                    <motion.div className="nav-link-text" id="textTranslateId" variants={textVariants} ><Typography text={text} size={64} smallSize={48} font='roca' weight={600} letterSpacing={0.01} /></motion.div>
                </motion.div>
            </motion.div>
        </>
    )
};