# ApartmentRental App
## Working with Relationships and Inheritance

### Description

In this application we have three main types of things we are dealing with.

* `Person`
* `Property`
* `Unit`


#### Person

With `Person` we have two main subtypes:

* `Manager`
* `Tenant`

Both `Manager` and `Tenant` should *inherit* methods from `Person`, and implement any extra behavior they need to play their role in the App.

##### Relationships

* `Manager` has many `properties`
* `Tenant` has a many `references` that are just `Person` instances with contact info. 

#### Property

With `Property` we have three property types `Duplex`, `TownHouse`, and `ApartmentBuilding`. A generic `Property` should always have a `Manager` before `tenants` can move in. All `Tenants` should have `two` references before moving in.

##### Relationships

The following should have the everything a `Property` has and also.

* `Duplex` has only two `Unit`s.
* `TownHouse` has only one `Unit`.
* `ApartmentBuilding` has many `Unit`s.


#### `Unit`

There is only one type of `Unit`.

* A `Unit` belongs to one `Property` and has one `Tenant`.


## Getting Started

### Playing In Console

`Locus` is fine, but let's try to avoid it in this application.

* Open the node REPL and `require('./src/main.js')`

```
$ node
> var app = require('./src/main.js')
```

* Play with a `Person` object.

```
> var Person = app.Person;
> var john = new Person("john doe", "123-4567");
> john.contact
"123-4567"
```
============

###  Play with Other Modules

You can do the same thing to play with `app.Property`, `app.Manager`, `app.Tenant`, `app.ApartmentBuilding`, et cetera.


============

* Next start implementing inheritance for a `manager`


You could do the following:

```
var person = require("./person");

function Manager(name, contact) {
  this.name = name;
  this.contact = contact;
  this.properties = [];
}

// Inheriting
Manager.prototype = new Person();
Manager.prototype.constructor = Manager;

```
But the following makes use of a cool `call` method you can use with functions that avoids a bunch extra work.

```
var person = require("./person");

function Manager(name, contact) {

  // Note here the use of "call"
  //  which will run the method 
  //  with a context.
  Person.call(this, name, contact);
  this.properties = [];
}

// Inheriting
Manager.prototype = new Person();
Manager.prototype.constructor = Manager;

```

* Note you might want to think about writing an `inherits` function as follows:

`src/inherits`

```
// write the following
var inherits = function(Child, Parent) {
  Child.prototype = new Parent();
  Child.prototype.constructor = Child;
};

module.exports = inherits;
```

you can then require the `inherits` module in each file that require inheritance.



## Writing Tests

We will use this as part of review opportunity for testing, so try to write as some tests for this project.

There are some `test` stubs for `test/people/`,  `test/property_types/`, and `test/unit.js`. To run these tests run the following in terminal.

* `mocha test/` to run the files in the `test/folder`, i.e. `unit_test.js` 
* `mocha test/people/` to test the `people` subfolder
* `mocha test/property_types/` to test the `property_types` subfolder


