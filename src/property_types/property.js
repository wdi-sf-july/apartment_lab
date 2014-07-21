
function Property(address) {
  this.address = address;
  this.units = [];
}

Property.prototype.setManager = function(person) {
  // set this.manager to person

  if(person.constructor.name === "Manager"){
    this.manager = person;
  }

  return this;
};

Property.prototype.getManager = function(){
  // return this.manager 
  return this.manager;
};

Property.prototype.addTenant = function(unit, tenant) {
  // add tenant but check to make sure there
  // is a manager first and a tenant has 2 references
  var validUnit = this.units.indexOf(unit) !== -1 && unit.available();
  var validTenant = tenant.references.length >= 2 && tenant.constructor.name === "Tenant";

  if(this.manager && validUnit && validTenant){
    unit.tenant = tenant;
  }
};

Property.prototype.removeTenant = function(unit, tenant) {
  // remove tenant

  var validUnit = this.units.indexOf(unit) !== -1;
  var validTenant = unit.tenant === tenant;
  if(this.manager && validUnit && validTenant){
    unit.tenant = null;
  }
};

Property.prototype.availableUnits = function(){
  // return units available
  return this.units.filter(function(unit){
    return unit.available();
  })
}

Property.prototype.rentedUnits = function(){
  // return rented units
  return this.units.filter(function(unit){
    return !unit.available();
  })
}


module.exports = Property;
