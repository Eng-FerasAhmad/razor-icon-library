import { ReactElement } from 'react';

import { IconProps } from 'components/types';

export function ShopSymbol({
    size = 24,
    color = '#171717',
}: IconProps): ReactElement {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18 18C20.745 18 22.77 15.765 22.5 13.02L21.51 3H14.505L13.5 13.02C13.23 15.765 15.255 18 18 18Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M27.4649 18C30.4949 18 32.715 15.54 32.415 12.525L31.9949 8.4C31.4549 4.5 29.955 3 26.025 3H21.45L22.5 13.515C22.755 15.99 24.9899 18 27.4649 18Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.45995 18C10.9349 18 13.1699 15.99 13.4099 13.515L13.7399 10.2L14.4599 3H9.88495C5.95495 3 4.45495 4.5 3.91495 8.4L3.50995 12.525C3.20995 15.54 5.42995 18 8.45995 18Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <g opacity="0.4">
                <path
                    d="M4.51465 16.8296V23.5646C4.51465 30.2996 7.21465 32.9996 13.9496 32.9996H22.0346C28.7696 32.9996 31.4696 30.2996 31.4696 23.5646V16.8296"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M18 25.5C15.495 25.5 14.25 26.745 14.25 29.25V33H21.75V29.25C21.75 26.745 20.505 25.5 18 25.5Z"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}
