"use client"
import { projects } from '@/api/data';
import { cubicBezier, motion } from 'framer-motion';
import React from 'react';
import { Card } from '../Cards/Card';
import "./style.css";
import { Button } from '../Button/Button';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { gsap } from "gsap";

gsap.registerPlugin(ScrollToPlugin);

type AllWorkProps = {}

const AllWork = ({ }: AllWorkProps) => {

    const handleClick = () => {
        const tl = gsap.timeline();

        tl.to(window, {
            scrollTo: 0,
            ease: "none",
            duration: 2
        })
    }

    return (
        <>
            <motion.div
                className="main-section-all-work">
                <div className="divider-full"></div>
                <div id="All-work-top" className="h2-section-title all-work">

                    <motion.div className="title-wrapper">
                        <motion.div
                            initial={{ x: 100 }}
                            whileInView={{ x: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: cubicBezier(.35, .17, .3, .86)
                            }}
                            className="line-1">
                            <h1 className="section-title">More </h1>
                        </motion.div>
                        <motion.div
                            initial={{ x: -100 }}
                            whileInView={{ x: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: cubicBezier(.35, .17, .3, .86)
                            }}
                            className="line-2">
                            <h1 className="section-title">Work</h1>
                        </motion.div>
                    </motion.div>
                </div>
                <div className="container all-work">
                    <div className="w-layout-vflex column-flexbox left">
                        <div className="collection-all-work-wrapper w-dyn-list">
                            <div role="list" className="collection-list-all-work w-dyn-items">
                                {
                                    projects && projects.slice(0, projects.length / 2).map((project, index) => {
                                        return (

                                            <Card content={project.content!} title={project.title} subHeading={project.subHeading} skills={project.skills} />

                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='w-layout-vflex column-flexbox right'>
                        <div className="collection-all-work-wrapper w-dyn-list">
                            <div role="list" className="collection-list-all-work w-dyn-items">
                                {
                                    projects && projects.slice(projects.length / 2, projects.length).map((project, index) => {
                                        return (

                                            <Card content={project.content!} title={project.title} subHeading={project.subHeading} skills={project.skills} />

                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={handleClick} className='button-wrapper rotate-180'  >
                    <Button borderRadius={200} content='https://cdn.prod.website-files.com/6683c7a124683f081d444a5a/6698fe88e523e697f2bd6c33_Down.svg' />
                </div>
            </motion.div>

        </>
    )
};


export default AllWork;