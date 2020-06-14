import sizeOffsets from './sizes';

// Find rightmost edge to determine the first column
// that doesn't have any rendered bricks
//  - todo: refactor
export const getWidth = (size, shape) => {
    let width = shape.length + shape[0].length;

    // let i = shape.length - 1;
    let j = shape[0].length - 1;

    // Start at corner
    try {
        if (!shape[0][j]) {
            width -= 1;
        } else if (!shape[0][j-1] && !shape[1][j]) {
            width -= 1;
        } else if (!shape[0][j-2] && !shape[1][j-1] && !shape[2][j]) {
            width -= 1;
        } else if (!shape[0][j-3] && !shape[1][j-2] && !shape[2][j-1] && !shape[3][j]) {
            width -= 1;
        } else if (!shape[0][j-4] && !shape[1][j-3] && !shape[2][j-2] && !shape[3][j-1] && !shape[4][j]) {
            width -= 1;
        }
    } catch(e) {
        return `${width * sizeOffsets[size].x}px`;
    }

    return `${width * sizeOffsets[size].x}px`;
};