import React, { useEffect, useState } from 'react';
import "./style.css";
import { Property } from 'csstype'

type TypographyProps = {
    text?: string;
    size?: number;
    color?: string;
    font?: string;
    letterSpacing?: number;
    weight?: number;
    lineHeight?: number;
    textAlign?: Property.TextAlign;
    smallSize?: number;
}


export const Typography = ({ text, size, color, font, letterSpacing, weight, lineHeight, textAlign, smallSize }: TypographyProps) => {
    const [width, setWidth] = useState<number>(0);
    useEffect(() => {
        if (window != undefined) {
            const Innerwidth = window.innerWidth;
            console.log(Innerwidth, "akarsh");
            setWidth(Innerwidth);
        }

    }, []);

    return (
        <>
            <div className='subtitle' style={{ fontSize: ` ${width < 498 ? `${smallSize}px` : `${size}px`} `, color: `${color}`, fontFamily: `${font}`, letterSpacing: `${letterSpacing}em`, fontWeight: `${weight ? weight : "400"}`, lineHeight: `${lineHeight}%`, textAlign: `${textAlign!}` }} >
                {text}
            </div >
        </>
    )
};