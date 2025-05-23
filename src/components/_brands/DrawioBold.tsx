import { ReactElement } from 'react';

import { IconProps } from 'components/types';

export function DrawioBold({ size = 24 }: IconProps): ReactElement {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="2"
                y="2"
                width="28"
                height="28"
                rx="1.12"
                style={{ fill: '#f08705' }}
            />
            <path
                d="M16.861,9.168l3.02-3.187L30,16.094V28.88A1.119,1.119,0,0,1,28.88,30H11.316L5.931,24.593Z"
                style={{ fill: '#df6c0c', fillRule: 'evenodd' }}
            />
            <path
                d="M25.24,17.96H21.946l-3.071-5.32h.2a1.119,1.119,0,0,0,1.12-1.12V6.76a1.119,1.119,0,0,0-1.12-1.12H12.92A1.119,1.119,0,0,0,11.8,6.76v4.76a1.119,1.119,0,0,0,1.12,1.12h.205l-3.071,5.32H6.76a1.119,1.119,0,0,0-1.12,1.12v4.76a1.119,1.119,0,0,0,1.12,1.12h6.16a1.119,1.119,0,0,0,1.12-1.12V19.08a1.119,1.119,0,0,0-1.12-1.12h-.927l3.072-5.32h1.87l3.071,5.32H19.08a1.119,1.119,0,0,0-1.12,1.12v4.76a1.119,1.119,0,0,0,1.12,1.12h6.16a1.119,1.119,0,0,0,1.12-1.12V19.08A1.119,1.119,0,0,0,25.24,17.96Z"
                style={{ fill: '#fff' }}
            />
        </svg>
    );
}
