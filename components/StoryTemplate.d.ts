import { default as React, ReactElement } from '../../node_modules/react';
export interface SymbolComponent {
    Component: React.FC;
    name: string;
}
interface Props {
    symbols: SymbolComponent[];
}
export default function StoryTemplate({ symbols }: Props): ReactElement;
export {};
