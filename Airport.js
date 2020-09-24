const Plane = require("./Plane.js")

class Airport{
    constructor({name}){
        this.name = name
        this.planes = []
        this.fuelReserves = 0
    }
    addPlane(plane){
        this.planes.push(plane)
    }
    addFuel(ammount){
        this.fuelReserves = this.fuelReserves +ammount
    }
    refuel(plane,ammount){
        plane.addFuel(ammount)
        this.fuelReserves = this.fuelReserves - ammount
    }

}

module.exports = Airport
