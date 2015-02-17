'use strict';

var Cell = require('./cell');
var Matrix = require('./matrix');

function move(cell, size, paths, isVisitedMatrix, path) {
    var newPath = path.slice(0);
    newPath.push(cell);
    var newIsVisitedMatrix = isVisitedMatrix.clone();
    newIsVisitedMatrix.set(cell.x, cell.y, 1);
    findPath(cell.x, cell.y, size, paths, newIsVisitedMatrix, newPath);
}

function findPath(x, y, size, paths, isVisitedMatrix, path) {
    if (!isVisitedMatrix) {
        isVisitedMatrix = new Matrix(size.rows, size.columns);
        isVisitedMatrix.set(x, y, 1);
    }

    path = path || [];
    if (path.length === 0) {
        path.push(x, y);
    }

    var up = x - 1;
    var down = x + 1;
    var left = y - 1;
    var right = y + 1;

    var canMoveUp = x > 0 && isVisitedMatrix.get(up, y) === 0;
    var canMoveDown = x < size.rows - 1 && isVisitedMatrix.get(down, y) === 0;
    var canMoveLeft = y > 0 && isVisitedMatrix.get(x, left) === 0;
    var canMoveRight = y < size.columns - 1 && isVisitedMatrix.get(x, right) === 0;

    if(!canMoveUp && !canMoveDown && !canMoveLeft && !canMoveRight) {
        paths.push(path);
        return;
    }

    if (canMoveUp) {
        move(new Cell(up, y), size, paths, isVisitedMatrix, path);
    }

    if (canMoveDown) {
        move(new Cell(down, y), size, paths, isVisitedMatrix, path);
    }

    if (canMoveLeft) {
        move(new Cell(x, left), size, paths, isVisitedMatrix, path);
    }

    if (canMoveRight) {
        move(new Cell(x, right), size, paths, isVisitedMatrix, path);
    }
}

function find(matrix, startX, startY) {
    var paths = [];
    var size = matrix.size();

    findPath(startX, startY, size, paths);

    return paths;
}

module.exports = {
    find: find
};