'use strict';

var pathFinder = require('./path-finder');

function hasZeroSum(path) {
    var sum = 0, previousCell = null;
    for (var i = 0; i < path.length; i++) {
        var cell = path[i];
        if (previousCell === null) {
            sum += cell.value;
        } else {
            if (previousCell.x !== cell.x) {
                sum -= cell.value;
            } else {
                sum += cell.value;
            }
        }
        if (sum === 0) {
            return true;
        }
        previousCell = cell;
    }
}

function check(matrix) {
    var result = false;
    matrix.forEach(function(value, x, y) {
        var paths = pathFinder.find(matrix, x, y);
        for (var i = 0; i < paths.length; i++) {
            var doesPathHaveZeroSum = hasZeroSum(paths[i]);
            if (doesPathHaveZeroSum === true) {
                result = true;
                return true;
            }
        }
    });
    return result;
}

module.exports = {
    check: check
};