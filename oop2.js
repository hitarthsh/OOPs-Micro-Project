class MobileShop {
  constructor() {
    this.mobiles = [];
  }

  addmobile(mobile) {
    this.mobiles.push(mobile);
  }

  listAllMobiles() {
    this.mobiles.forEach(function (mb) {
      console.log(
        `Brand: ${mb.brand}, Model: ${mb.model}, Price: ${mb.price}, Color: ${mb.color}`
      );
    });
  }
}

class Mobile {
  constructor(brand, model, price, color) {
    this.id = Math.floor(Math.random() * 10000);
    this.model = model;
    this.color = color;
    this.brand = brand;
    this.price = price;
    this.sim = [];
  }

  getmobileinfo() {
    return `Brand: ${this.brand}, Model: ${this.model},Price: ${this.price}, Color: ${this.color}`;
  }
  insertSim(sim) {
    if (this.sim.length === 2) {
      console.log("Sim slot is full");
    }
    this.sim.push(sim);
  }
}

class Sim {
  constructor(brand, balance) {
    this.brand = brand;
    this.balance = balance;
  }
  addBalance(balance) {
    if (balance < 0) {
      console.log("To add balance give amount greater than 0");
      return;
    }
    this.balance += balance;
  }
}

let myMobileShop = new MobileShop();
myMobileShop.addmobile = function (mobile) {
  this.mobiles.push(mobile);
};
myMobileShop.removemobile = function (id) {
  this.mobiles = this.mobiles.filter((mobile) => mobile.id !== id);
};
const mobile1 = new Mobile("Apple", "iPhone 14", 1000, "Black");
const mobile2 = new Mobile("Samsung", "Galaxy S21", 800, "Blue");

let Jio = new Sim("Jio", 500);

mobile1.insertSim(Jio);
mobile2.insertSim(Jio);
myMobileShop.addmobile(mobile1);
myMobileShop.addmobile(mobile2);
