import { ReactElement } from 'react';

import { IconProps } from 'components/types';

export function NotesOutline({
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
                d="M8.5 5.75C8.09 5.75 7.75 5.41 7.75 5V2C7.75 1.59 8.09 1.25 8.5 1.25C8.91 1.25 9.25 1.59 9.25 2V5C9.25 5.41 8.91 5.75 8.5 5.75Z"
                fill={color}
            />
            <path
                d="M16.5 5.75C16.09 5.75 15.75 5.41 15.75 5V2C15.75 1.59 16.09 1.25 16.5 1.25C16.91 1.25 17.25 1.59 17.25 2V5C17.25 5.41 16.91 5.75 16.5 5.75Z"
                fill={color}
            />
            <path
                d="M15.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H15.5C15.91 12.25 16.25 12.59 16.25 13C16.25 13.41 15.91 13.75 15.5 13.75Z"
                fill={color}
            />
            <path
                d="M12.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H12.5C12.91 16.25 13.25 16.59 13.25 17C13.25 17.41 12.91 17.75 12.5 17.75Z"
                fill={color}
            />
            <path
                d="M15.5 22.75H9.5C3.88 22.75 2.75 20.1 2.75 15.82V9.65C2.75 4.91 4.35 2.98 8.46 2.75H16.5C16.51 2.75 16.53 2.75 16.54 2.75C20.65 2.98 22.25 4.91 22.25 9.65V15.82C22.25 20.1 21.12 22.75 15.5 22.75ZM8.5 4.25C5.7 4.41 4.25 5.29 4.25 9.65V15.82C4.25 19.65 4.98 21.25 9.5 21.25H15.5C20.02 21.25 20.75 19.65 20.75 15.82V9.65C20.75 5.3 19.31 4.41 16.48 4.25H8.5Z"
                fill={color}
            />
        </svg>
    );
}
