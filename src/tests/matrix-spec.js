'use strict';

var Matrix = require('../lib/matrix');

describe('Matrix', function () {

    var matrix;
    beforeEach(function () {
        matrix = new Matrix(3,5);
    });

    it('should be able to create a 2d matrix of given size', function () {
        var size = matrix.size();

        expect(size.rows).toBe(3);
        expect(size.columns).toBe(5);
    });

    it('should initialize all elements to zero', function () {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 5; j++) {
                expect(matrix.get(i, j)).toBe(0);
            }
        }
    });

    it('should be able to set and get value of a given element', function () {
        matrix.set(1, 1, 100);
        expect(matrix.get(1, 1)).toBe(100);
    });
});

