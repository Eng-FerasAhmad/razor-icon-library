import { ReactElement } from 'react';

import { IconProps } from 'components/types';

export function ShipTwotone({
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
                d="M20.421 12.37C21.291 12.72 21.831 13.75 21.631 14.66L21.221 16.52C20.511 19.72 18.001 22 14.381 22H9.62096C6.00096 22 3.49096 19.72 2.78096 16.52L2.37096 14.66C2.17096 13.75 2.71095 12.72 3.58095 12.37L5.00096 11.8L10.511 9.58999C11.471 9.20999 12.531 9.20999 13.491 9.58999L19.001 11.8L20.421 12.37Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.001 22V10"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <g opacity="0.4">
                <path
                    d="M19.001 8V11.8L13.491 9.59C12.531 9.21 11.471 9.21 10.511 9.59L5.00098 11.8V8C5.00098 6.35 6.35098 5 8.00098 5H16.001C17.651 5 19.001 6.35 19.001 8Z"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M14.501 5H9.50098V3C9.50098 2.45 9.95098 2 10.501 2H13.501C14.051 2 14.501 2.45 14.501 3V5Z"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}
