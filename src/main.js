var prompt = require('sync-prompt').prompt,
  Unit = require('./unit.js'),
  Property = require('./property_types/property'),
  Manager = require('./people/manager'),
  Tenat = require('./people/tenat');

/* PART II 

var Person = require('./people/person.js'),
  Duplex = require('./property_types/duplex.js'),
  Building = require('./property_types/building.js'), 
  Town_house = require('./property_types/town_house.js');
*/



var DefaultProperty = new Property("Gotham Tower", "123 Main st.");

var menu = function(message){
  console.log("\n\n\n");
  console.log("***Land Lord v1.0***");

  if (message){ 
    console.log(message);
  }

  console.log('1 : Add Unit');
  console.log('2 : Add Tenat');
  console.log('3 : Show all unrented units');
  console.log('4 : Show tenant contacts');
  console.log('5 : Show total rented sqft');
  console.log('6 : Cha-ching! Show my annual income');
  console.log('q : Quit\n\n');
  console.log('-->');
  return prompt()
};

var start = function() {

  var message = "",
    choice = menu(message);
  while (choice !== 'q') {
    switch (choice) {
      case '1':
        message += 'option 1';
        break
      case '2':
        message += 'option 2';
        break;
      case '3':
        message += 'option 3';
        break;
    }
  }


};