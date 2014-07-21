var Property = require("./property");

function TownHouse(address){
  // only has one unit per address
  Property.call(this, address)
};

TownHouse.prototype = new Property();
TownHouse.prototype.constructor = TownHouse;

TownHouse.prototype.available = function(){
  // a tenant it should not be available
  return this.availableUnits().length === 1;
};

module.exports = TownHouse;
