const Passenger = require("./Passenger.js")
const Bag = require("./bag.js")
const Plane = require("./Plane.js")
const Airport = require("./Airport.js")
const { getVersion } = require("jest")

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
    test("planes can leave one airport for another", function (){
        temp = new Airport({name:"name"})
        temp.resetAirportList()
        const LHR = new Airport({name:"LHR"})
        const JFK = new Airport({name:"JFK"})
        const plane1 = new Plane({model:"747"})
        plane1.whereTo("JFK")
        LHR.addPlane(plane1)
        LHR.losePlane(plane1)
        expect(LHR.planes.length).toEqual(0)
        expect(JFK.planes[0]).toEqual(plane1)
    })
    test("another plane transfer test, with multiple journeys", function (){
        temp = new Airport({name:"temp"})
        temp.resetAirportList()
        const LHR = new Airport({name:"LHR"})
        const JFK = new Airport({name:"JFK"})
        const plane1 = new Plane({model:"747"})
        const plane2 = new Plane({model:"A380"})
        const LAX = new Airport({name:"LAX"})
        plane1.whereTo("JFK")
        plane2.whereTo("LHR")
        LAX.addPlane(plane1)
        LAX.addPlane(plane2)
        LAX.losePlane(plane1)
        LAX.losePlane(plane2)
        expect(JFK.planes[0]).toEqual(plane1)
        expect(LHR.planes[0]).toEqual(plane2)
        expect(LAX.planes.length).toEqual(0)
    })
    test("get airport data from callback", function (done){
        const LHR = new Airport({name:"LHR"})

        LHR.getInfo((err,info)=>{
            expect(err).toBeNull()
            expect(info.city).toEqual("London")
            console.log(info)
            done()
        })


    })
    test("same as the last but a promise", function (){
        const LHR = new Airport({name:"LHR"})
        return LHR.getInfoPromise().then(info =>{
            expect(info.city).toEqual('London')
        })
        .catch(err =>{
            expect(err).toBeNull
        })
    })

    test("once more but with an await", async function() {
        const LHR = new  Airport({name:"LHR"})
        const airport = await LHR.getInfoAwait()
        expect(airport.city).toEqual("London")
    })
})
