const Passenger = require("./Passenger.js")
const Bag = require("./bag.js")
const Plane = require("./Plane.js")
const Airport = require("./Airport.js")

describe("airport", function () {
    test("airport exists",function(){
        const jfk = new Airport({name:"JFK"})
        expect(jfk.name).toEqual("JFK")
    })
    test("airport has planes",function (){
        const jfk = new Airport({name:"JFK"})
        const plane1 = new Plane({name:"747"})
        const plane2 = new Plane({name:"A380"})
        jfk.addPlane(plane1)
        jfk.addPlane(plane2)
        expect(jfk.planes.length).toEqual(2)
    })
    test("airport can have fuel", function(){
        const jfk = new Airport({name:"JFK"})
        jfk.addFuel(100)
        expect(jfk.fuelReserves).toEqual(100)
    })
    test("airport can refuel planes", function () {
        const plane = new Plane({model:"grob tutor"})
        const jfk = new Airport({name:"JFK"})
        jfk.addFuel(1000)
        jfk.refuel(plane,500)
        expect(jfk.fuelReserves).toEqual(500)
        expect(plane.fuel).toEqual(500)
    })
})
