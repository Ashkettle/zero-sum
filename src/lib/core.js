var Dunce = function(){
'use strict';


};


Dunce.Entity = function Entity(){
    'use strict';
    //Generate an Id.  GUIDs always work.
    var _id;
    var guid = function() {
        function s4() {
         return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
          }
          return function() {
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                   s4() + '-' + s4() + s4() + s4();
          };
    };
    _id = guid();
    this.id = _id;
    this._name = 'anonymous';  //The Entity can be named for debugging purposes

    // The component data will live in this object
    this.components = {};
    return this;
};

Dunce.Entity.prototype.addComponent = function( component ){
  'use strict';
    this.components[component.name] = component;
    return this;
};

Dunce.Entity.prototype.removeComponent = function( componentName ){
  'use strict';
    delete this.components[componentName];
    return this;
};

module.exports = Dunce;