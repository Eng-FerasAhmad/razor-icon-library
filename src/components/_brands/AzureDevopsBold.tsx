import { ReactElement } from 'react';

import { IconProps } from 'components/types';

export function AzureDevopsBold({ size = 24 }: IconProps): ReactElement {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
        >
            <path
                fill="url(#azure-devops-gradient)"
                d="M15 3.622v8.512L11.5 15l-5.425-1.975v1.958L3.004 10.97l8.951.7V4.005L15 3.622zm-2.984.428L6.994 1v2.001L2.382 4.356 1 6.13v4.029l1.978.873V5.869l9.038-1.818z"
            />
            <defs>
                <linearGradient
                    id="azure-devops-gradient"
                    x1="8"
                    x2="8"
                    y1="14.956"
                    y2="1.026"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0078D4" />
                    <stop offset="0.16" stopColor="#1380DA" />
                    <stop offset="0.53" stopColor="#3C91E5" />
                    <stop offset="0.82" stopColor="#559CEC" />
                    <stop offset="1" stopColor="#5EA0EF" />
                </linearGradient>
            </defs>
        </svg>
    );
}
