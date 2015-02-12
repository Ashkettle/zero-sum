'use strict';

var Cell = require('../lib/cell');

describe('Cell', function () {

    it('should be able to create a new cell with given co-ordinates', function () {
        var cell = new Cell(2,3);
        expect(cell).toBeDefined();
    });

});