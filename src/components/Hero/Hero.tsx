"use client"
import React, { useContext, useEffect, useRef } from 'react';
import "./style.css";
import { cubicBezier, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
// import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";
import { Button } from '../Button/Button';
import { Icon } from '../Icons/Icon';
import Link from 'next/link';
import { PortfolioContext } from '@/context/Portfolio';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { MouseAnimation } from '@/hooks/MouseAnimation';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// , DrawSVGPlugin



type HeroProps = {}




export const Hero = ({ }: HeroProps) => {



    const pathRef = useRef(null);
    const containerRef = useRef(null);
    const { navRef } = useContext(PortfolioContext);
    const { scrollYProgress } = useScroll();




    // useGSAP(() => {

    //     console.log(pathRef);
    //     gsap.fromTo(pathRef.current,
    //         { drawSVG: "0%", }, {
    //         drawSVG: "100%",
    //         duration: 1,
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: containerRef.current,
    //             start: "center center",
    //             end: "bottom center",
    //             scrub: true,
    //         }
    //     });
    // }, {});

    const handleClick = () => {
        const element = document.querySelector(".hero-section");
        const height: number = element?.clientHeight! + 200;
        const tl = gsap.timeline();
        tl.to(window, {
            scrollTo: height,
            ease: "bounce.out",
            duration: 3
        })
    }



    return (
        <>
            <div ref={containerRef} className="hero-section">



                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: cubicBezier(.35, .17, .3, .86)
                    }}
                    className="hero-container">
                    <div className="hero-header">
                        <div className="hero-lockup">
                            <div className="brush_02">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 1060 648"
                                    width="1060"
                                    height="648"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <defs>
                                        <clipPath id="__lottie_element_2">
                                            <rect width="1060" height="648" x="0" y="0"></rect>
                                        </clipPath>
                                        <linearGradient
                                            id="__lottie_element_6"
                                            spreadMethod="pad"
                                            gradientUnits="userSpaceOnUse"
                                            x1="-746.7169799804688"
                                            y1="-169.7220001220703"
                                            x2="86.58300018310547"
                                            y2="53.72600173950195"
                                        >
                                            {/* <stop offset="0%" stopColor="rgb(221,155,249)"></stop>
                                            <stop offset="100%" stopColor="rgb(245,204,57)"></stop> */}
                                            <stop offset="0%" stopColor="rgb(37, 31, 79)"></stop>
                                            <stop offset="100%" stopColor="rgb(37, 31, 79)"></stop>
                                        </linearGradient>
                                    </defs>
                                    <g clipPath="url(#__lottie_element_2)">
                                        <g transform="matrix(1,0,0,1,865,307)" opacity="1">
                                            <g transform="matrix(1,0,0,1,-38.402000427246094,4.801000118255615)">
                                                <motion.path
                                                    ref={pathRef}
                                                    initial={{ pathLength: 0 }}
                                                    animate={{ pathLength: 1 }}
                                                    transition={{
                                                        delay: 0.1,
                                                        duration: 2,
                                                        ease: cubicBezier(.35, .17, .3, .86)
                                                    }}
                                                    stroke="url(#__lottie_element_6)"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    fillOpacity="0"
                                                    strokeOpacity="1"
                                                    strokeWidth="192"
                                                    d=" M-727,-81 C-644.5980224609375,80.1989974975586 -305.59698486328125,300.197998046875 -287,196.5 C-273.2919921875,120.06400299072266 -441.7539978027344,-170.96499633789062 -395,-196 C-307.59698486328125,-242.80099487304688 -255.59800720214844,9.197999954223633 75.2770004272461,128.49400329589844 C104.46800231933594,139.0189971923828 156.40199279785156,145.19900512695312 120.67900085449219,77.8010025024414 C97.29499816894531,33.683998107910156 34.16299819946289,-36.112998962402344 24,-92"
                                                ></motion.path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <img
                                src="https://open-akarsh-bucket.s3.amazonaws.com/AKANSHA.png"
                                loading="lazy"
                                alt="Nicola Hankins logotype"
                                className="logo"
                            />

                        </div>
                    </div>
                    <div className="hero-column">

                        <div onClick={handleClick} className='button-wrapper' >
                            <Button borderRadius={200} content='https://cdn.prod.website-files.com/6683c7a124683f081d444a5a/6698fe88e523e697f2bd6c33_Down.svg' />
                        </div>

                        <div className="hero-intro">
                            <div className='flex'>
                                <h2 className="subtitles">Prod</h2>
                                <h2 className='subtitles' style={{ color: "#000" }}>uct</h2>
                            </div>
                            <div className='flex'>
                                <h2 className="subtitles">Desig</h2>
                                <h2 className='subtitles' style={{ color: "#000" }}>ner</h2>
                            </div>
                            <p className="intro-copy">
                                <span style={{ color: "#fff" }}>Crafting</span> visually beautiful, engaging <span style={{ color: "#fff" }}>exper</span>iences through innovative UI and interaction design.
                            </p>

                        </div>

                    </div>
                </motion.div>
            </div >

        </>
    );
}


// https://cdn.prod.website-files.com/6683c7a124683f081d444a5a/66979c683628f48fe6954e82_Logo.svg