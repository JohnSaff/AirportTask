class Passenger{
    constructor({name}){
        this.name = name
        this.bags = []
    }
    addBag(bag){
        this.bags.push(bag)
    }
}

module.exports = Passenger
