"use client"
import React, { useEffect, useState } from 'react';
import ProjectItem from './ProjectRow';
import { projects } from '@/api/data';
import "./style.css";
import { motion, cubicBezier } from "framer-motion";
import { Card } from '@/components/Cards/Card';

type MoreProjectsWrapperProps = {}


const containerVars = {
    initial: {
        opacity: 0
    },
    animate:
    {
        opacity: 1,
        transition: {
            duration: 1,
            ease: cubicBezier(.35, .17, .3, .86)
        }
    }
}

export const MoreWorkWrapper = ({ }: MoreProjectsWrapperProps) => {
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
            <motion.div id="featured-projects" className="main-section">
                <motion.div className="divider-full"></motion.div>
                <motion.div className="h2-section-title">
                    <motion.div className="title-wrapper">
                        <motion.div
                            initial={width < 498 ? { x: 10 } : { x: 100 }}
                            whileInView={{ x: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: cubicBezier(.35, .17, .3, .86)
                            }}
                            className="line-1">
                            <h1 className="section-title">More </h1>
                        </motion.div>
                        <motion.div
                            initial={width < 498 ? { x: -10 } : { x: -100 }}
                            whileInView={{ x: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: cubicBezier(.35, .17, .3, .86)
                            }}
                            className="line-2">
                            <h1 className="section-title">Work</h1>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div className="container">
                    <motion.div className="collection-list-wrapper w-dyn-list">
                        <motion.div role="list" className="collection-list w-dyn-items-more">
                            {
                                projects && projects.slice(0, 2).map((project, index) => {
                                    return (

                                        <Card key={`${index}-card`} content={project.content!} title={project.title} subHeading={project.subHeading} skills={project.skills} />


                                    );
                                })
                            }
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="initial"
                        whileHover="animate"
                        className="bottom-cta">
                        <a href="/all-work" className="link-block-button w-inline-block">
                            <motion.div className="primary-button">
                                <motion.div className="primary-button-text">All work</motion.div>
                            </motion.div>
                            <motion.div variants={containerVars} className="button-gradient-container">
                                <motion.div className="button-gradient"></motion.div>
                            </motion.div>
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>

        </>
    )
};