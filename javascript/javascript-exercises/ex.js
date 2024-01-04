
var validator = require('validator');

//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
const v=validator.isEmail('shoobert@dylan');
console.log(v);

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
const v1=validator.isMobilePhone("786-329-9958",'en-US')
console.log(v1);


//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"
const v2=validator.blacklist(text,blacklist);
console.log(v2)

//-------------------------------------------------------------------------------
//EX 2
const { faker } = require('@faker-js/faker');

function makeHuman(numberOfPeople) {
    for (let i = 0; i < numberOfPeople; i++){
        const person= {
            username: faker.internet.userName(),
            avatar: faker.image.avatar()
          };
          console.log(person)

    }
  

}

console.log(makeHuman(3))

//-------------------------------------------------------------------------------
//EX 3
