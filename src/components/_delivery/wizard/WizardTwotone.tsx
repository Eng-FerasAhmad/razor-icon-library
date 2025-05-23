import { ReactElement } from 'react';

import { IconProps } from 'components/types';

export function WizardTwotone({
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
                d="M15.4056 5.21L16.8156 8.02999C17.0056 8.41999 17.5156 8.78999 17.9456 8.86999L20.4956 9.28999C22.1256 9.55999 22.5056 10.74 21.3356 11.92L19.3456 13.91C19.0156 14.24 18.8256 14.89 18.9356 15.36L19.5056 17.82C19.9556 19.76 18.9156 20.52 17.2056 19.5L14.8156 18.08C14.3856 17.82 13.6656 17.82 13.2356 18.08L10.8456 19.5C9.13556 20.51 8.09557 19.76 8.54557 17.82L9.11558 15.36C9.22558 14.9 9.03558 14.25 8.70558 13.91L6.71559 11.92C5.54559 10.75 5.92558 9.56999 7.55558 9.28999L10.1056 8.86999C10.5356 8.79999 11.0456 8.41999 11.2356 8.02999L12.6456 5.21C13.3956 3.68 14.6356 3.68 15.4056 5.21Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                opacity="0.4"
                d="M8.01562 5H2.01562"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                opacity="0.4"
                d="M5.01562 19H2.01562"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                opacity="0.4"
                d="M3.01562 12H2.01562"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
