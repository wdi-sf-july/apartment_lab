var expect = require("chai").expect,
  Person = require("../../src/main").Person;

describe("Person", function(){
  
  describe("has own properties", function(){

    var john = new Person("John Doe", "123-4567");

    it("should have a name", function(){
      expect(john.name).to.eql("John Doe");
    });

    it("should have a contact", function(){
      expect(john.contact).to.eql("123-4567");
    });

  })
});