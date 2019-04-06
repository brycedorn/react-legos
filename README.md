# react-legos

<img width="1041" alt="screen shot 2017-12-19 at 11 57 11 pm" src="https://user-images.githubusercontent.com/3171252/34193282-82468e80-e518-11e7-8b0c-c30ff0d6112e.png">

Try it out in [Storybook](https://react-legos.bryce.io).

## Make a LEGO brick!

```javascript
import Brick, { shapes } from 'react-legos'

...

<Brick shape=shapes['twoByFour'] />
```

## Props

Prop | Default | Description
---- | ------- | -----------
`shape` || The shape of the brick. A grid of true/false values to determine if the index is a space or filled.
`size` | `medium` | The size of the brick: small, medium, large or xLarge.
`style` || Optional style param, useful for z-indexing and placing bricks on top of one another.
`placement` || Style params to set on the brick, specific to the location of the brick on the page.
`color` | random | The color of the brick, chosen from `lib/colors.js`. If not specified, will render a random color from said list. Colors taken from [this list](http://www.peeron.com/cgi-bin/invcgis/colorguide.cgi).

## Issues

If you find any issues with this component, please [report](https://gitlab.com/brycedorn/react-legos/issues) them!

## Note

LEGO and the LEGO logo are trademarks and/or copyrights of the LEGO Group. This is not at all affiliated with The LEGO Group, and was simply a project of mine using the LEGO name as a proprietary eponym.
