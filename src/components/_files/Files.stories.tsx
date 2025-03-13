import { Meta, StoryObj } from '@storybook/react';

import { AddCircleSymbol } from './add-circle/AddCircleSymbol';
import { CloseSymbol } from './close/CloseSymbol';
import { DeleteSymbol } from './delete/DeleteSymbol';
import { EditSymbol } from './edit/EditSymbol';
import { ImageSymbol } from './image/ImageSymbol';
import { SearchSymbol } from './search/SearchSymbol';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'File',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: AddCircleSymbol,
        name: 'AddCircleSymbol',
    },
    {
        Component: CloseSymbol,
        name: 'CloseSymbol',
    },
    {
        Component: DeleteSymbol,
        name: 'DeleteSymbol',
    },
    {
        Component: EditSymbol,
        name: 'EditSymbol',
    },
    {
        Component: ImageSymbol,
        name: 'ImageSymbol',
    },
    {
        Component: SearchSymbol,
        name: 'SearchSymbol',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
