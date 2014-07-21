var Property = require("./property.js");

function ApartmentBuilding(name, address) {
  // A building can have many many units 
  this.name = name;
  Property.call(this, address);
}

ApartmentBuilding.prototype = new Property();
ApartmentBuilding.prototype.constructor = ApartmentBuilding;

module.exports = ApartmentBuilding;