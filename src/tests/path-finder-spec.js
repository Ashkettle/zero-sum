'use strict';

var pathFinder = require('../lib/path-finder');
var Matrix = require('../lib/matrix');

describe('path finder', function () {

    it('should find all paths for one cell', function () {
        var matrix = new Matrix(1, 1);
        var paths = pathFinder.find(matrix, 0, 0);
        expect(paths.length).toBe(1);
    });

    xit('should find all paths for 2d matrix', function () {
        var matrix = new Matrix(2, 2);
        var paths = pathFinder.find(matrix, 0, 0);
        expect(paths.length).toBe(2);
    });

});

