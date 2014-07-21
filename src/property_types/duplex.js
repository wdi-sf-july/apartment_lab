var Property = require("./property");

function Duplex(address) {
  // A duplex only has 2 units;
  Property.call(this, address);
}
Duplex.prototype = new Property();
Duplex.prototype.constructor = Duplex;
module.exports = Duplex;