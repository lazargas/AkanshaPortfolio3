"use client"
import React, { createContext, useState, ReactNode, FC, useRef, useEffect } from 'react';

export const PortfolioContext = createContext<any>(null);

export const PortfolioProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [navBarOpen, setNavBarOpen] = useState(false);

    const projectRef = useRef(null);
    const navRef = useRef(null);

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
        <PortfolioContext.Provider value={{ navBarOpen, setNavBarOpen, projectRef, navRef, width }} >
            {children}
        </PortfolioContext.Provider>
    );
}


