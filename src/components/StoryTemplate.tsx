import React, { ReactElement } from 'react';

export interface SymbolComponent {
    Component: React.FC;
    name: string;
}

interface Props {
    symbols: SymbolComponent[];
}

export default function StoryTemplate({ symbols }: Props): ReactElement {
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                justifyContent: 'center',
                padding: '16px',
                fontFamily: 'sans-serif',
                rowGap: '50px',
            }}
        >
            {symbols.map(({ Component, name }, index) => (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '130px',
                        gap: '16px',
                    }}
                >
                    <Component />
                    <span style={{ marginTop: '8px', fontSize: '12px' }}>
                        {name}
                    </span>
                </div>
            ))}
        </div>
    );
}
