const person = {
    hungry: true,
  
    feed: function () {
      if (this.hungry) {
        this.hungry = false;
        alert('Im no longer hungry!')
      }
    }
  }  
  
  person.feed() //should alert "I'm no longer hungry"
  //-----------------------------------------------------------------------------
  const pump = function (amount) {
    this.liters += amount;
    console.log('You put ' + this.amount + ' liters in ' + this.name);
  };
  
  const garage = {
    car1: {
      name: 'Audi',
      liters: 3,
      fillTank: pump
    },
    car2: {
      name: 'Mercedes',
      liters: 1,
      fillTank: pump
    }
  };
  
  garage.car1.fillTank(2);
  console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
  garage.car2.fillTank(30);
  console.log('Mercedes should have 31 liters: ', garage.car2.liters);
  //-----------------------------------------------------------------------------
  const pumpFuel = function (plane) {
    plane.fuel += 1;
  };
  
  const airplane = {
    fly: function () {
      if (this.fuel < 2) {
        return 'on the ground!';
      }
      else {
        return 'flying!';
      }
    }
  };
  
  console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('Take off! ' + airplane.fly());
  //------------------------------------------------------------------
const tipJar = {
    coinCount: 20,
    tip: function () {
      this.coinCount += 1;
    },
    stealCoins:function(number){
        this.coinCount -= number;
    }
  };
  
  tipJar.tip();
  console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(3);
  console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(10);
  console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);
//-----------------------------------------------------------------
const revealSecret = function () {
    return secret;
  };
  
  const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    alert(person.name + " said: "+ result);
  };
  
  const avi = {
    name: "Avi",
    secret: "Im scared of snakes!"
  };
  
  const narkis = {
    name: "Narkis",
    secret: "I dont have secrets because I'm zen like that."
  };
  
  shoutIt(avi, revealSecret);
  shoutIt(narkis, revealSecret);
//---------------------------------------------------------------
const coffeeShop = {
    beans: 40,
    money: 100,
  
    drinkRequirements: {
      latte: { beanRequirement: 10, price: 5 },
      americano: { beanRequirement: 5, price: 3 },
      doubleShot: { beanRequirement: 15, price: 7 },
      frenchPress: { beanRequirement: 12, price: 6 }
    },
  
    makeDrink: function(drinkType) {
      if (!(drinkType in this.drinkRequirements)) {
        console.log(`Sorry, we don't make ${drinkType}`);
        return;
      }
  
      const requirements = this.drinkRequirements[drinkType];
      const requiredBeans = requirements.beanRequirement;
  
      if (requiredBeans > this.beans) {
        console.log("Sorry, we're all out of beans!");
        return;
      }
  
      this.beans -= requiredBeans;
      console.log(`Enjoy your ${drinkType}!`);
    },
  
    buyBeans: function(numBeans) {
      // You decide how much the beans cost
      const beanCost = 1; // Adjust the cost as needed
      const totalCost = numBeans * beanCost;
  
      if (totalCost > this.money) {
        console.log("Not enough money to buy beans!");
        return;
      }
  
      this.money -= totalCost;
      this.beans += numBeans;
      console.log(`Bought ${numBeans} beans for $${totalCost}.`);
    },
  
    buyDrink: function(drinkType) {
      if (!(drinkType in this.drinkRequirements)) {
        console.log(`Sorry, we don't make ${drinkType}`);
        return;
      }
  
      const requirements = this.drinkRequirements[drinkType];
      const drinkCost = requirements.price;
  
      if (drinkCost > this.money) {
        console.log(`Not enough money to buy a ${drinkType}`);
        return;
      }
  
      this.money -= drinkCost;
      this.makeDrink(drinkType);
    }
};
  
coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); // should log "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); // should log "Sorry, we're all out of beans"

coffeeShop.buyBeans(20);
coffeeShop.buyDrink("latte"); // should log "Enjoy your latte!"
  