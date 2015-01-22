var Dunce = require('../lib/core.js');

describe('Entity', function() {
  'use strict';
  var dunce;
 

  beforeEach(function() {

    dunce = new Dunce.Entity();
  });

  it('should generate a unique id', function() {
    var dunce2 = new Dunce.Entity();

    expect(dunce.id).not.toBe(dunce2.id);
  });
  it('should allow components to be added', function() {
  	var component = {
  		name: 'testComponent',
  		x: 3,
  		y: 4
  	};
    dunce.addComponent(component);
    expect(dunce.components['testComponent'].x).toBe(3);
    expect(dunce.components['testComponent'].y).toBe(4);
  });

    it('should allow components to be removed', function() {
  	var component = {
  		name: 'testComponent',
  		x: 3,
  		y: 4
  	};
    dunce.addComponent(component);
    dunce.removeComponent('testComponent');
    expect(dunce.components['testComponent']).toBe(undefined);
  });

});
