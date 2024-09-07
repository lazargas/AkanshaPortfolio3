"use client"
import React, { ReactNode } from 'react';
import "./style.css";
import { cubicBezier, motion } from 'framer-motion';
import { Typography } from '../Typography/Typography';
import { Contact } from '../Contact/Contact';

type AboutProps = {
    title: string;
    intro: string;
    about: JSX.Element;
    isContact: boolean;

}

export const About = ({ title, intro, about, isContact }: AboutProps) => (
    <>
        <div className="main-section-about hygiene">
            <motion.div

                className="container-about hygiene">
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: cubicBezier(.35, .17, .3, .86)
                    }}
                    className="hygiene-title"><Typography text={title} font='roca' lineHeight={110} weight={600} size={164} smallSize={54} /></motion.h1>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.5,
                        ease: cubicBezier(.35, .17, .3, .86)
                    }}
                    className="intro-content about">
                    <div className="intro">
                        <div className="intro-paragraph about">
                            {intro}
                        </div>
                        <div className="paragraph about">
                            {about}
                        </div>
                        <a href="https://behance.net/akanshasingh48" target="_blank" className="link-2">
                            Art portfolio
                        </a>
                    </div>
                </motion.div>
                {
                    isContact && <Contact />
                }
            </motion.div>
        </div>
    </>
);

