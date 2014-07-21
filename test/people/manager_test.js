var expect = require("chai").expect,
  app = require("../../src/main"),
  Person = app.Person,
  Manager = app.Manager;

describe("Manager", function() {
  var jane;

  beforeEach(function(){
    jane = new Manager("Jane Doe", "123-4567");
  });

  describe("has own properties", function(){
    it("should include @name", function() {
      expect(jane.name).to.eql("Jane Doe");
    });

    it("should include @contact", function() {
      expect(jane.contact).to.eql("123-4567");
    })
  });

  describe("inheriting from Person", function(){
    it("should still have constructor [Function: Manager]", function() {
      expect(jane.constructor).to.eql(Manager);
    });

    it("should have instanceof Person return true", function() {
      expect(jane instanceof Person).to.eql(true);
    });
  });

  describe("#addProperty", function(){
    it("should add instances of Property", function() {
      var property = new app.Property("123 Gotham Ave");
      jane.addProperty(property)
      expect(jane.properties).to.eql([property]);
    });
  });

  describe("#removeProperty", function(){
    it("should remove instances of Property", function() {
      var property = new app.Property("123 Gotham Ave");
      jane.addProperty(property);
      jane.removeProperty(property);
      expect(jane.properties).to.eql([]);
    });
  });
});