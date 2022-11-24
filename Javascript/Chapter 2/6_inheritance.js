# inheritance example
=====================

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
    super(brand, model) //---------------------------- super is like this, but for above/child class
    this.battery_size = 80
  }

  fuel_up() { //------------------------------------------- overwrite
    return `${this.brand} does not have a fuel tank`;
  }

  charge() { //------------------------------------------- overwrite
    return `${this.brand} is now fully charged`
  }
}

vehicle1 = new ElectricVehicle('Tesla', 'Model 3');
console.log(vehicle1.fuel_up());
console.log(vehicle1.charge());
console.log(vehicle1.drive());

# further reading
=================
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance