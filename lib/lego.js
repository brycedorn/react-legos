/*
 * Released under the MIT license
 * https://mit-license.org
 */

import React from 'react'

import * as colors from './colors'
import sizeOffsets from './sizes'
import './lego.scss'

const someColors = [
  'Bright-green',
  'Fire-Yellow',
  'Bright-red',
  'Bright-blue',
  'Light-grey-metallic',
  'Bright-bluish-green',
  'Bright-bluish-violet',
]

const brickColors = Object.keys(colors);

const defaultProps = {
  size: 'medium'
}

const propTypes = {
  size: React.PropTypes.string
}

export default class Lego extends React.Component {
  generateBrickStyles(x, y, size) {
    const { xOffset, yOffset } = sizeOffsets[size]

    return {
      zIndex: -y,
      left: `${(x + y) * xOffset}px`,
      top: `${((x - y) * yOffset).toFixed(2)}px`
    }
  }

  // Find rightmost edge to determine the first column
  // that doesn't have any rendered bricks
  //  - todo: refactor
  getWidth(shape) {
    let width = shape.length + shape[0].length

    let i = shape.length - 1
    let j = shape[0].length - 1

    // Start at corner
    if (!shape[0][j]) {
      width -= 1
    } else { return width }

    if (!shape[0][j-1] && !shape[1][j]) {
      width -= 1
    } else { return width }

    if (!shape[0][j-2] && !shape[1][j-1] && !shape[2][j]) {
      width -= 1
    } else { return width }

    if (!shape[0][j-3] && !shape[1][j-2] && !shape[2][j-1] && !shape[3][j]) {
      width -= 1
    } else { return width }

    if (!shape[0][j-4] && !shape[1][j-3] && !shape[2][j-2] && !shape[3][j-1] && !shape[4][j]) {
      width -= 1
    } else { return width }

    return width
  }

  renderBricksFromShape(shape, size, brickColor) {
    return shape.map((row, y) => {
      return row.map((hasUnit, x) => {
        if (hasUnit) {
          const props = {
            style: this.generateBrickStyles(x, y, size),
            key: `${x}${y}`,
            className: `${brickColor} unit`
          }

          return this.renderBrick(props)
        }
      })
    })
  }

  renderBrick(props) {
    return (
      <div {...props} >
        <div>
          <div className='side side--1' />
          <div className='side side--2' />
        </div>
        <div className='side--3-wrap'>
          <div className='side side--3' />
        </div>
        <div className="stud" >
          <div className="stud--inner" />
        </div>
      </div>
    )
  }

  render () {
    const { color, placement, shape, size, style } = this.props

    let brickColor = color
    if (!brickColor) {
      let index = Math.floor(Math.random() * brickColors.length)
      brickColor = colors[brickColors[index]][0]
    }

    const width = this.getWidth(shape)
    const dimensions = {
      width: `${width*sizeOffsets[size].xOffset}px`
    }

    const brickStyle = Object.assign({}, placement, style)

    return (
      <div className={`brick brick--${size} ${brickColor}`} style={brickStyle} >
        <div className="scaffold" style={dimensions} />
        {this.renderBricksFromShape(shape, size, brickColor)}
      </div>
    )
  }
}

Lego.defaultProps = defaultProps
Lego.propTypes = propTypes