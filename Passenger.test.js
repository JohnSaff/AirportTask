const Passenger = require("./Passenger.js")
const Bag = require("./bag.js")

describe("Passenger",function (){
    test("has a name", function (){
        const person = new Passenger({name:"john"})
        expect(person.name).toEqual("john")
    })
    test("has bags",function (){
        const person = new Passenger({name: "goeff"})
        const handluggage = new Bag(8)
        const hullluggage = new Bag(25)
        person.addBag(handluggage)
        person.addBag(hullluggage)
        expect(person.bags.length).toBe(2)
    })
    test("we can read the weight of a bag",() =>{
        const poppy = new Passenger({name : "poppy"})
        const rucksac  = new Bag(6)
        poppy.addBag(rucksac)
        expect(poppy.bags[0].weight).toBe(6)
    })
})
