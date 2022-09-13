import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: 'What is React?',
        content: 'pig',
    },
    {
        title: 'Why use React?',
        content: 'haha',
    },
    {
        title: 'How do you use React?',
        content: 'You use by create component',
    },
];


export default () => {
    return (
        <div>
            <Accordion items = {items} />
        </div>
    );
};