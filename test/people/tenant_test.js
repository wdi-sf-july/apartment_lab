var expect = require("chai").expect,
  app = require("../../src/main"),
  Person = app.Person,
  Tenant = app.Tenant;


describe("Tenant", function() {
  var jane;

  beforeEach(function(){
    jane = new Tenant("Jane Doe", "123-4567");
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
    it("should still have constructor [Function: Tenant]", function() {
      expect(jane.constructor).to.eql(Tenant);
    });

    it("should have instanceof Person return true", function() {
      expect(jane instanceof Person).to.eql(true);
    });
  });

  describe("#addReference", function(){
    it("should add instances of Person", function() {
      var john = new app.Person("john doe", "123-4567");
      jane.addReference(john)
      expect(jane.references).to.eql([john]);
    });
  });

  describe("#removeReference", function(){
    it("should remove instances of Person", function() {
      var john = new app.Person("john doe", "123-4567");
      jane.addReference(john)
      jane.removeReference(john);
      expect(jane.references).to.eql([]);
    });
  });
});