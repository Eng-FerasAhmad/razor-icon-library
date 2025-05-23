import { ReactElement } from 'react';

import { IconProps } from 'components/types';

export function LoginTwotone({
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
            <g opacity="0.4">
                <path
                    d="M11.6797 14.62L14.2397 12.06L11.6797 9.5"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M4 12.0596H14.17"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <path
                d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"
                stroke={color}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
