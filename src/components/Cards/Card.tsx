"use client"
import React, { useEffect, useState } from 'react';
import "./style.css";
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';


type CardProps = {
    content: string;
    title: string;
    subHeading: string;
    skills: string[];
}

const gradientVars = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transitions: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
        }
    }
}






export const Card = ({ content, title, subHeading, skills }: CardProps) => {

    const router = useRouter();

    const [opacityHandler, setOpacityHandeler] = useState<number>(1);
    useEffect(() => {
        const el = document.querySelector("#wrapper");
        el?.addEventListener("mouseenter", () => {
            setOpacityHandeler(0);
        });

        el?.addEventListener("mouseleave", () => {
            setOpacityHandeler(1);
        });



        return (
            el?.removeEventListener("mouseenter", () => {
                setOpacityHandeler(0);
            })
        )
    }, [opacityHandler]);

    const handleNavigation = () => {
        router.push(`/project/${title.toLowerCase()}`);
    }

    return (
        <>
            <AnimatePresence>
                <motion.div id="wrapper" initial="initial" animate="initial" whileHover="animate" role="listitem" className="collection-item w-dyn-item">
                    <div
                    onClick={handleNavigation}
                     className="link-block-project-preview w-inline-block">
                        <motion.div

                            className="project-preview">
                            <div className="project-preview-content">
                                <div className="project-categories">
                                    {
                                        skills.map((skill, i) => {
                                            return (
                                                <h3 className="project-category-text">{skill}</h3>
                                            );
                                        })
                                    }
                                </div>
                                <div className="image-ring">
                                    <div className="circle-image">
                                        <img
                                            src={content}
                                            loading="lazy"
                                            alt=""
                                            className="project-preview-image"
                                        />
                                    </div>
                                    <motion.div variants={gradientVars} className="circle-image-gradient"></motion.div>
                                </div>
                                <div className="client-and-project-type">
                                    <div className="client-name-container">
                                        <div className="client-name">
                                            <h1 className="preview-client-title-text-overlay">{title}</h1>
                                            <h1 className="preview-client-title-text">{title}</h1>
                                        </div>
                                        <div className="client-name-overlay">
                                            <h1 className="preview-client-title-text-overlay">{title}</h1>
                                        </div>
                                        <div className="client-arrow">
                                            <div className="preview-client-title-text">›</div>
                                        </div>
                                    </div>
                                    <div className="project-description">
                                        <h3 className="project-description-text">{subHeading}</h3>
                                    </div>
                                </div>
                            </div>
                            <motion.div
                                className="gradient-bg" style={{ opacity: `${opacityHandler}`, transition: "opacity 2s cubic-bezier(0.22, 1, 0.36, 1)" }} ></motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    )
};