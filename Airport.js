const Plane = require("./Plane.js")

class Airport{
    static airports = []
    constructor({name}){
        this.name = name
        this.planes = []
        this.fuelReserves = 0
        this.constructor.airports.push(this)
    }
    addPlane(plane){
        this.planes.push(plane)
        plane.location = this.name
    }
    losePlane(plane){
        const index = this.planes.indexOf(plane)
        this.planes.splice(index,1)
        const destinationAirport = Airport.airports.find(airport => airport.name === plane.destination)
        destinationAirport.addPlane(plane)
    }
    addFuel(ammount){
        this.fuelReserves = this.fuelReserves +ammount
    }
    refuel(plane,ammount){
        plane.addFuel(ammount)
        this.fuelReserves = this.fuelReserves - ammount
    }
    resetAirportList(){
        Airport.airports = []
    }

}

module.exports = Airport
