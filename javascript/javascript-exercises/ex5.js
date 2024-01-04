//-----------------------------------------------------------------------------------------------------------
const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles")
}

console.log("Damn, you see this gal? She ran " + distance + " miles") 

// run -> global | distance -> local to the if statment | i local to the for loop 
//will console log running 8 times then Finished running 8 miles
//will throw exception in line 12 becuse distance varible is being loged outside of its scope

//---------------------------------------------------------------------------------------------------------------

if (13 == "space") {
    let cowSound = "moo"
}
else {
    console.log("Cow says " + cowSound)
}
//cowSound -> local for first block of if statment
// will throw an error at line 24 becuse cowsound varible is beung loged outside of its scope 
//----------------------------------------------------------------------------------------------------------------

const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder)
    }

    console.log("Finished serving all the orders: " + orders)
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)
// serveOrders -> global function | orders -> local for the serveOrders function | order -> local for the for loop 
// specialOrder -> local for the for loop | allOrders -> global 
//there is no exceptions
//Served a special fish 
//Served a special lettuce plate 
//...
// Finished serving all the orders: "fish", "lettuce plate", "curious cheese"
//---------------------------------------------------------------------------------------------------------------

const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot)
}

plant()
//pot -> global | getSeed -> global function | plant -> global function 
//seed -> local for the getSeed function
//throws an error at line 58 becuse seed variube being loged outside of its scope
//----------------------------------------------------------------------------------------

const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true
        }
    }
    return found
}

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}
//doesUserExist -> global function | name -> loacl to the doesUserExist function | users -> local to the function | ulocal to the for loop 
//found -> local to the if statment | userExists -> global 
//throws an error at line 74 becuse found varible is being accesed outside of its scope 
//---------------------------------------------------------------------------------------------------------------------

const isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}
//isEnough -> global | makeEnough -> global function | i -> local for the for loop | 
// console log "Finally, sheesh" 
//there is no errors 


