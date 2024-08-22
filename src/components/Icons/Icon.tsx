"use client"
import React, { ReactNode, useContext, useEffect, useState } from 'react';
import "./style.css";
import { delay, motion } from 'framer-motion';
import { PortfolioContext } from '@/context/Portfolio';


type IconProps = {
    content?: string;
    children?: ReactNode;
    glow?: boolean;
    stroke?: boolean;
    isAnimate?: boolean;
}



export const Icon = ({ content, children, stroke, glow, isAnimate }: IconProps) => {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const { width } = useContext(PortfolioContext);

    const handleMouseMove = (event: MouseEvent) => {
        setTimeout(() => {
            setPosition({ x: event.clientX - 200, y: event.clientY - 200 });
        },);

    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [position]);


    const mouseVariants = {
        initital: { x: -100, y: -100, opacity: 0 },
        animate: { x: position.x, y: position.y, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], } },

    }

    return (
        <>
            {
                isAnimate ? <motion.div className="circle-follow"
                    variants={mouseVariants}
                    initial="initial"
                    animate="animate"
                >
                    <div className="circle-follow-image">
                        {
                            children ? children : <img src={content}
                                loading="lazy" alt="" className="image" />
                        }
                    </div>
                    {stroke && <div className="circle-follow-stroke"></div>}
                    {glow && <div className="circle-follow-glow" >
                    </div>}

                </motion.div> : <div className="circle-follow"

                >
                    <div className="circle-follow-image">
                        {
                            children ? children : <img src={content}
                                loading="lazy" alt="" className="image" />
                        }
                    </div>
                    <>
                        {
                            width > 498 && <> {stroke && <div className="circle-follow-stroke"></div>}
                                {glow && <div className="circle-follow-glow" >
                                </div>}
                            </>
                        }
                    </>


                </div >
            }

        </>
    )
};