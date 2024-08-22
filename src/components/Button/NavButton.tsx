"use client"
import React, { useContext } from 'react';
import "./style.css";
import { PortfolioContext } from '@/context/Portfolio';
import { motion } from 'framer-motion';
import { Button } from '@/components/Button/Button'

type ButtonProps = {

};

const gradient = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
}

export const ButtonNavContainer = ({ }: ButtonProps) => {

    const { navBarOpen, setNavBarOpen } = useContext(PortfolioContext);
    const handleClick = () => {
        setNavBarOpen(!navBarOpen);
    }

    return (
        <>

            <div className="master-circle-container">
                <a href="#" className="link-block-circle w-inline-block">
                    <div onClick={handleClick} style={{ display: `${navBarOpen ? "flex" : "none"}` }} >
                        <Button borderRadius={200} content="https://cdn.prod.website-files.com/6683c7a124683f081d444a5a/66866bb068ad0bf5b01cf721_Close.svg" />
                    </div>
                    <div onClick={handleClick} style={{ display: `${navBarOpen ? "none" : "flex"}` }} >
                        <Button borderRadius={200} content='https://cdn.prod.website-files.com/6683c7a124683f081d444a5a/66866d56db46c4001b2e03de_Open.svg' />
                    </div>
                </a>
            </div>

        </>
    )
};
