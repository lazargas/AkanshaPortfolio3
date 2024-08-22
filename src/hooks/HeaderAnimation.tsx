"use client"
import { cubicBezier, motion } from 'framer-motion';
import React, { ReactNode } from 'react';

type HeaderAnimationProps = {
    children: ReactNode
}

export const HeaderAnimation = ({ children }: HeaderAnimationProps) => (
    <>
        <motion.div
            initial={{ y: 10, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.5,
                ease: cubicBezier(.35, .17, .3, .86)
            }}
        >{children}</motion.div>
    </>
);