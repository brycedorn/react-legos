import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import sizeOffsets from './sizes';
import { Brick, Stud, StudInner } from './elements';
import { getWidth } from './utils';

const Lego = ({
    color, shape, size, style, opacity, optimize
}) => {
    // Render each 1-1 unit one by one
    function renderUnitsForShape(shape, size) {
        return shape.map((row, y) => {
            return row.map((hasUnit, x) => {
                if (hasUnit) {
                    const offsets = sizeOffsets[size];
                    const style = {
                        zIndex: -y,
                        left: `${(x + y) * offsets.x}px`,
                        top: `${((x - y) * offsets.y).toFixed(2)}px`
                    };
                    const key = `"${x}:${y}"`;

                    const renderRight = !row[x + 1];
                    const renderLeft = !shape[y - 1] || !shape[y - 1][x];

                    return (
                        <div className="unit" style={style} key={key}>
                            <div>
                                {(optimize ? renderRight : true) && <div className='side side--1' />}
                                {(optimize ? renderLeft : true) && <div className='side side--2' />}
                            </div>
                            <div className='side--3-wrap'>
                                <div className='side side--3' />
                            </div>
                            <Stud className="stud" opacity={1 - opacity} color={color} >
                                <StudInner className="stud--inner" />
                            </Stud>
                        </div>
                    );
                }
            });
        });
    }

    const width = useState(getWidth(size, shape), '');

    return (
        <Fragment>
            <Brick size={size} color={color} style={style} opacity={1 - opacity} >
                <div style={{width}} />
                {renderUnitsForShape(shape, size)}
            </Brick>
        </Fragment>
    );
};

Lego.defaultProps = {
    size: Object.keys(sizeOffsets)[1],
    color: '#eee',
    opacity: 1,
    style: {},
    optimize: true
};

Lego.propTypes = {
    size: PropTypes.oneOf(Object.keys(sizeOffsets)),
    color: PropTypes.string,
    shape: PropTypes.array.isRequired,
    style: PropTypes.object,
    opacity: PropTypes.number,
    optimize: PropTypes.bool
};

export default Lego;
