import { ReactElement } from 'react';

import { IconProps } from 'components/types';

export function FigmaBold({ size = 24 }: IconProps): ReactElement {
    return (
        <svg
            width={size}
            height={(size * 3) / 2}
            viewBox="0 0 400 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M299.167 400C354.395 400 399.167 355.228 399.167 300C399.167 244.772 354.395 200 299.167 200C243.939 200 199.167 244.772 199.167 300C199.167 355.228 243.939 400 299.167 400Z"
                fill="#00B6FF"
            />
            <path
                d="M0 500C0 444.772 44.772 400 100 400H200V500C200 555.228 155.228 600 100 600C44.772 600 0 555.228 0 500Z"
                fill="#24CB71"
            />
            <path
                d="M200 0V200H300C355.228 200 400 155.228 400 100C400 44.772 355.228 0 300 0H200Z"
                fill="#FF7237"
            />
            <path
                d="M0 100C0 155.228 44.772 200 100 200H200V0H100C44.772 0 0 44.772 0 100Z"
                fill="#FF3737"
            />
            <path
                d="M0 300C0 355.228 44.772 400 100 400H200V200H100C44.772 200 0 244.772 0 300Z"
                fill="#874FFF"
            />
        </svg>
    );
}
