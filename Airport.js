const fs = require('fs')
const path = require('path')
const {readFile} = require("fs/promises")

const Plane = require("./Plane.js")
const { resolveSrv } = require('dns')

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
    getInfo(onInfo){
        const airportName = this.name
        const locationOfFile = path.join(__dirname,"airports1.json")
        const callback = function (err,buffer){
            const data = JSON.parse(String(buffer))
            const arrayOfAirports = Object.keys(data).map(key => {
                return data[key]
            })
            const info = arrayOfAirports.find(airport => airport.iata === airportName)
            onInfo(err,info)
        }
        fs.readFile(locationOfFile,callback)
    }
    getInfoPromise(){
        return new Promise((resolve,reject) =>{
            fs.readFile('./airports1.json',(err,data)=>{
                if (err) return reject(err)

                const airports = JSON.parse(String(data))
                const [airport] = Object.keys(airports).
                    filter(airportCode=> airports[airportCode].iata ===this.name).
                    map(airportCode => airports[airportCode])
                resolve(airport)
            })
        })

    }
    getInfoAwait(){
        const airportName = this.name
        return new Promise(function(resolve,reject){
            fs.readFile('./airports1.json',(err,data)=>{
                if (err) return reject(err)

                const airports = JSON.parse(String(data))
                const [airport] = Object.keys(airports).
                    filter(airportCode=> airports[airportCode].iata ===airportName).
                    map(airportCode => airports[airportCode])
                resolve(airport)
            })
        })
    }

}

module.exports = Airport
