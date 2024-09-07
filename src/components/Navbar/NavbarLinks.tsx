import React from 'react';
import "./style.css";
import { Typography } from '../Typography/Typography';
import { motion } from 'framer-motion';

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



export const NavbarLinks = ({ text, link }: NavbarLinksProps) => (
    <>
        <motion.div className="nav-link-new" style={{ opacity: 1 }} initial="initial" animate="open" whileHover="animate" >
            <motion.a href={link} aria-current="page" className="nav-link w-inline-block w--current"   >
                <motion.div className="nav-link-text" id="textTranslateId" variants={textVariants} ><Typography text={text} size={64} smallSize={48} font='roca' weight={600} letterSpacing={0.06} /></motion.div>
                <motion.div className="nav-link-text" id="textTranslateId" variants={textVariants} ><Typography text={text} size={64} smallSize={48} font='roca' weight={600} letterSpacing={0.06} /></motion.div>
            </motion.a>
        </motion.div>
    </>
);