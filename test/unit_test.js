var expect = require("chai").expect,
  app = require("../src/main"),
  Property = app.Property,
  Unit = app.Unit,
  Tenant = app.Tenant;

describe("Unit", function(){

  var myUnit, myBuilding;
  beforeEach(function(){
    myBuilding = new Property("123 Gotham Ave");
    myUnit = new Unit("806", myBuilding, 400, 2000);
  });

  describe("has own properties", function(){

    it("should include @number", function(){
      expect(myUnit.number).to.eql("806");
    });

    it("should include @building", function(){
      expect(myUnit.building).to.eql(myBuilding);
    });

    it("should include @sqft", function(){
      expect(myUnit.sqft).to.eql(400);
    });

    it("should include @rent", function(){
      expect(myUnit.rent).to.eql(2000);
    });

    it("should include @tenant", function(){
      expect(myUnit.tenant).to.eql(null);
    });
  });

  describe("#available", function(){
    it("should return true if there is no tenant", function(){
      expect(myUnit.available()).to.eql(true);
    });

    it("should return false if there is a tenant", function(){
      myUnit.tenant = new Tenant("John Doe", "123-4567");
      expect(myUnit.available()).to.eql(false);
    });
  });
});