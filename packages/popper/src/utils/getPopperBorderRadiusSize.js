/**
 * Helper to detect border radius size of a given data
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The popper data
 * @argument {Object} radius - The popper radius
 * @returns {Object} object containing width and height properties
 */
export default function getPopperBorderRadiusSize(data, radius) {
    let popperBorderRadius = radius.split(' ');

    // Check border radius is percentage.
    let popperBorderWidth = popperBorderRadius[0];
    let popperBorderHeight = popperBorderWidth;
    let isBorderPecentage = popperBorderWidth.match(/%/g);

    if (isBorderPecentage) {
        popperBorderWidth = popperBorderWidth.replace(/%/gi, '') * data.offsetWidth / 100;
        popperBorderHeight = popperBorderWidth;
    } else {
        popperBorderWidth = popperBorderRadius[0].replace(/px/gi, '');
        popperBorderHeight = popperBorderWidth;
    }

    if ( typeof popperBorderRadius[1] !== 'undefined' ) {
        isBorderPecentage = popperBorderRadius[1].match(/%/g);
        if (isBorderPecentage) {
            popperBorderHeight = popperBorderRadius[1] .replace(/%/gi, '') *  data.offsetHeight / 100;
        } else {
            popperBorderHeight = popperBorderRadius[1].replace(/px/gi, '');
        }
    }

    return {
        width: parseInt(popperBorderWidth),
        height: parseInt(popperBorderHeight)
    };
}
