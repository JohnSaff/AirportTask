const Bag = require("./bag.js")

describe("bag",function (){
    test("bag has weight", function (){
        const bag = new Bag(13)
        expect(bag.weight).toBe(13)
    })
})
