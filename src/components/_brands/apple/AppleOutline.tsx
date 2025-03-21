import { ReactElement } from 'react';

import { IconProps } from 'components/types';

export function AppleOutline({
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.5901 19.3601C19.1401 18.5201 19.3401 18.1001 19.7601 17.1601C16.6801 15.9901 16.1801 11.6001 19.2301 9.9201C18.3001 8.75011 16.9901 8.08008 15.7601 8.08008C14.8701 8.08008 14.2601 8.31008 13.7101 8.52008C13.2501 8.70008 12.8201 8.86008 12.3101 8.86008C11.7501 8.86008 11.2601 8.68009 10.7401 8.50009C10.1701 8.30009 9.58012 8.08008 8.84012 8.08008C7.45012 8.08008 5.98013 8.93009 5.04013 10.3701C3.73013 12.4101 3.95013 16.2401 6.08013 19.5101C6.84013 20.6801 7.86013 21.9901 9.19013 22.0001C9.74013 22.0101 10.1101 21.8401 10.5101 21.6601C10.9701 21.4601 11.4601 21.2301 12.3201 21.2301C13.1801 21.2201 13.6701 21.4501 14.1201 21.6601C14.5101 21.8401 14.8701 22.0001 15.4101 22.0001C16.7501 21.9901 17.8301 20.5301 18.5901 19.3601Z"
                stroke={color}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.0101 2.07007C16.1701 3.17007 15.7201 4.26005 15.1301 5.02005C14.5001 5.84005 13.4001 6.48006 12.3401 6.44006C12.1501 5.38006 12.6401 4.29006 13.2401 3.56006C13.9101 2.76006 15.0401 2.14007 16.0101 2.07007Z"
                stroke={color}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
