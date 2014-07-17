function Property(address) {
  this.address = address;
  this.units = [];
}

Property.prototype.setManager = function(person) {
  // set this.manager to person
};

Property.prototype.getManager = function(){
  // return this.manager 
};

Property.prototype.addTenant = function(unit, tenat) {
  // add tenat but check to make sure there
  // is a manager first and a tenat has 2 references
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