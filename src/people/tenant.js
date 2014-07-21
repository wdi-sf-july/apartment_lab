var Person = require("./person.js");

function Tenant(name, contact) {
  // set this.name, and contact
  this.references = [];
};

Tenant.prototype.addReference = function(reference){
  // add reference to references
};

module.exports = Tenant;
