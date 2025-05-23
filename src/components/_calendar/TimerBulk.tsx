import { ReactElement } from 'react';

interface AlarmSymbolProps {
    size?: number;
    color?: string;
}

export function TimerBulk({
    size = 24,
    color = '#171717',
}: AlarmSymbolProps): ReactElement {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Alarm icon"
        >
            <path
                opacity="0.4"
                d="M12.0001 22.0002C16.7884 22.0002 20.6701 18.1185 20.6701 13.3302C20.6701 8.54185 16.7884 4.66016 12.0001 4.66016C7.21177 4.66016 3.33008 8.54185 3.33008 13.3302C3.33008 18.1185 7.21177 22.0002 12.0001 22.0002Z"
                fill={color}
            />
            <path
                d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z"
                fill={color}
            />
            <path
                d="M14.8906 3.45H9.11062C8.71062 3.45 8.39062 3.13 8.39062 2.73C8.39062 2.33 8.71062 2 9.11062 2H14.8906C15.2906 2 15.6106 2.32 15.6106 2.72C15.6106 3.12 15.2906 3.45 14.8906 3.45Z"
                fill={color}
            />
        </svg>
    );
}
