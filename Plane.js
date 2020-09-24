class Plane{
    constructor({model}){
        this.model = model
        this.passengers = []
        this.fuel = 0
        this.bags = []
        this.destination = ""
        this.location = ""
    }
    addBag(bag){
        this.bags.push(bag)
    }
    addPassenger(passenger){
        this.passengers.push(passenger)
        this.bags = this.bags.concat(passenger.bags)
    }
    addFuel(fuel){
        this.fuel = this.fuel + fuel
    }
    setLocation(name){
        this.location = name
    }
    whereTo(name){
        this.destination = name
    }
}

module.exports = Plane
