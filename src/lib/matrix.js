'use strict';

function Matrix(numberOfRows, numberOfColumns) {
    this.numberOfRows = numberOfRows;
    this.numberOfColumns = numberOfColumns;
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

Matrix.prototype.clone = function () {
    var newMatrix = new Matrix(this.numberOfRows, this.numberOfColumns);
    for (var i = 0; i < this.numberOfRows; i++) {
        for (var j = 0; j < this.numberOfColumns; j++) {
            newMatrix.set(i, j, this.get(i, j));
        }
    }
    return newMatrix;
};

module.exports = Matrix;