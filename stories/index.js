import React from 'react'

import {
	storiesOf,
	withCentered,
	withKnobs,
	withNotes,
	number,
	select,
	text
} from '../.storybook'

import Brick from '../lib/lego'
import { bricks, letters } from '../lib/shapes'
import sizes from '../lib/sizes'
import * as colors from '../lib/colors'

const includedColors = Object.entries(colors).map((c) => { return c[1][0] })
const includedLetters = Object.keys(letters)
const includedSizes = Object.keys(sizes)

storiesOf('Basic bricks', module)
	.addDecorator(withCentered)
	.addDecorator(withKnobs)
	.add('With shape control', () =>
		<Brick
			color={includedColors[2]}
			shape={bricks[select('Shape', {
				'Two by Two': 'twoByTwo',
				'Two by Four': 'twoByFour',
				'Single Unit': 'one',
				'One by Two': 'oneByTwo',
				'One by Four': 'oneByFour'
			}, 'twoByFour')]}
		/>
	)
  .add('With size control', () =>
  	<Brick
  		color={includedColors[5]}
      shape={bricks.twoByFour}
      size={select('Size', includedSizes, includedSizes[2])}
  	/>
	)
	.add('With color control', () =>
  	<Brick
      color={select('Color', includedColors, includedColors[4])}
      shape={bricks.twoByFour}
  	/>
	)
	.add('With all controls', () =>
  	<Brick
      color={select('Color', includedColors, includedColors[3])}
      shape={bricks[select('Shape', {
				'Two by Two': 'twoByTwo',
				'Two by Four': 'twoByFour',
				'Single Unit': 'one',
				'One by Two': 'oneByTwo',
				'One by Four': 'oneByFour'
			}, 'twoByFour')]}
      size={select('Size', includedSizes, includedSizes[2])}
  	/>
	)

storiesOf('Letters', module)
	.addDecorator(withCentered)
	.addDecorator(withKnobs)
  .add('Included letters', () =>
  	<Brick
      shape={letters[select('Letter', includedLetters, includedLetters[0])]}
      size={select('Size', includedSizes, includedSizes[2])}
  	/>
	)

storiesOf('Custom bricks', module)
	.addDecorator(withCentered)
	.addDecorator(withKnobs)
	.add('With shape control', () => {
		const options = {
			range: true,
			min: 1,
			max: 10,
			step: 1
		}

		return <Brick
			shape={Array(number('Y', 3, options)).fill(Array(number('X', 3, options)).fill(true))}
			size={select('Size', includedSizes, includedSizes[2])}
		/>
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
		]

		const stringified = JSON.stringify(creeper)

    return (
    	<Brick
    		color={includedColors[21]}
				shape={JSON.parse(text('Shape', stringified)).reverse()}
				size={select('Size', includedSizes, includedSizes[1])}
			/>
		)
	}))