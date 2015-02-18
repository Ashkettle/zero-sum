'use strict';

var zeroSumChecker = require('../lib/zero-sum-checker');
var Matrix = require('../lib/matrix');

describe('when checking for zero sum', function () {

    it('should find if a matrix has zero sum', function () {
        var matrix = new Matrix(2, 2);
        matrix.set(0,0,1);
        matrix.set(0,1,2);
        matrix.set(1,1,3);
        matrix.set(1,0,10);

        var result = zeroSumChecker.check(matrix);
        expect(result).toBe(true);
    });

    it('should find if a matrix does not have a zero sum', function () {
        var matrix = new Matrix(2, 2);
        matrix.set(0,0,1);
        matrix.set(0,1,2);
        matrix.set(1,1,21);
        matrix.set(1,0,10);

        var result = zeroSumChecker.check(matrix);
        expect(result).toBe(false);
    });
});