"use client"
import React, { ReactNode } from 'react';
import { AnimatePresence, cubicBezier, motion, useScroll } from 'framer-motion';

type useScrollOpacityProps = {
    children: any;
}

const containerVars = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        duration: 1,
        ease: cubicBezier(.35, .17, .3, .86)
    }
}

export const useScrollOpacity = ({ children }: useScrollOpacityProps) => {

    const { scrollYProgress } = useScroll();



    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial="initial"
                    animate="initial"
                    whileInView="animate"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    );
};