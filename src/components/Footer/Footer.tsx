"use client"
import React from 'react';
import "./style.css";
import { cubicBezier, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

type FooterProps = {}


const containerVars = {
    initial: {
        scaleX: 0,
    },
    animate: {
        scaleX: 1,
        transition: {
            duration: 0.375,
            ease: cubicBezier(.35, .17, .3, .86),
        },
    }
}

export const Footer = ({ }: FooterProps) => {
    
const router = useRouter();

const handleNavigation = (href:string) => {
    router.push(`/${href}`);
}

    return (
        <div className="footer-section">
        <div className="footer-links">
            {
                [["All work", "all-work"], ["About", "about"], ["Contact", "contact"]].map(([item, href], index) => {
                    return (
                        <motion.a
                            initial="initial"
                            animate="initial"
                            whileHover="animate"
                            key={`footer-${index}`}
                            onClick={()=>handleNavigation(href)}
                             className="link-block-footer w-inline-block" >
                            < div className="link-01" >{item}</div>
                            <motion.div variants={containerVars} className="footer-link-line"></motion.div>
                        </motion.a>
                    );
                })
            }
        </div>
        <div className="footer-social-icons">
            <a href="https://www.linkedin.com/in/akansha-singh-06aa98202/" target="_blank" className="link-block-footer w-inline-block">
                <img
                    src="https://cdn.prod.website-files.com/6650a31b90117b0556917761/668548a300f000f21235c759_Vectors-Wrapper.svg"
                    loading="lazy"
                    width="48.96"
                    height="48.96"
                    alt=""
                    className="footer-icon-wrapper"
                />
            </a>
            <a href="https://www.instagram.com/singh__akansha/" target="_blank" className="link-block-footer w-inline-block">
                <img
                    src="https://cdn.prod.website-files.com/6650a31b90117b0556917761/668548a376e074a0aeb40ea5_Vectors-Wrapper.svg"
                    loading="lazy"
                    width="48.96"
                    height="48.96"
                    alt=""
                    className="footer-icon-wrapper"
                />
            </a>
            <a href="https://www.behance.net/akanshasingh48" target="_blank" className="link-block-footer w-inline-block">
                <img
                    src="https://cdn.prod.website-files.com/6650a31b90117b0556917761/668548a454ec547505fd0c6e_Vectors-Wrapper.svg"
                    loading="lazy"
                    width="48.96"
                    height="48.96"
                    alt=""
                    className="footer-icon-wrapper"
                />
            </a>
        </div>
        <div className="divider-full-footer"></div>
    </div >
    );
}
;