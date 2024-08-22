"use client"
import React from 'react';
import "./contactStyle.css";
import { TextButton } from '../Button/TextButton';
import { cubicBezier, motion } from 'framer-motion';
type ContactProps = {}


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


export const Contact = ({ }: ContactProps) => (
    <>
        <div className="container form">
            <div className="intro-content form" style={{ backgroundColor: "rgb(255, 222, 225)" }}>
                <div className="form-block w-form">
                    <form
                        id="email-form"
                        name="email-form"
                        method="get"
                        className="form"
                        aria-label="Email Form"
                    >
                        <div className="w-layout-hflex-contact flex-block">
                            <div className="w-layout-hflex-contact flex-block-form">
                                <label htmlFor="name" className="project-category-2 form">Name</label>
                                <input
                                    className="text-field w-input"

                                    name="name"
                                    placeholder=""
                                    type="text"
                                    id="name"
                                    required
                                />
                            </div>
                            <div className="w-layout-hflex-contact flex-block-form">
                                <label htmlFor="email" className="project-category-2 form">Email Address</label>
                                <input
                                    className="text-field w-input"

                                    name="email"
                                    placeholder=""
                                    type="email"
                                    id="email"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex-block-form message">
                            <label htmlFor="Message" className="project-category-2 form">Message</label>
                            <input
                                className="text-field message w-[100%]  w-input"

                                name="Message"
                                placeholder=""
                                type="text"
                                id="Message"
                                required
                            />
                        </div>
                        <div className="link-block-button-contact submit">
                            <motion.div
                                initial="initial"
                                animate="initial"
                                whileHover="animate"
                                className="bottom-cta">
                                <a href="/all-work" className="link-block-button w-inline-block">
                                    <motion.div className="primary-button">
                                        <motion.div className="primary-button-text">Send</motion.div>
                                    </motion.div>
                                    <motion.div variants={containerVars} className="button-gradient-container">
                                        <motion.div className="button-gradient"></motion.div>
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>
                    </form>
                    {/* <div className="success-message w-form-done" tabIndex="-1" role="region" aria-label="Email Form success">
                        <div className="text-block success">Thank you! </div>
                        <div className="text-block">Your message has been received.</div>
                    </div>
                    <div className="error-message w-form-fail" tabIndex="-1" role="region" aria-label="Email Form failure">
                        <div className="error-text">Oops! Something went wrong while submitting the form.</div>
                    </div> */}
                </div>
            </div>
        </div>

    </>
);