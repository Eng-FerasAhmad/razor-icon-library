import { ReactElement } from 'react';

interface IconProps {
    size?: number;
    color?: string;
}

export function AddCircleSymbol({
    size = 25,
    color = '#171717',
}: IconProps): ReactElement {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Bell icon"
        >
            <path
                d="M12.0355 20.5299C9.70549 20.5299 7.37549 20.1599 5.16549 19.4199C4.32549 19.1299 3.68549 18.5399 3.40549 17.7699C3.11549 16.9999 3.21549 16.1499 3.67549 15.3899L4.82549 13.4799C5.06549 13.0799 5.28549 12.2799 5.28549 11.8099V8.91992C5.28549 5.19992 8.31549 2.16992 12.0355 2.16992C15.7555 2.16992 18.7855 5.19992 18.7855 8.91992V11.8099C18.7855 12.2699 19.0055 13.0799 19.2455 13.4899L20.3855 15.3899C20.8155 16.1099 20.8955 16.9799 20.6055 17.7699C20.3155 18.5599 19.6855 19.1599 18.8955 19.4199C16.6955 20.1599 14.3655 20.5299 12.0355 20.5299ZM12.0355 3.66992C9.14549 3.66992 6.78549 6.01992 6.78549 8.91992V11.8099C6.78549 12.5399 6.48549 13.6199 6.11549 14.2499L4.96549 16.1599C4.74549 16.5299 4.68549 16.9199 4.81549 17.2499C4.93549 17.5899 5.23549 17.8499 5.64549 17.9899C9.82549 19.3899 14.2555 19.3899 18.4355 17.9899C18.7955 17.8699 19.0755 17.5999 19.2055 17.2399C19.3355 16.8799 19.3055 16.4899 19.1055 16.1599L17.9555 14.2499C17.5755 13.5999 17.2855 12.5299 17.2855 11.7999V8.91992C17.2855 6.01992 14.9355 3.66992 12.0355 3.66992Z"
                fill={color}
            />
            <path
                d="M13.8953 3.93993C13.8253 3.93993 13.7553 3.92993 13.6853 3.90993C13.3953 3.82993 13.1153 3.76993 12.8453 3.72993C11.9953 3.61993 11.1753 3.67993 10.4053 3.90993C10.1253 3.99993 9.82525 3.90993 9.63525 3.69993C9.44525 3.48993 9.38525 3.18993 9.49525 2.91993C9.90525 1.86993 10.9053 1.17993 12.0453 1.17993C13.1853 1.17993 14.1853 1.85993 14.5953 2.91993C14.6953 3.18993 14.6453 3.48993 14.4553 3.69993C14.3053 3.85993 14.0953 3.93993 13.8953 3.93993Z"
                fill={color}
            />
            <path
                d="M12.0352 22.8101C11.0452 22.8101 10.0852 22.4101 9.38516 21.7101C8.68516 21.0101 8.28516 20.0501 8.28516 19.0601H9.78516C9.78516 19.6501 10.0252 20.2301 10.4452 20.6501C10.8652 21.0701 11.4452 21.3101 12.0352 21.3101C13.2752 21.3101 14.2852 20.3001 14.2852 19.0601H15.7852C15.7852 21.1301 14.1052 22.8101 12.0352 22.8101Z"
                fill={color}
            />
        </svg>
    );
}
