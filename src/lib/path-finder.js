'use strict';

var Cell = require('./cell');
var Matrix = require('./matrix');

function findPath(startX, startY, size, isVisitedMatrix, path, paths) {
    var up = startX - 1;
    var down = startX + 1;
    var left = startY - 1;
    var right = startY + 1;

    var canMoveUp = startX > 0 && isVisitedMatrix.get(up, startY) === 0;
    var canMoveDown = startX < size.rows - 1 && isVisitedMatrix.get(down, startY) === 0;
    var canMoveLeft = startY > 0 && isVisitedMatrix.get(startX, left) === 0;
    var canMoveRight = startY < size.columns - 1 && isVisitedMatrix.get(startX, right) === 0;

    if(!canMoveUp && !canMoveDown && !canMoveLeft && !canMoveRight) {
        paths.push(path);
        return;
    }

    if (canMoveUp) {
        var newUpPath = path.slice(0);
        newUpPath.push(new Cell(up, startY));
        var newUpIsVisitedMatrix = isVisitedMatrix.clone();
        newUpIsVisitedMatrix.set(up, startY, 1);
        findPath(up, startY, size, newUpIsVisitedMatrix, newUpPath, paths);
    }

    if (canMoveDown) {
        var newDownPath = path.slice(0);
        newDownPath.push(new Cell(down, startY));
        var newDownIsVisitedMatrix = isVisitedMatrix.clone();
        newDownIsVisitedMatrix.set(down, startY, 1);
        findPath(down, startY, size, newDownIsVisitedMatrix, newDownPath, paths);
    }

    if (canMoveLeft) {
        var newLeftPath = path.slice(0);
        newLeftPath.push(new Cell(startX, left));
        var newLeftIsVisitedMatrix = isVisitedMatrix.clone();
        newLeftIsVisitedMatrix.set(startX, left, 1);
        findPath(startX, left, size, newLeftIsVisitedMatrix, newLeftPath, paths);
    }

    if (canMoveRight) {
        var newRightPath = path.slice(0);
        newRightPath.push(new Cell(startX, right));
        var newRightIsVisitedMatrix = isVisitedMatrix.clone();
        newRightIsVisitedMatrix.set(startX, right, 1);
        findPath(startX, right, size, newRightIsVisitedMatrix, newRightPath, paths);
    }
}

function find(matrix, startX, startY) {
    var paths = [];
    var size = matrix.size();
    var isVisitedMatrix = new Matrix(size.rows, size.columns);
    var path = [];
    path.push(new Cell(startX, startY));
    isVisitedMatrix.set(startX, startY, 1);

    findPath(startX, startY, size, isVisitedMatrix, path, paths);
    return paths;
}

module.exports = {
    find: find
};