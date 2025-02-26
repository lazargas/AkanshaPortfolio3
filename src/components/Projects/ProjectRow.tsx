"use client"
import React, { useContext } from 'react';
import { Icon } from '../Icons/Icon';
import "./style.css";
import { Typography } from '../Typography/Typography';
import { animate, AnimatePresence, motion } from 'framer-motion';
import { PortfolioContext } from '@/context/Portfolio';
import { useRouter } from 'next/navigation';


type ProjectItemProps = {
    content?: string;
    title: string;
    subHeading: string;
    skills: string[];
}

const ProjectItem = ({ title, subHeading, skills, content }: ProjectItemProps) => {

    const router = useRouter();

    const { width } = useContext(PortfolioContext);

    const arrowVars = {
        initial: {
            opacity: 0,

        },
        animate: {
            opacity: 1,

            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], }
        },
        exit: {
            opacity: 0,

            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], }
        }

    }

    const titleVars = {
        initial: {
            x: 0
        },
        animate: {
            x: 10,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], }
        }
    }

    const handleNavigation = () => {
        router.push(`/project/${title.toLowerCase()}`)
    }

    return (
        <AnimatePresence>
            <motion.div
                initial="initial"
                animate="initial"
                whileHover="animate"
                role="listitem" className="w-dyn-item overflow-hidden">
                <motion.div
                    initial="initial" animate="initial" whileHover="animate"
                    onClick={handleNavigation}
                    className="link-block w-inline-block">
                    <div className="featured-project-container">
                        <div className="featured-project">
                            <div className="featured-project-left">
                                <motion.div variants={titleVars} className="client-name-with-arrow">
                                    <div className="client-name-with-arrow">
                                        <Typography text={title} size={116} smallSize={48} font='roca' letterSpacing={0.08} weight={800} />
                                    </div>
                                    <motion.div variants={arrowVars} className="link-arrow-container">

                                        <Typography text={"›"} size={116} smallSize={24} font='roca' letterSpacing={-0.02} weight={400} color='#ed5cbd' />

                                    </motion.div>
                                </motion.div>
                                <div className="project-type">
                                    <Typography text={subHeading} smallSize={21} size={18} font='Hanken Grotesk' letterSpacing={0.07} weight={400} lineHeight={163} />
                                </div>
                            </div>
                            <div className="project-category-right">
                                {
                                    skills && skills.map((skill, index) => <Typography textAlign='left' smallSize={17} text={skill} size={21} font='Hanken Grotesk' letterSpacing={0.02} weight={600} lineHeight={200} />)
                                }
                            </div>
                            <Icon glow={true} stroke={true} content={content} isAnimate={width < 498 ? false : true} />
                        </div>
                        <div className="divider-full-inner section">
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
};

export default ProjectItem;
