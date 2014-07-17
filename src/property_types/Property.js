function Property(address) {
  this.address = address;
  this.units = [];
}

Property.prototype.addTenant = function(unit, tenat) {
  // add tenat 
};

Property.prototype.removeTenat = function(unit, tenat) {
  // remove tenat
};

Property.prototype.availableUnits = function(){
  // return num of units available
}

Property.prototype.rentedUnits = function(){
  // return rented units
}


module.exports = Property;