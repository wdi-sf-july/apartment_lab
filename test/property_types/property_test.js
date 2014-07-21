var expect = require("chai").expect,
    app = require("../../src/main"),
    Property = app.Property,
    Unit = app.Unit,
    Person = app.Person,
    Manager = app.Manager,
    Tenant = app.Tenant;

describe("Property", function(){
    var manager, 
      tenant, 
      contactOne, 
      contactTwo,
      myProperty,
      myUnit;

    beforeEach(function(){
      manager = new Manager("Jane Doe", "123-4567"), 
      tenant = new Tenant("Jackie Adams", "123-7654"),  
      contactOne = new Person("Anna Adams", "765-4321"), 
      contactTwo = new Person("Devin Daniels", "765-1234")
      myProperty = new Property("123 Gotham Ave");
      myUnit = new Unit("806", myProperty, 400, 2000);
    });
    describe("has own properties", function(){
      it("should include @address", function(){
        expect(myProperty.address).to.eql("123 Gotham Ave");
      });

      it("should include @units", function(){
        expect(myProperty.units).to.eql([]);
      });
    });
    describe("#setManager", function(){
      it("should set @manager for a manager", function(){
        myProperty.setManager(manager);
        expect(myProperty.manager).to.eql(manager);
      });
    });

    describe("#getManger", function(){
      it("should return the manager", function(){
        myProperty.setManager(manager);
        expect(myProperty.getManager()).to.eql(manager);
      });
    });

    describe("#addTenant", function(){
      it("should not add a tenant with less than two references", function(){
        myProperty.units = [myUnit];
        myProperty.setManager(manager);
        myProperty.addTenant(myUnit, tenant);
        expect(myUnit.available()).to.eql(true);
      });

      it("should not add a tenant if there is no manager", function(){
        myProperty.units = [myUnit];
        tenant.addReference(contactOne);
        tenant.addReference(contactTwo);
        myProperty.addTenant(myUnit, tenant);
        expect(myUnit.available()).to.eql(true);
      });

      it("should not add a tenant to unit not included in @units", function(){
        myProperty.setManager(manager);
        tenant.addReference(contactOne);
        tenant.addReference(contactTwo);
        myProperty.addTenant(myUnit, tenant);
        expect(myUnit.available()).to.eql(true);
      });


      it("should not add a tenant to unit not available", function(){
        myProperty.units = [myUnit];
        myProperty.setManager(manager);
        tenantTwo =  new Tenant("Ruby Ra", "122-3344");
        myUnit.tenant = tenantTwo;
        tenant.addReference(contactOne);
        tenant.addReference(contactTwo);
        myProperty.addTenant(myUnit, tenant);
        expect(myUnit.tenant).to.eql(tenantTwo);
      });


      it("should add a tenant to a valid available unit", function(){
        myProperty.units = [myUnit];
        myProperty.setManager(manager);
        tenant.addReference(contactOne);
        tenant.addReference(contactTwo);
        myProperty.addTenant(myUnit, tenant);
        expect(myUnit.tenant).to.eql(tenant);
      });

    });

   describe("#removeTenant", function(){
      beforeEach(function(){
        myProperty.units = [myUnit];
        myProperty.setManager(manager);
        tenant.addReference(contactOne);
        tenant.addReference(contactTwo);
        myProperty.addTenant(myUnit, tenant);
      });


      it("should not remove a tenant if there is no manager", function(){
        myProperty.manager = null;
        myProperty.removeTenant(myUnit, tenant);
        expect(myUnit.available()).to.eql(false);
      });

      it("should not remove a tenant from a unit not included in @units", function(){
        myProperty.units = [];
        myProperty.removeTenant(myUnit, tenant);
        expect(myUnit.available()).to.eql(false);
      });

      it("should only remove a tenant from their own unit", function(){
        var tenantTwo =  new Tenant("Ruby Ra", "122-3344");
        myProperty.removeTenant(myUnit, tenantTwo);
        expect(myUnit.available()).to.eql(false);
      });

      it("should remove a tenant to from a valid unit", function(){
        myProperty.removeTenant(myUnit, tenant);
        expect(myUnit.tenant).to.eql(null);
      });

    });





});