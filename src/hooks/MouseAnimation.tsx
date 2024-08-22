"use client"
import React, { ReactNode, useEffect, useState } from 'react';
import { delay, motion } from 'framer-motion';


type MouseAnimationProps = {
    content?: string;
    children?: ReactNode;
    glow?: boolean;
    stroke?: boolean;
}



export const MouseAnimation = ({ children }: MouseAnimationProps) => {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: MouseEvent) => {
        setTimeout(() => {
            setPosition({ x: event.clientX, y: event.clientY });
        },);

    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [position]);


    const mouseVariants = {
        initital: { x: -100, y: -100, opacity: 0 },
        animate: { x: position.x, y: position.y, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], } },

    }

    return (
        <React.Fragment>
            <motion.div
                variants={mouseVariants}
                initial="initial"
                animate="animate"
            >
                {children}
            </motion.div>
        </React.Fragment>
    )
};