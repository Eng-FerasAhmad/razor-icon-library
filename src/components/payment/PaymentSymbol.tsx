import { ReactElement } from 'react';

interface CustomIconProps {
    size?: number;
    color?: string;
}

export default function PaymentSymbol({
    size = 25,
    color = '#171717',
}: CustomIconProps): ReactElement {
    return (
        <svg
            width={size}
            height={(size / 25) * 24} // Adjust height proportionally to width
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity="0.4"
                d="M3.95898 15.8792L15.909 3.9292"
                stroke={color}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                opacity="0.4"
                d="M11.1309 18.2791L12.3309 17.0791"
                stroke={color}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                opacity="0.4"
                d="M13.8223 15.5887L16.2123 13.1987"
                stroke={color}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3.63057 10.239L10.2706 3.599C12.3906 1.479 13.4506 1.469 15.5506 3.569L20.4606 8.479C22.5606 10.579 22.5506 11.639 20.4306 13.759L13.7906 20.399C11.6706 22.519 10.6106 22.529 8.51057 20.429L3.60057 15.519C1.50057 13.419 1.50057 12.369 3.63057 10.239Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.0293 21.9985H22.0293"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
