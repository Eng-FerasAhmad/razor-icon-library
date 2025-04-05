import { ReactElement } from 'react';

import { IconProps } from 'components/types';

export function ShopOutline({
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
                d="M14.6998 22.7502H9.29977C4.35977 22.7502 2.25977 20.6402 2.25977 15.7102V11.2202C2.25977 10.8102 2.59977 10.4702 3.00977 10.4702C3.41977 10.4702 3.75977 10.8102 3.75977 11.2202V15.7102C3.75977 19.8002 5.20977 21.2502 9.29977 21.2502H14.6898C18.7798 21.2502 20.2298 19.8002 20.2298 15.7102V11.2202C20.2298 10.8102 20.5698 10.4702 20.9798 10.4702C21.3898 10.4702 21.7298 10.8102 21.7298 11.2202V15.7102C21.7398 20.6402 19.6298 22.7502 14.6998 22.7502Z"
                fill={color}
            />
            <path
                d="M12 12.75C10.9 12.75 9.9 12.32 9.19 11.53C8.48 10.74 8.15 9.71 8.26 8.61L8.93 1.93C8.97 1.55 9.29 1.25 9.68 1.25H14.35C14.74 1.25 15.06 1.54 15.1 1.93L15.77 8.61C15.88 9.71 15.55 10.74 14.84 11.53C14.1 12.32 13.1 12.75 12 12.75ZM10.35 2.75L9.75 8.76C9.68 9.43 9.88 10.06 10.3 10.52C11.15 11.46 12.85 11.46 13.7 10.52C14.12 10.05 14.32 9.42 14.25 8.76L13.65 2.75H10.35Z"
                fill={color}
            />
            <path
                d="M18.31 12.75C16.28 12.75 14.47 11.11 14.26 9.09L13.56 2.08C13.54 1.87 13.61 1.66 13.75 1.5C13.89 1.34 14.09 1.25 14.31 1.25H17.36C20.3 1.25 21.67 2.48 22.08 5.5L22.36 8.28C22.48 9.46 22.12 10.58 21.35 11.43C20.58 12.28 19.5 12.75 18.31 12.75ZM15.14 2.75L15.76 8.94C15.89 10.19 17.05 11.25 18.31 11.25C19.07 11.25 19.75 10.96 20.24 10.43C20.72 9.9 20.94 9.19 20.87 8.43L20.59 5.68C20.28 3.42 19.55 2.75 17.36 2.75H15.14Z"
                fill={color}
            />
            <path
                d="M5.64002 12.75C4.45002 12.75 3.37002 12.28 2.60002 11.43C1.83002 10.58 1.47002 9.46 1.59002 8.28L1.86002 5.53C2.28002 2.48 3.65002 1.25 6.59002 1.25H9.64002C9.85002 1.25 10.05 1.34 10.2 1.5C10.35 1.66 10.41 1.87 10.39 2.08L9.69002 9.09C9.48002 11.11 7.67002 12.75 5.64002 12.75ZM6.59002 2.75C4.40002 2.75 3.67002 3.41 3.35002 5.7L3.08002 8.43C3.00002 9.19 3.23002 9.9 3.71002 10.43C4.19002 10.96 4.87002 11.25 5.64002 11.25C6.90002 11.25 8.07002 10.19 8.19002 8.94L8.81002 2.75H6.59002Z"
                fill={color}
            />
            <path
                d="M14.5 22.75H9.5C9.09 22.75 8.75 22.41 8.75 22V19.5C8.75 17.4 9.9 16.25 12 16.25C14.1 16.25 15.25 17.4 15.25 19.5V22C15.25 22.41 14.91 22.75 14.5 22.75ZM10.25 21.25H13.75V19.5C13.75 18.24 13.26 17.75 12 17.75C10.74 17.75 10.25 18.24 10.25 19.5V21.25Z"
                fill={color}
            />
        </svg>
    );
}
