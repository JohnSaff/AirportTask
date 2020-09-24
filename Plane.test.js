const Passenger = require("./Passenger.js")
const Bag = require("./bag.js")
const Plane = require("./Plane.js")

describe("Plane",function (){
    test("has a model", function (){
        const plane = new Plane({model: "Airbus A380"})
        expect(plane.model).toEqual("Airbus A380")
    })
    test("has passengers", function (){
        const passenger = new Passenger({name: "Cornelius" })
        const plane = new Plane({model: "Airbus A380"})
        plane.addPassenger(passenger)
        expect(plane.passengers[0].name).toEqual("Cornelius")
    })
    test("can add fuel",function(){
        const plane = new Plane({model: "Airbus A380"})
        plane.addFuel(500)
        expect(plane.fuel).toEqual(500)
    })
    test("can add bags seperate",function(){
        const plane = new Plane({model: "Airbus A380"})
        const luggage = new Bag(30)
        const moreLuggage = new Bag(50)
        plane.addBag(luggage)
        plane.addBag(moreLuggage)
        expect(plane.bags.length).toEqual(2)
    })
    test("passengers come with bags",function (){
        const plane = new Plane({model: "Airbus A380"})
        const satchel = new Bag(5)
        const dave = new Passenger({name : "dave"})
        dave.addBag(satchel)
        plane.addPassenger(dave)
        expect(plane.bags[0].weight).toEqual(5)
    })
    test("destination",function(){
        const plane = new Plane({model:"A380"})
        plane.whereTo("New York")
        expect(plane.destination).toEqual("New York")
    })
    test("has location", function () {
        const plane = new Plane({model:'747'})
        plane.setLocation("JFK")
        expect(plane.location).toEqual("JFK")
    })

})
