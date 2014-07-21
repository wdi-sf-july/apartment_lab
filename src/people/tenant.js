var Person = require("./person.js");



function Tenant(name, contact) {
  // set this.name, and contact
  Person.call(this, name, contact);
  this.references = [];
};

Tenant.prototype = new Person();
Tenant.prototype.constructor = Tenant;

Tenant.prototype.addReference = function(reference){
  // add reference to references
  if ( reference instanceof Person) {
    this.references.push(reference);
  } else {
    console.error("Uh-oh, unable to add reference:", reference, "to", this);
  }
};

Tenant.prototype.removeReference = function(reference) {
  var indexOfReference = this.references.indexOf(reference);
  if(indexOfReference !== -1) {
   this.references.splice(indexOfReference, 1);
  } else {
    console.error("Failed to remove reference:", reference);
  }

};

module.exports = Tenant;
