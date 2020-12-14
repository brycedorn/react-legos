# react-legos

[![npm version](https://badge.fury.io/js/react-legos.svg)](https://badge.fury.io/js/react-legos)

<img width="1041" alt="screen shot 2017-12-19 at 11 57 11 pm" src="https://user-images.githubusercontent.com/3171252/34193282-82468e80-e518-11e7-8b0c-c30ff0d6112e.png">

Try it out in [Storybook](https://bryce.io/react-legos).

## Make a LEGO brick!

```jsx
import Brick, { shapes } from 'react-legos'

...

<Brick shape={shapes['twoByFour']} />
```

## Props

Prop | Default | Description
---- | ------- | -----------
`shape` || The shape of the brick. A grid of true/false values to determine if the index is a space or filled.
`size` | `medium` | The size of the brick: small, medium, or large.
`style` || Optional style param, useful for z-indexing and placing bricks on top of one another.
`color` | `#eee` | The color of the brick, Can use colors in `lib/colors.js`, which correspond to [this list](http://www.peeron.com/cgi-bin/invcgis/colorguide.cgi).
`opacity` | 1 | For making the brick transparent.
`fetchFont` | `true` | Disable to prevent fetching Roboto via Google fonts.
`optimize` | `true` | Disable to render all sides of bricks, including invisible ones.

## Issues

If you find any issues with this component, please [report](https://github.com/brycedorn/react-legos/issues) them!

## Note

LEGO and the LEGO logo are trademarks and/or copyrights of the LEGO Group. This is not at all affiliated with The LEGO Group, and was simply a project of mine using the LEGO name as a proprietary eponym.
