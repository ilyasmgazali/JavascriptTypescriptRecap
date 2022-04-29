class Vehicle {
    constructor(brand, model) {
      this.brand = brand
      this.model = model
    }
  
    fuel_up() {
      return `Your ${this.model}'s Gas tank is now full`;
    }
  
    drive() {
      return `The ${this.model} is now driving`;
    }
  }
  
  class ElectricVehicle extends Vehicle {
    constructor(brand, model) {
      super(brand, model) //---------------------------- super is like this, but for above
      this.battery_size = 80
    }
  
    fuel_up() { //------------------------------------------- overwrite
      return `${this.brand} does not have a fuel tank`;
    }
  
    charge() { //------------------------------------------- overwrite
      return `${this.brand} is now fully charged`
    }
  }
var one = new ElectricVehicle("x","y");
console.log(one.battery_size);