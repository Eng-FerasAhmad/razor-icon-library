import { ReactElement } from 'react';

import { IconProps } from 'components/types';

export function LogoutOutline({
    size = 24,
    color = '#171717',
}: IconProps): ReactElement {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17.4395 14.62L19.9995 12.06L17.4395 9.5"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.75977 12.0596H19.9298"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.7598 20C7.33977 20 3.75977 17 3.75977 12C3.75977 7 7.33977 4 11.7598 4"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
