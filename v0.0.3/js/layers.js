var d2mult = ExpantaNum(1)
var d3mult = ExpantaNum(1)
var d4mult = ExpantaNum(1)
var d5mult = ExpantaNum(1)
var d6mult = ExpantaNum(1)
var d7mult = ExpantaNum(1)
var d8mult = ExpantaNum(1)
addLayer("o", {
    name: "ordinal", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "O", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new ExpantaNum(10),
    }},
    color: "#4BDC13",
    requires: new ExpantaNum(10), // Can be a function that takes requirement increases into account
    resource: "[占位符]", // Name of prestige currency
    baseResource: "序数点", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new ExpantaNum(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new ExpantaNum(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
    ],
    layerShown(){return true},
    buyables: {
        11: {
            title:"序数维度O<sub>1</sub>",
            cost(x) {
                var sl1 = ExpantaNum(x).div(10).floor()
                return ExpantaNum(10).times(ExpantaNum(10).pow(sl1))
            },
            display() {
                var display11 = "数量："
                display11 += getBuyableAmount("o",11)
                display11 += "<br>价格："
                display11 += this.cost()
                return display11
            },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost()),
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            buyMax() {
                while(true)
                {
                    if(canAfford())
                    {
                        this.buy()
                    }
                    else
                    {
                        break
                    }
                }
            },
        },
        12: {
            title:"序数维度O<sub>2</sub>",
            cost(x) {
                var sl2 = ExpantaNum(x).div(10).floor()
                return ExpantaNum(100).times(ExpantaNum(100).pow(sl2))
            },
            effect(x) {
                var mult2 = x.mul(ExpantaNum(1.5).pow(x.div(10).floor())).mul(d3mult)
                setInterval(d2mult = d2mult.add(ExpantaNum(0.01).mul(mult2).times(ExpantaNum(2.5).pow(getBuyableAmount("o",21)))),10);
            },
            display() {
                var display12 = "数量："
                display12 += getBuyableAmount("o",12)
                display12 += "<br>价格："
                display12 += this.cost()
                return display12
            },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost()),
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            buyMax() {
                while(true)
                {
                    if(canAfford())
                    {
                        this.buy()
                    }
                    else
                    {
                        break
                    }
                }
            },
        },
        13: {
            title:"序数维度O<sub>3</sub>",
            cost(x) {
                var sl3 = ExpantaNum(x).div(10).floor()
                return ExpantaNum(10000).times(ExpantaNum(1000).pow(sl3))
            },
            effect(x) {
                var mult3 = x.mul(ExpantaNum(1.5).pow(x.div(10).floor())).mul(d4mult)
                setInterval(d3mult = d3mult.add(ExpantaNum(0.01).mul(mult3).times(ExpantaNum(2.5).pow(getBuyableAmount("o",21)))),10);
            },
            display() {
                var display13 = "数量："
                display13 += getBuyableAmount("o",13)
                display13 += "<br>价格："
                display13 += this.cost()
                return display13
            },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost()),
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            buyMax() {
                while(true)
                {
                    if(canAfford())
                    {
                        this.buy()
                    }
                    else
                    {
                        break
                    }
                }
            },
        },
        14: {
            title:"序数维度O<sub>4</sub>",
            cost(x) {
                var sl4 = ExpantaNum(x).div(10).floor()
                return ExpantaNum(1e6).times(ExpantaNum(10000).pow(sl4))
            },
            effect(x) {
                var mult4 = x.mul(ExpantaNum(1.5).pow(x.div(10).floor())).mul(d5mult)
                setInterval(d4mult = d4mult.add(ExpantaNum(0.01).mul(mult4).times(ExpantaNum(2.5).pow(getBuyableAmount("o",21)))),10);
            },
            display() {
                var display14 = "数量："
                display14 += getBuyableAmount("o",14)
                display14 += "<br>价格："
                display14 += this.cost()
                return display14
            },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost()),
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            buyMax() {
                while(true)
                {
                    if(canAfford())
                    {
                        this.buy()
                    }
                    else
                    {
                        break
                    }
                }
            },
        },
        15: {
            title:"序数维度O<sub>5</sub>",
            cost(x) {
                var sl5 = ExpantaNum(x).div(10).floor()
                return ExpantaNum(1e10).times(ExpantaNum(1e6).pow(sl5))
            },
            effect(x) {
                var mult5 = x.mul(ExpantaNum(1.5).pow(x.div(10).floor())).mul(d6mult)
                setInterval(d5mult = d5mult.add(ExpantaNum(0.01).mul(mult5).times(ExpantaNum(2.5).pow(getBuyableAmount("o",21)))),10);
            },
            display() {
                var display15 = "数量："
                display15 += getBuyableAmount("o",15)
                display15 += "<br>价格："
                display15 += this.cost()
                return display15
            },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost()),
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            buyMax() {
                while(true)
                {
                    if(canAfford())
                    {
                        this.buy()
                    }
                    else
                    {
                        break
                    }
                }
            },
        },
        16: {
            title:"序数维度O<sub>6</sub>",
            cost(x) {
                var sl6 = ExpantaNum(x).div(10).floor()
                return ExpantaNum(1e15).times(ExpantaNum(1e8).pow(sl6))
            },
            effect(x) {
                var mult6 = x.mul(ExpantaNum(1.5).pow(x.div(10).floor())).mul(d7mult)
                setInterval(d6mult = d6mult.add(ExpantaNum(0.01).mul(mult6).times(ExpantaNum(2.5).pow(getBuyableAmount("o",21)))),10);
            },
            display() {
                var display16 = "数量："
                display16 += getBuyableAmount("o",16)
                display16 += "<br>价格："
                display16 += this.cost()
                return display16
            },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost()),
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            buyMax() {
                while(true)
                {
                    if(canAfford())
                    {
                        this.buy()
                    }
                    else
                    {
                        break
                    }
                }
            },
        },
        17: {
            title:"序数维度O<sub>7</sub>",
            cost(x) {
                var sl7 = ExpantaNum(x).div(10).floor()
                return ExpantaNum(1e20).times(ExpantaNum(1e10).pow(sl7))
            },
            effect(x) {
                var mult7 = x.mul(ExpantaNum(1.5).pow(x.div(10).floor())).mul(d8mult)
                setInterval(d7mult = d7mult.add(ExpantaNum(0.01).mul(mult7).times(ExpantaNum(2.5).pow(getBuyableAmount("o",21)))),10);
            },
            display() {
                var display17 = "数量："
                display17 += getBuyableAmount("o",17)
                display17 += "<br>价格："
                display17 += this.cost()
                return display17
            },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost()),
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            buyMax() {
                while(true)
                {
                    if(canAfford())
                    {
                        this.buy()
                    }
                    else
                    {
                        break
                    }
                }
            },
        },
        18: {
            title:"序数维度O<sub>8</sub>",
            cost(x) {
                var sl8 = ExpantaNum(x).div(10).floor()
                return ExpantaNum(1e25).times(ExpantaNum(1e10).pow(sl8))
            },
            effect(x) {
                var mult8 = x.mul(ExpantaNum(1.5).pow(x.div(10).floor()))
                setInterval(d8mult = d8mult.add(ExpantaNum(0.01).mul(mult8).times(ExpantaNum(2.5).pow(getBuyableAmount("o",21)))),10);
            },
            display() {
                var display18 = "数量："
                display18 += getBuyableAmount("o",18)
                display18 += "<br>价格："
                display18 += this.cost()
                return display18
            },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost()),
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            buyMax() {
                while(true)
                {
                    if(canAfford())
                    {
                        this.buy()
                    }
                    else
                    {
                        break
                    }
                }
            },
        },
        21: {
            title:"序数维度驱动器",
            cost(x) {
                return ExpantaNum(1e20).times(ExpantaNum(1e10).pow(x))
            },
            display() {
                var display21 = "数量："
                display21 += getBuyableAmount("o",21)
                display21 += "<br>价格："
                display21 += this.cost()
                display21 += "<br>对所有维度的增幅："
                display21 += ExpantaNum(2.5).pow(getBuyableAmount("o",21))
                display21 += "x"
                return display21
            },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost()),
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            buyMax() {
                while(true)
                {
                    if(canAfford())
                    {
                        this.buy()
                    }
                    else
                    {
                        break
                    }
                }
            },
        },
    },
})
