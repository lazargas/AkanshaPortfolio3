"use client"
import React from 'react';
import "./style.css";
import { cubicBezier, motion } from 'framer-motion';

type ProjectDetailsProps = {
    content: string;
    title: string;
    subHeading: string;
    skills: string[];
}

export const ProjectDetails = ({ content, title, subHeading, skills }: ProjectDetailsProps) => (
    <>
        <div className="main-section-project projects-title">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.5,
                    ease: cubicBezier(.35, .17, .3, .86)
                }}
                className="container project-title">
                <div
                    className="project-title"
                >
                    <h1 className="project-title-details-page">{title}</h1>
                </div>
            </motion.div>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.5,
                    duration: 0.5,
                    ease: cubicBezier(.35, .17, .3, .86)
                }}
                className="container overview">
                <div
                    className="main-title"
                >
                    <h2 className="projects">Overview</h2>
                </div>
                <div className="intro-content-project">
                    <div className="intro">
                        <p


                            className="intro-paragraph-project"
                        >
                            {subHeading}
                        </p>
                        {/* <p


                            className="paragraph-project"
                        >
                            {subHeading}
                        </p> */}

                    </div>
                    <div className="project-details">
                        <div className="detail">
                            <h3 className="project-category-2">Client</h3>
                            <h3 className="project-detail">{title}</h3>
                        </div>
                        <div className="detail">
                            <div className="project-category-2">Project type</div>
                            <div className="project-detail">{subHeading.slice(0, 10)}</div>
                        </div>
                        <div className="detail">
                            <h3 className="project-category-2">Discipline</h3>
                            <div className="frame-58">
                                {
                                    skills && skills.map((skill, index) => <div key={`skill-${index}`} className="project-detail">{skill}</div>)
                                }
                            </div>
                        </div>
                        <div className="detail">
                            <div className="project-category-2">Role</div>
                            <h3 className="project-detail">{"UI/UX Designer"}</h3>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>

    </>
);