var Person = require("./person");
var Property = require("../property_types/property")


function Manager(name, contact) {
  // set name and contact
  Person.call(this, name, contact);
  this.properties = [];
}

Manager.prototype = new Person();
Manager.prototype.constructor = Manager;

Manager.prototype.addProperty = function(property) {
  // check if property is an INSTANCEOF a PROPERTY
  if (property instanceof Property) {
    this.properties.push(property);
  } else {
    console.error("Failed to add property:", property);
  }

  return this;
};

Manager.prototype.removeProperty = function(property) {
  // remove properties
  var indexOfProperty = this.properties.indexOf(property);
  if(indexOfProperty !== -1) {
   this.properties.splice(indexOfProperty, 1);
  } else {
    console.error("Failed to remove property:", property);
  }

  return this;
};

module.exports = Manager;