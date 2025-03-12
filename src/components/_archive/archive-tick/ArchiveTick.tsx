import { ReactElement } from 'react';

import { IconProps } from 'components/types';

export function ArchiveTick({
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
                d="M16.8359 2H7.19594C5.06594 2 3.33594 3.74 3.33594 5.86V19.95C3.33594 21.75 4.62594 22.51 6.20594 21.64L11.0859 18.93C11.6059 18.64 12.4459 18.64 12.9559 18.93L17.8359 21.64C19.4159 22.52 20.7059 21.76 20.7059 19.95V5.86C20.6959 3.74 18.9659 2 16.8359 2Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.60547 11L11.1055 12.5L15.1055 8.5"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
