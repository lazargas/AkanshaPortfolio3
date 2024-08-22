"use client"
import React, { useContext, useEffect, useState } from 'react';
import ProjectItem from './ProjectRow';
import { projects } from '@/api/data';
import "./style.css";
import { motion, cubicBezier, useScroll, useTransform } from "framer-motion";
import { PortfolioContext } from '@/context/Portfolio';

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

export const ProjectsWrapper = ({ }: MoreProjectsWrapperProps) => {
    const { projectRef } = useContext(PortfolioContext);

    const { scrollYProgress } = useScroll({
        target: projectRef,
        offset: ["start end", "center center"]
    });

    const background = useTransform(scrollYProgress, [0, 0.5, 1], ["#f16cfd", "#f3cf4f", "#deb9ee",]);

    const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

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
            {
                width != 0 && <motion.div id="featured-projects" ref={projectRef} className="main-section" style={{ background, opacity }} >
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
                                <h1 className="section-title">Featured </h1>
                            </motion.div>
                            <motion.div
                                initial={width < 498 ? { x: -10 } : { x: -100 }}
                                whileInView={{ x: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: cubicBezier(.35, .17, .3, .86)
                                }}
                                className="line-2">
                                <h1 className="section-title">projects</h1>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div className="container-home">
                        <motion.div className="collection-list-wrapper w-dyn-list">
                            <motion.div role="list" className="collection-list w-dyn-items">
                                {
                                    projects && projects.slice(0, 3).map((project, index) => {
                                        return (
                                            <ProjectItem content={project.content} title={project.title} subHeading={project.subHeading} skills={project.skills} />
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
            }


        </>
    )
};