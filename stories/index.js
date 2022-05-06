/* global module */

import React from 'react';
import {
    storiesOf,
    withCentered,
    withKnobs,
    withNotes,
    number,
    select,
    text
} from '../.storybook';

import { FontImport } from '../lib/elements';
import Brick from '../lib/lego';
import { bricks, letters } from '../lib/shapes';
import sizes from '../lib/sizes';
import colors from '../lib/colors';

const colorOptions = Object.keys(colors);
const letterOptions = Object.keys(letters);
const sizeOptions = Object.keys(sizes);

const withFont = (Story) => (
    <>
        <FontImport />
        <Story />
    </>
);

storiesOf('Basic bricks', module)
    .addDecorator(withCentered)
    .addDecorator(withKnobs)
    .addDecorator(withFont)
    .add('With shape control', () =>
        <Brick
            color={colors[colorOptions[2]]}
            shape={bricks[select('Shape', {
                'Two by Two': 'twoByTwo',
                'Two by Four': 'twoByFour',
                'Single Unit': 'one',
                'One by Two': 'oneByTwo',
                'One by Four': 'oneByFour'
            }, 'twoByFour')]}
        />
    )
    .add('With size control', () => (
        <Brick
            color={colors[colorOptions[10]]}
            shape={bricks.twoByFour}
            size={select('Size', sizeOptions, sizeOptions[2])}
        />
    ))
    .add('With color control', () => (
        <Brick
            color={colors[select('Color', colorOptions, colorOptions[4])]}
            shape={bricks.twoByFour}
        />
    ))
    .add('With all controls', () => (
        <Brick
            color={colors[select('Color', colorOptions, colorOptions[3])]}
            shape={bricks[select('Shape', {
                'Two by Two': 'twoByTwo',
                'Two by Four': 'twoByFour',
                'Single Unit': 'one',
                'One by Two': 'oneByTwo',
                'One by Four': 'oneByFour'
            }, 'twoByFour')]}
            size={select('Size', sizeOptions, sizeOptions[2])}
        />
    ));

storiesOf('Transparent bricks', module)
    .addDecorator(withCentered)
    .addDecorator(withKnobs)
    .addDecorator(withFont)
    .add('With transparency control', () => (
        <Brick
            color={colors[colorOptions[4]]}
            opacity={number('Opacity', 0.3, {
                range: true,
                min: 0,
                max: 1,
                step: 0.05,
            })}
            shape={bricks.twoByFour}
        />
    ));

storiesOf('Letters', module)
    .addDecorator(withCentered)
    .addDecorator(withKnobs)
    .addDecorator(withFont)
    .add('Included letters', () => (
        <Brick
            shape={letters[select('Letter', letterOptions, letterOptions[0])]}
            size={select('Size', sizeOptions, sizeOptions[2])}
        />
    ));

storiesOf('Custom bricks', module)
    .addDecorator(withCentered)
    .addDecorator(withKnobs)
    .addDecorator(withFont)
    .add('With shape control', () => {
        const options = {
            range: true,
            min: 1,
            max: 10,
            step: 1
        };

        return <Brick
            shape={Array(number('Y', 3, options)).fill(Array(number('X', 3, options)).fill(true))}
            size={select('Size', sizeOptions, sizeOptions[2])}
        />;
    })
    .add('With advanced shape control', withNotes('A very simple component') (() => {
        const creeper = [
            [1,1,1,1,1,1,1,1],
            [1,0,0,1,1,0,0,1],
            [1,0,0,1,1,0,0,1],
            [1,1,1,0,0,1,1,1],
            [1,1,0,0,0,0,1,1],
            [1,1,0,1,1,0,1,1],
            [1,1,1,1,1,1,1,1]
        ];

        const stringified = JSON.stringify(creeper);

        return (
            <Brick
                color={colors[colorOptions[21]]}
                shape={JSON.parse(text('Shape', stringified)).reverse()}
                size={select('Size', sizeOptions, sizeOptions[1])}
            />
        );
    }));