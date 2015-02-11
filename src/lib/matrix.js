'use strict';

function Matrix(numberOfRows, numberOfColumns) {
    this.matrix = [];
    for (var i = 0; i < numberOfRows; i++) {
        this.matrix[i] = [];
        for (var j = 0; j < numberOfColumns; j++) {
            this.matrix[i][j] = 0;
        }
    }
}

Matrix.prototype.set = function (x,y, value) {
    this.matrix[x][y] = value;
};

Matrix.prototype.get = function (x,y) {
    return this.matrix[x][y];
};

Matrix.prototype.size = function () {
    return {
        rows: this.matrix.length,
        columns: this.matrix[0].length
    };
};

module.exports = Matrix;