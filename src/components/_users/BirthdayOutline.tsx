import { ReactElement } from 'react';

import { IconProps } from 'components/types';

export function BirthdayOutline({
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
                d="M2 22H22"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3.11035 22V13C3.11035 11.34 4.60035 10 6.44035 10H17.5504C19.3904 10 20.8804 11.34 20.8804 13V22"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5.55957 10V7.17C5.55957 5.97 6.63957 5 7.97957 5H16.0296C17.3596 5 18.4396 5.97 18.4396 7.17V10"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                opacity="0.34"
                d="M3.53027 13.98L3.90027 13.99C4.64027 14 5.23027 14.6 5.23027 15.34V15.67C5.23027 16.41 5.83027 17.02 6.58027 17.02C7.32027 17.02 7.93027 16.42 7.93027 15.67V15.36C7.93027 14.62 8.53027 14.01 9.28027 14.01C10.0203 14.01 10.6303 14.61 10.6303 15.36V15.67C10.6303 16.41 11.2303 17.02 11.9803 17.02C12.7203 17.02 13.3303 16.42 13.3303 15.67V15.36C13.3303 14.62 13.9303 14.01 14.6803 14.01C15.4203 14.01 16.0303 14.61 16.0303 15.36V15.67C16.0303 16.41 16.6303 17.02 17.3803 17.02C18.1203 17.02 18.7303 16.42 18.7303 15.67V15.36C18.7303 14.62 19.3303 14.01 20.0803 14.01H20.5303"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                opacity="0.34"
                d="M8 5V3"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                opacity="0.34"
                d="M16 5V3"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                opacity="0.34"
                d="M12 5V2"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
