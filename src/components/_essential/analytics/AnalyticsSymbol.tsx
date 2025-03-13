import { ReactElement } from 'react';

import { IconProps } from 'components/types';

export function AnalyticsSymbol({
    size = 24,
    color = '#171717',
}: IconProps): ReactElement {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity="0.4"
                d="M6.89551 18.15V16.08"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                opacity="0.4"
                d="M12.0156 18.15V14.01"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                opacity="0.4"
                d="M17.1357 18.1501V11.9301"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <g opacity="0.4">
                <path
                    d="M17.1355 5.84961L16.6755 6.38961C14.1255 9.36961 10.7055 11.4796 6.89551 12.4296"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                <path
                    d="M14.2061 5.84961H17.1361V8.76961"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <path
                d="M9.01562 22H15.0156C20.0156 22 22.0156 20 22.0156 15V9C22.0156 4 20.0156 2 15.0156 2H9.01562C4.01562 2 2.01562 4 2.01562 9V15C2.01562 20 4.01562 22 9.01562 22Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
