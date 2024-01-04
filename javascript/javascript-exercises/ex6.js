const { fa } = require("@faker-js/faker");

function iseven(number){
    return number%2 == 0;

}

function oddNumber(arr){
    for(let num in arr){
        if(!iseven(num))console.log(num);
    }
}

function checkExists(arr,number){

    for(let num in arr){
        if(num == number)return true;
    }
    return false
}

const calculator={
    add:function(num1,num2){
        return num1+num2;
    },
    subtract:function(num1,num2){
        return num1-num2;
    }
}

const increaseByNameLength = (money, name) =>  name.length * 100;
const makeRegal = (name) => "His Royal Highness, " + name;

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}


console.log(oddNumber([1,2,3,4,5,6,7,8,9]));

console.log(checkExists([1,2,3,4,5,6,7,8,9],3));

const result1 = calculator.add(20, 1)

const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"



