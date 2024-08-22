"use client"
import React, { useContext } from 'react';
import "./style.css";
import { PortfolioContext } from '@/context/Portfolio';
import { motion } from 'framer-motion';

type ButtonProps = {
    borderRadius: number;
    content: any;
    width?: number;
};

const gradient = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
}

export const TextButton = ({ borderRadius, content, width }: ButtonProps) => {



    return (
        <>
            <motion.div
                initial="initial"
                animate='initial'
                whileHover='animate'
                className="hamburger-menu-open"
            >
                <div className="close-menu" style={{ borderRadius: `${borderRadius}px` }} >
                    <div className="icon">
                        {content}
                    </div>
                </div>
                <motion.div className="menu-button-gradient" variants={gradient}></motion.div>
            </motion.div>
        </>
    )
};
