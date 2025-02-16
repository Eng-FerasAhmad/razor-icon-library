import { ReactElement } from 'react';

interface OutlineClockSymbolProps {
    size?: number;
    color?: string;
}

export function OutlineClockSymbol({
    size = 24,
    color = '#171717',
}: OutlineClockSymbolProps): ReactElement {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Outline clock icon"
        >
            <path
                d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                opacity="0.4"
                d="M15.7109 15.1798L12.6109 13.3298C12.0709 13.0098 11.6309 12.2398 11.6309 11.6098V7.50977"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
