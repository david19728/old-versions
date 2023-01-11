addLayer("o", {
    name: "ordinal", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "O", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new ExpantaNum(10),
        dimBase: ExpantaNum(1.5),
        d2mult: ExpantaNum(1),
        d3mult: ExpantaNum(1),
        d4mult: ExpantaNum(1),
        d5mult: ExpantaNum(1),
        d6mult: ExpantaNum(1),
        d7mult: ExpantaNum(1),
        d8mult: ExpantaNum(1),
        mult2: ExpantaNum(1),
        mult3: ExpantaNum(1),
        mult4: ExpantaNum(1),
        mult5: ExpantaNum(1),
        mult6: ExpantaNum(1),
        mult7: ExpantaNum(1),
        mult8: ExpantaNum(1),
        driverBase: ExpantaNum(2.5),
        bestOPsac: ExpantaNum(0),
        sacMult: ExpantaNum(1)
    }},
    color: "#05FF00",
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
    tooltip()
    {
        return "维度"
    },
    branches: ["p","b"],
    update(diff)
    {
        player.o.mult2 = getBuyableAmount("o",12).mul(player.o.dimBase.pow(getBuyableAmount("o",12).div(10).floor()).mul(player.o.d3mult)).times(player.o.driverBase.pow(getBuyableAmount("o",21))).times(player.p.prsBase.pow(player.p.points)).times(player.b.dist.add(1).sqrt())
        player.o.mult3 = getBuyableAmount("o",13).mul(player.o.dimBase.pow(getBuyableAmount("o",13).div(10).floor()).mul(player.o.d4mult)).times(player.o.driverBase.pow(getBuyableAmount("o",21))).times(player.p.prsBase.pow(player.p.points)).times(player.b.dist.add(1).sqrt())
        player.o.mult4 = getBuyableAmount("o",14).mul(player.o.dimBase.pow(getBuyableAmount("o",14).div(10).floor()).mul(player.o.d5mult)).times(player.o.driverBase.pow(getBuyableAmount("o",21))).times(player.p.prsBase.pow(player.p.points)).times(player.b.dist.add(1).sqrt())
        player.o.mult5 = getBuyableAmount("o",15).mul(player.o.dimBase.pow(getBuyableAmount("o",15).div(10).floor()).mul(player.o.d6mult)).times(player.o.driverBase.pow(getBuyableAmount("o",21))).times(player.p.prsBase.pow(player.p.points)).times(player.b.dist.add(1).sqrt())
        player.o.mult6 = getBuyableAmount("o",16).mul(player.o.dimBase.pow(getBuyableAmount("o",16).div(10).floor()).mul(player.o.d7mult)).times(player.o.driverBase.pow(getBuyableAmount("o",21))).times(player.p.prsBase.pow(player.p.points)).times(player.b.dist.add(1).sqrt())
        player.o.mult7 = getBuyableAmount("o",17).mul(player.o.dimBase.pow(getBuyableAmount("o",17).div(10).floor()).mul(player.o.d8mult)).times(player.o.driverBase.pow(getBuyableAmount("o",21))).times(player.p.prsBase.pow(player.p.points)).times(player.b.dist.add(1).sqrt())
        player.o.mult8 = getBuyableAmount("o",18).mul(player.o.dimBase.pow(getBuyableAmount("o",18).div(10).floor()).mul(player.o.sacMult)).times(player.o.driverBase.pow(getBuyableAmount("o",21))).times(player.p.prsBase.pow(player.p.points)).times(player.b.dist.add(1).sqrt())
        
        player.o.d2mult = player.o.d2mult.add(player.o.mult2.mul(diff))
        player.o.d3mult = player.o.d3mult.add(player.o.mult3.mul(diff))
        player.o.d4mult = player.o.d4mult.add(player.o.mult4.mul(diff))
        player.o.d5mult = player.o.d5mult.add(player.o.mult5.mul(diff))
        player.o.d6mult = player.o.d6mult.add(player.o.mult6.mul(diff))
        player.o.d7mult = player.o.d7mult.add(player.o.mult7.mul(diff))
        player.o.d8mult = player.o.d8mult.add(player.o.mult8.mul(diff))
    },
    clickables: {
        11: {
            display() {return "最大化所有"},
            canClick() {return true},
            onClick() {
                buyMaxBuyable("o",11)
                buyMaxBuyable("o",12)
                buyMaxBuyable("o",13)
                buyMaxBuyable("o",14)
                buyMaxBuyable("o",15)
                buyMaxBuyable("o",16)
                buyMaxBuyable("o",17)
                buyMaxBuyable("o",18)
            },
        },
        12: {
            display() {return "最大化购买序数维度驱动器"},
            canClick() {return true},
            onClick() {
                buyMaxBuyable("o",21)
            },
        }
    },
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
                if(hasMilestone("p",0))
                {
                    display11 += "<br>需求："
                }
                else
                {
                    display11 += "<br>价格："
                }
                display11 += this.cost()
                display11 += "序数点<br>来自更高维度的增幅："
                display11 += player.o.d2mult
                display11 += "×"
                return display11
            },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                if(this.canAfford())
                {
                    if(hasMilestone("p",0) == false)
                    {
                        player.points = player.points.sub(this.cost())
                    }
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                }
            },
            buyMax() {
                if(getBuyableAmount("o",11).eq(0))
                {
                    if(this.canAfford())
                    {
                        if(hasMilestone("p",0) == false)
                        {
                            player.points = player.points.sub(this.cost())
                        }
                        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                    }
                }
                else
                {
                    var level1 = player.points.div(10).div(10).logBase(10).floor()
                    var extra1 = player.points.div(10).div(ExpantaNum(10).times(ExpantaNum(10).pow(level1))).floor()
                    var total1 = ExpantaNum(0)
                    if(player.points.lt("1e999999999"))
                    {
                        total1 = level1.mul(10).add(extra1)
                    }
                    else
                    {
                        total1 = level1.mul(10)
                    }
                    if(this.canAfford() && total1.gt(getBuyableAmount("o",11)) && this.cost(total1).lte(player.points))
                    {
                        if(hasMilestone("p",0) == false)
                        {
                            player.points = player.points.sub(this.cost(total1).mul(extra1))
                        }
                        setBuyableAmount(this.layer, this.id, total1)
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
            display() {
                var display12 = "数量："
                display12 += getBuyableAmount("o",12)
                if(hasMilestone("p",0))
                {
                    display12 += "<br>需求："
                }
                else
                {
                    display12 += "<br>价格："
                }
                display12 += this.cost()
                display12 += "序数点<br>来自更高维度的增幅："
                display12 += player.o.d3mult
                display12 += "×"
                return display12
            },
            unlocked() { return getBuyableAmount("o",11).gte(10) },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                if(this.canAfford())
                {
                    if(hasMilestone("p",0) == false)
                    {
                        player.points = player.points.sub(this.cost())
                    }
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                }
            },
            buyMax() {
                var level2 = player.points.div(10).div(100).logBase(100).floor()
                var extra2 = player.points.div(10).div(ExpantaNum(100).times(ExpantaNum(100).pow(level2))).floor()
                var total2 = ExpantaNum(0)
                if(player.points.lt("1e999999999"))
                {
                    total2 = level2.mul(10).add(extra2)
                }
                else
                {
                    total2 = level2.mul(10)
                }
                if(this.canAfford() && total2.gt(getBuyableAmount("o",12)) && this.cost(total2).lte(player.points))
                {
                    if(hasMilestone("p",0) == false)
                    {
                        player.points = player.points.sub(this.cost(total2).mul(extra2))
                    }
                    setBuyableAmount(this.layer, this.id, total2)
                }
            },
        },
        13: {
            title:"序数维度O<sub>3</sub>",
            cost(x) {
                var sl3 = ExpantaNum(x).div(10).floor()
                return ExpantaNum(10000).times(ExpantaNum(1000).pow(sl3))
            },
            display() {
                var display13 = "数量："
                display13 += getBuyableAmount("o",13)
                if(hasMilestone("p",0))
                {
                    display13 += "<br>需求："
                }
                else
                {
                    display13 += "<br>价格："
                }
                display13 += this.cost()
                display13 += "序数点<br>来自更高维度的增幅："
                display13 += player.o.d4mult
                display13 += "×"
                return display13
            },
            unlocked() { return getBuyableAmount("o",12).gte(10) },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                if(this.canAfford())
                {
                    if(hasMilestone("p",0) == false)
                    {
                        player.points = player.points.sub(this.cost())
                    }
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                }
            },
            buyMax() {
                var level3 = player.points.div(10).div(10000).logBase(1000).floor()
                var extra3 = player.points.div(10).div(ExpantaNum(10000).times(ExpantaNum(1000).pow(level3))).floor()
                var total3 = ExpantaNum(0)
                if(player.points.lt("1e999999999"))
                {
                    total3 = level3.mul(10).add(extra3)
                }
                else
                {
                    total3 = level3.mul(10)
                }
                if(this.canAfford() && total3.gt(getBuyableAmount("o",13)) && this.cost(total3).lte(player.points))
                {
                    if(hasMilestone("p",0) == false)
                    {
                        player.points = player.points.sub(this.cost(total3).mul(extra3))
                    }
                    setBuyableAmount(this.layer, this.id, total3)
                }
            },
        },
        14: {
            title:"序数维度O<sub>4</sub>",
            cost(x) {
                var sl4 = ExpantaNum(x).div(10).floor()
                return ExpantaNum(1e6).times(ExpantaNum(10000).pow(sl4))
            },
            display() {
                var display14 = "数量："
                display14 += getBuyableAmount("o",14)
                if(hasMilestone("p",0))
                {
                    display14 += "<br>需求："
                }
                else
                {
                    display14 += "<br>价格："
                }
                display14 += this.cost()
                display14 += "序数点<br>来自更高维度的增幅："
                display14 += player.o.d5mult
                display14 += "×"
                return display14
            },
            unlocked() { return getBuyableAmount("o",13).gte(10) },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                if(this.canAfford())
                {
                    if(hasMilestone("p",0) == false)
                    {
                        player.points = player.points.sub(this.cost())
                    }
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                }
            },
            buyMax() {
                var level4 = player.points.div(10).div(1e6).logBase(10000).floor()
                var extra4 = player.points.div(10).div(ExpantaNum(1e6).times(ExpantaNum(10000).pow(level4))).floor()
                var total4 = ExpantaNum(0)
                if(player.points.lt("1e999999999"))
                {
                    total4 = level4.mul(10).add(extra4)
                }
                else
                {
                    total4 = level4.mul(10)
                }
                if(this.canAfford() && total4.gt(getBuyableAmount("o",14)) && this.cost(total4).lte(player.points))
                {
                    if(hasMilestone("p",0) == false)
                    {
                        player.points = player.points.sub(this.cost(total4).mul(extra4))
                    }
                    setBuyableAmount(this.layer, this.id, total4)
                }
            },
        },
        15: {
            title:"序数维度O<sub>5</sub>",
            cost(x) {
                var sl5 = ExpantaNum(x).div(10).floor()
                return ExpantaNum(1e10).times(ExpantaNum(1e6).pow(sl5))
            },
            display() {
                var display15 = "数量："
                display15 += getBuyableAmount("o",15)
                if(hasMilestone("p",1))
                {
                    display15 += "<br>需求："
                }
                else
                {
                    display15 += "<br>价格："
                }
                display15 += this.cost()
                display15 += "序数点<br>来自更高维度的增幅："
                display15 += player.o.d6mult
                display15 += "×"
                return display15
            },
            unlocked() { return getBuyableAmount("o",14).gte(10) },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                if(this.canAfford())
                {
                    if(hasMilestone("p",1) == false)
                    {
                        player.points = player.points.sub(this.cost())
                    }
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                }
            },
            buyMax() {
                var level5 = player.points.div(10).div(1e10).logBase(1e6).floor()
                var extra5 = player.points.div(10).div(ExpantaNum(1e10).times(ExpantaNum(1e6).pow(level5))).floor()
                var total5 = ExpantaNum(0)
                if(player.points.lt("1e999999999"))
                {
                    total5 = level5.mul(10).add(extra5)
                }
                else
                {
                    total5 = level5.mul(10)
                }
                if(this.canAfford() && total5.gt(getBuyableAmount("o",15)) && this.cost(total5).lte(player.points))
                {
                    if(hasMilestone("p",1) == false)
                    {
                        player.points = player.points.sub(this.cost(total5).mul(extra5))
                    }
                    setBuyableAmount(this.layer, this.id, total5)
                }
            },
        },
        16: {
            title:"序数维度O<sub>6</sub>",
            cost(x) {
                var sl6 = ExpantaNum(x).div(10).floor()
                return ExpantaNum(1e15).times(ExpantaNum(1e8).pow(sl6))
            },
            display() {
                var display16 = "数量："
                display16 += getBuyableAmount("o",16)
                if(hasMilestone("p",1))
                {
                    display16 += "<br>需求："
                }
                else
                {
                    display16 += "<br>价格："
                }
                display16 += this.cost()
                display16 += "序数点<br>来自更高维度的增幅："
                display16 += player.o.d7mult
                display16 += "×"
                return display16
            },
            unlocked() { return getBuyableAmount("o",15).gte(10) },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                if(this.canAfford())
                {
                    if(hasMilestone("p",1) == false)
                    {
                        player.points = player.points.sub(this.cost())
                    }
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                }
            },
            buyMax() {
                var level6 = player.points.div(10).div(1e15).logBase(1e8).floor()
                var extra6 = player.points.div(10).div(ExpantaNum(1e15).times(ExpantaNum(1e8).pow(level6))).floor()
                var total6 = ExpantaNum(0)
                if(player.points.lt("1e999999999"))
                {
                    total6 = level6.mul(10).add(extra6)
                }
                else
                {
                    total6 = level6.mul(10)
                }
                if(this.canAfford() && total6.gt(getBuyableAmount("o",16)) && this.cost(total6).lte(player.points))
                {
                    if(hasMilestone("p",1) == false)
                    {
                        player.points = player.points.sub(this.cost(total6).mul(extra6))
                    }
                    setBuyableAmount(this.layer, this.id, total6)
                }
            },
        },
        17: {
            title:"序数维度O<sub>7</sub>",
            cost(x) {
                var sl7 = ExpantaNum(x).div(10).floor()
                return ExpantaNum(1e20).times(ExpantaNum(1e10).pow(sl7))
            },
            display() {
                var display17 = "数量："
                display17 += getBuyableAmount("o",17)
                if(hasMilestone("p",1))
                {
                    display17 += "<br>需求："
                }
                else
                {
                    display17 += "<br>价格："
                }
                display17 += this.cost()
                display17 += "序数点<br>来自更高维度的增幅："
                display17 += player.o.d8mult
                display17 += "×"
                return display17
            },
            unlocked() { return getBuyableAmount("o",16).gte(10) },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                if(this.canAfford())
                {
                    if(hasMilestone("p",1) == false)
                    {
                        player.points = player.points.sub(this.cost())
                    }
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                }
            },
            buyMax() {
                var level7 = player.points.div(10).div(1e20).logBase(1e10).floor()
                var extra7 = player.points.div(10).div(ExpantaNum(1e20).times(ExpantaNum(1e10).pow(level7))).floor()
                var total7 = ExpantaNum(0)
                if(player.points.lt("1e999999999"))
                {
                    total7 = level7.mul(10).add(extra7)
                }
                else
                {
                    total7 = level7.mul(10)
                }
                if(this.canAfford() && total7.gt(getBuyableAmount("o",17)) && this.cost(total7).lte(player.points))
                {
                    if(hasMilestone("p",1) == false)
                    {
                        player.points = player.points.sub(this.cost(total7).mul(extra7))
                    }
                    setBuyableAmount(this.layer, this.id, total7)
                }
            },
        },
        18: {
            title:"序数维度O<sub>8</sub>",
            cost(x) {
                var sl8 = ExpantaNum(x).div(10).floor()
                return ExpantaNum(1e25).times(ExpantaNum(1e10).pow(sl8))
            },
            display() {
                var display18 = "数量："
                display18 += getBuyableAmount("o",18)
                if(hasMilestone("p",1))
                {
                    display18 += "<br>需求："
                }
                else
                {
                    display18 += "<br>价格："
                }
                display18 += this.cost()
                display18 += "序数点"
                return display18
            },
            unlocked() { return getBuyableAmount("o",17).gte(10) },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                if(this.canAfford())
                {
                    if(hasMilestone("p",1) == false)
                    {
                        player.points = player.points.sub(this.cost())
                    }
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                }
            },
            buyMax() {
                var level8 = player.points.div(10).div(1e25).logBase(1e10).floor()
                var extra8 = player.points.div(10).div(ExpantaNum(1e25).times(ExpantaNum(1e10).pow(level8))).floor()
                var total8 = ExpantaNum(0)
                if(player.points.lt("1e999999999"))
                {
                    total8 = level8.mul(10).add(extra8)
                }
                else
                {
                    total8 = level8.mul(10)
                }
                if(this.canAfford() && total8.gt(getBuyableAmount("o",18)) && this.cost(total8).lte(player.points))
                {
                    if(hasMilestone("p",1) == false)
                    {
                        player.points = player.points.sub(this.cost(total8).mul(extra8))
                    }
                    setBuyableAmount(this.layer, this.id, total8)
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
                if(hasMilestone("p",2))
                {
                    display21 += "<br>需求："
                }
                else
                {
                    display21 += "<br>价格："
                }
                display21 += this.cost()
                display21 += "序数点<br>对所有维度的增幅："
                display21 += ExpantaNum(2.5).pow(getBuyableAmount("o",21))
                display21 += "×"
                return display21
            },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                if(this.canAfford())
                {
                    if(hasMilestone("p",2) == false)
                    {
                        player.points = player.points.sub(this.cost())
                    }
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                }
            },
            buyMax() {
                var driverLevel = player.points.div(1e20).logBase(1e10).floor()
                if(this.canAfford() && driverLevel.gt(getBuyableAmount("o",21)) && this.cost(driverLevel).lte(player.points))
                {
                    if(hasMilestone("p",1) == false)
                    {
                        player.points = player.points.sub(this.cost(driverLevel))
                    }
                    setBuyableAmount(this.layer, this.id, driverLevel)
                }
            },
        },
        22: {
            title:"序数维度献祭",
            cost(x) {
                return ExpantaNum(0)
            },
            display() {
                var display22 = "重置维度O<sub>1~7</sub>，<br>但给予O<sub>8</sub>如下增幅：<br><h3>"
                display22 += player.o.sacMult
                display22 += "×<br>↓<br>"
                display22 += player.points.root(20)
                display22 += "×</h3>"
                return display22
            },
            unlocked() { return true },
            canAfford() { return getBuyableAmount("o",18).gte(10) && player.points.gte(player.o.bestOPsac) },
            buy() {
                player.o.bestOPsac = player.points
                player.o.sacMult = player.points.root(20)
                player.o.d2mult = ExpantaNum(0)
                player.o.d3mult = ExpantaNum(0)
                player.o.d4mult = ExpantaNum(0)
                player.o.d5mult = ExpantaNum(0)
                player.o.d6mult = ExpantaNum(0)
                player.o.d7mult = ExpantaNum(0)
                player.o.d8mult = ExpantaNum(0)
            },
        },
    },
    bars: {
        1: {
            direction: RIGHT,
            width: 800,
            height: 50,
            progress() {
                return player.points.logBase(ExpantaNum(3).pow(30).mul(ExpantaNum(3).pow(75).pow(player.p.points.add(1))))
            },
            display() {
                return player.points.logBase(ExpantaNum(3).pow(30).mul(ExpantaNum(3).pow(75).pow(player.p.points.add(1)))).mul(100) + "%到下一次声望。"
            },
            fillStyle: {'background-color' : '#7BFF9C'},
            textStyle: {'color': '#808080'}
        },
        2: {
            direction: RIGHT,
            width: 800,
            height: 50,
            progress() {
                return player.points.logBase(ExpantaNum(3).pow(30).mul(ExpantaNum(3).pow(75).pow(player.b.points.add(1))))
            },
            display() {
                return player.points.logBase(ExpantaNum(3).pow(30).mul(ExpantaNum(3).pow(75).pow(player.b.points.add(1)))).mul(100) + "%到下一次维度提升。"
            },
            fillStyle: {'background-color' : '#00F7FF'},
            textStyle: {'color': '#808080'},
        },
    },
    tabFormat: {
        "维度": {
            content: [["row",[["clickable",11],["clickable",12]]],
                      ["row",[["buyable",11],["buyable",12],["buyable",13],["buyable",14]]],
                      ["row",[["buyable",15],["buyable",16],["buyable",17],["buyable",18]]],
                      ["row",[["buyable",21],["buyable",22]]],
                      ["row",[["bar",1]]],
                      ["row",[["bar",2]]]],
        },
    }
})
