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

    if (canMoveUp) {
        console.log('moving up');
        var newUpPath = path.slice(0);
        newUpPath.push(new Cell(up, startY));
        paths.push(newUpPath);
        var newUpIsVisitedMatrix = isVisitedMatrix.clone();
        newUpIsVisitedMatrix.set(up, startY, 1);
        return findPath(up, startY, size, newUpIsVisitedMatrix, newUpPath, paths);
    }

    if (canMoveDown) {
        console.log('moving down');
        var newDownPath = path.slice(0);
        newDownPath.push(new Cell(down, startY));
        paths.push(newDownPath);
        var newDownIsVisitedMatrix = isVisitedMatrix.clone();
        newDownIsVisitedMatrix.set(down, startY, 1);
        return findPath(down, startY, size, newDownIsVisitedMatrix, newDownPath, paths);
    }

    if (canMoveLeft) {
        console.log('moving left');
        var newLeftPath = path.slice(0);
        newLeftPath.push(new Cell(startX, left));
        paths.push(newLeftPath);
        var newLeftIsVisitedMatrix = isVisitedMatrix.clone();
        newLeftIsVisitedMatrix.set(startX, left, 1);
        return findPath(startX, left, size, newLeftIsVisitedMatrix, newLeftPath, paths);
    }

    if (canMoveRight) {
        console.log('moving right');
        var newRightPath = path.slice(0);
        newRightPath.push(new Cell(startX, right));
        paths.push(newRightPath);
        var newRightIsVisitedMatrix = isVisitedMatrix.clone();
        newRightIsVisitedMatrix.set(startX, right, 1);
        return findPath(startX, right, size, newRightIsVisitedMatrix, newRightPath, paths);
    }
}

function find(matrix, startX, startY) {
    var paths = [];
    var size = matrix.size();
    var isVisitedMatrix = new Matrix(size.rows, size.columns);
    var path = [];
    path.push(new Cell(startX, startY));
    paths.push(path);
    isVisitedMatrix.set(startX, startY, 1);

    findPath(startX, startY, size, isVisitedMatrix, path, paths);
    for (var i = 0; i < paths.length; i++) {
        console.log(paths[i]);
    }
    return paths;
}

module.exports = {
    find: find
};