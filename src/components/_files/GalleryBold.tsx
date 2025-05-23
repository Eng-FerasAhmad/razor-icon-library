import { ReactElement } from 'react';

import { IconProps } from 'components/types';

export function GalleryBold({
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
                d="M3.0798 19.0098L3.0598 19.0298C2.7898 18.4398 2.6198 17.7698 2.5498 17.0298C2.6198 17.7598 2.8098 18.4198 3.0798 19.0098Z"
                fill={color}
            />
            <path
                d="M9.50012 10.3801C10.8146 10.3801 11.8801 9.31456 11.8801 8.00012C11.8801 6.68568 10.8146 5.62012 9.50012 5.62012C8.18568 5.62012 7.12012 6.68568 7.12012 8.00012C7.12012 9.31456 8.18568 10.3801 9.50012 10.3801Z"
                fill={color}
            />
            <path
                d="M16.69 2H8.31C4.67 2 2.5 4.17 2.5 7.81V16.19C2.5 17.28 2.69 18.23 3.06 19.03C3.92 20.93 5.76 22 8.31 22H16.69C20.33 22 22.5 19.83 22.5 16.19V13.9V7.81C22.5 4.17 20.33 2 16.69 2ZM20.87 12.5C20.09 11.83 18.83 11.83 18.05 12.5L13.89 16.07C13.11 16.74 11.85 16.74 11.07 16.07L10.73 15.79C10.02 15.17 8.89 15.11 8.09 15.65L4.35 18.16C4.13 17.6 4 16.95 4 16.19V7.81C4 4.99 5.49 3.5 8.31 3.5H16.69C19.51 3.5 21 4.99 21 7.81V12.61L20.87 12.5Z"
                fill={color}
            />
        </svg>
    );
}
