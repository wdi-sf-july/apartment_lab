function Unit (number, building, sqft, rent) {
  // set params above using this
  this.number = number;
  this.building = building;
  this.sqft = sqft;
  this.rent = rent
  // default unit to available
  this.tenant = null;
}

Unit.prototype.available = function(){
  return !(this.tenant);
}

// export the module
module.exports = Unit;

