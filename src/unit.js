function Unit (number, building, sqft, rent) {
  // set params above using this
  this.tenant = null;
}

Unit.prototype.available = function(){
  return !(this.tenant);
}



