var person = require("./person");

function Manager(name, contact) {
  // set name and contact
  
  this.properties = [];
  Manager.all.push(this);
}

Manager.all = [];

Manager.prototype.addProperty = function(property) {
  // add property from properties
};

Manager.prototype.removeProperty = function(property) {
  // remove properties
};