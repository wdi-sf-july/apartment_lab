var Person = require("./person");

function Manager(name, contact) {
  // set name and contact
  
  this.properties = [];
}

Manager.prototype.addProperty = function(property) {
  // add property from properties
};

Manager.prototype.removeProperty = function(property) {
  // remove properties
};

module.exports = Manager;