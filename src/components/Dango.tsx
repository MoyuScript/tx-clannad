import React from 'react';
import Color from 'color';

import './Dango.css';

export interface DangoProps extends React.HTMLAttributes<HTMLDivElement> {
    color?: string;
    flip?: boolean;
    index?: number;
}

const Dango: React.FC<DangoProps> = ({ color = '#d9edc8', flip, index = 0, style = {}, ...props }) => {
    const fillColor = color;
    const strokeColor = Color(fillColor).darken(0.4).desaturate(0.3).hex();
    return (
        <div
            style={{
                animationName: 'dango-jump',
                animationDuration: '1s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease-in-out',
                animationDelay: `${index * 0.1}s`,
                ...style,
            }}
            dangerouslySetInnerHTML={{
                __html: `
            <svg id="b" data-name="图层 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 282.37 203.26" style="${flip ? 'transform: scaleX(-1)' : ''}">
                <g id="c" data-name="图层 1">
                    <path d="M146,199.11s-66.65,2.42-107.05-12.09S-.76,125.56,10.98,87.22,55.53,4.35,146,4s130.53,47.65,132.26,118.1-17.27,77.01-132.26,77.01Z" style="fill: ${fillColor}; stroke: ${strokeColor}; stroke-miterlimit: 10; stroke-width: 8px;"/>
                    <path d="M210.63,64.78s5.18,19.68,2.76,40.06" style="fill: none; stroke: #151915; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 5px;"/>
                    <path d="M182.05,64.78s5.18,19.68,2.76,40.06" style="fill: none; stroke: #151915; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 5px;"/>
                </g>
            </svg>
            `,
            }}
            {...props}
        />
    );
};

export default Dango;
