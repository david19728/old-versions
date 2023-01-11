addLayer("au", {
    name: "automator", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "⚙", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new ExpantaNum(0),
        d1auto: false,
        d1max: false,
        d2auto: false,
        d2max: false,
        d3auto: false,
        d3max: false,
        d4auto: false,
        d4max: false,
        d5auto: false,
        d5max: false,
        d6auto: false,
        d6max: false,
        d7auto: false,
        d7max: false,
        d8auto: false,
        d8max: false,
        driverAuto: false,
        driverMax: false,
        fuel1auto: false,
        fuel1max: false,
        fuel2auto: false,
        fuel2max: false,
        fuel3auto: false,
        fuel3max: false,
    }},
    color: "#808080",
    requires: new ExpantaNum(10), // Can be a function that takes requirement increases into account
    resource: "自动化燃料", // Name of prestige currency
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
    row: "side", // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
    ],
    layerShown() {return true},
    tooltip()
    {
        return "自动化"
    },
    update(diff)
    {
        if(player.au.d1auto)
        {
            if(player.au.d1max)
            {
                buyMaxBuyable("o",11)
            }
            else
            {
                buyBuyable("o",11)
            }
        }
        if(player.au.d2auto)
        {
            if(player.au.d2max)
            {
                buyMaxBuyable("o",12)
            }
            else
            {
                buyBuyable("o",12)
            }
        }
        if(player.au.d3auto)
        {
            if(player.au.d3max)
            {
                buyMaxBuyable("o",13)
            }
            else
            {
                buyBuyable("o",13)
            }
        }
        if(player.au.d4auto)
        {
            if(player.au.d4max)
            {
                buyMaxBuyable("o",14)
            }
            else
            {
                buyBuyable("o",14)
            }
        }
        if(player.au.d5auto)
        {
            if(player.au.d5max)
            {
                buyMaxBuyable("o",15)
            }
            else
            {
                buyBuyable("o",15)
            }
        }
        if(player.au.d6auto)
        {
            if(player.au.d6max)
            {
                buyMaxBuyable("o",16)
            }
            else
            {
                buyBuyable("o",16)
            }
        }
        if(player.au.d7auto)
        {
            if(player.au.d7max)
            {
                buyMaxBuyable("o",17)
            }
            else
            {
                buyBuyable("o",17)
            }
        }
        if(player.au.d8auto)
        {
            if(player.au.d8max)
            {
                buyMaxBuyable("o",18)
            }
            else
            {
                buyBuyable("o",18)
            }
        }
        if(player.au.driverAuto)
        {
            if(player.au.driverMax)
            {
                buyMaxBuyable("o",21)
            }
            else
            {
                buyBuyable("o",21)
            }
        }
        if(player.au.fuel1auto)
        {
            if(player.au.fuel1max)
            {
                buyMaxBuyable("au",11)
            }
            else
            {
                buyBuyable("au",11)
            }
        }
        if(player.au.fuel2auto)
        {
            if(player.au.fuel2max)
            {
                buyMaxBuyable("au",12)
            }
            else
            {
                buyBuyable("au",12)
            }
        }
        if(player.au.fuel3auto)
        {
            if(player.au.fuel3max)
            {
                buyMaxBuyable("au",13)
            }
            else
            {
                buyBuyable("au",13)
            }
        }
    },
    infoboxes: {
        1: {
            title: "阶层1",
            body() {
                var t1display = ""
                if(hasMilestone("b",0))
                {
                    t1display += "序数维度O<sub>1</sub>自动化：需要1自动化燃料<br>序数维度O<sub>2</sub>自动化：需要2自动化燃料<br>序数维度O<sub>3</sub>自动化：需要3自动化燃料<br>序数维度O<sub>4</sub>自动化：需要4自动化燃料<br>"
                }
                if(hasMilestone("b",1))
                {
                    t1display += "序数维度O<sub>5</sub>自动化：需要5自动化燃料<br>序数维度O<sub>6</sub>自动化：需要6自动化燃料<br>序数维度O<sub>7</sub>自动化：需要7自动化燃料<br>序数维度O<sub>8</sub>自动化：需要8自动化燃料<br>"
                }
                if(hasMilestone("b",2))
                {
                    t1display += "序数维度驱动器自动化：需要10自动化燃料"
                }
                return t1display
            },
            unlocked()
            {
                return hasMilestone("b",0)
            }
        },
        2: {
            title: "元自动化",
            body() {
                var metaDisplay = "自动用序数点制造自动化燃料：需要10自动化燃料<br>"
                if(player.p.points.gte(1) || hasMilestone("p",0))
                {
                    metaDisplay += "自动用声望点制造自动化燃料：需要？？？自动化燃料<br>"
                }
                if(player.b.points.gte(1) || hasMilestone("b",0))
                {
                    metaDisplay += "自动用助推器制造自动化燃料：需要？？？自动化燃料<br>"
                }
                return metaDisplay
            },
            unlocked()
            {
                return true
            }
        },
    },
    buyables: {
        11: {
            title: "用序数点制造自动化燃料",
            cost(x) { return new ExpantaNum(1e10).pow(x.add(1)) },
            display() {
                var display1 = "数量："
                display1 += getBuyableAmount("au",11)
                display1 += "<br>价格："
                display1 += this.cost()
                display1 += "序数点"
                return display1
            },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                if(this.canAfford())
                {
                    player.points = player.points.sub(this.cost())
                    player.au.points = player.au.points.add(1)
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                }
            },
            buyMax() {
                var level1 = player.points.div(1e10).logBase(1e10).floor()
                if(this.canAfford() && level1.gt(getBuyableAmount("au",11)) && this.cost(level1).lte(player.points))
                {
                    player.points = player.points.sub(this.cost(level1))
                    player.au.points = player.au.points.sub(getBuyableAmount("au",11)).add(level1)
                    setBuyableAmount(this.layer, this.id,level1)
                }
            },
        },
        12: {
            title: "用声望点制造自动化燃料",
            cost(x) { return new ExpantaNum(2).pow(x).floor() },
            display() {
                var display2 = "数量："
                display2 += getBuyableAmount("au",12)
                display2 += "<br>价格："
                display2 += this.cost()
                display2 += "声望点"
                return display2
            },
            unlocked()
            {
                return player.p.points.gte(1) || hasMilestone("p",0)
            },
            canAfford() { return player.p.points.gte(this.cost()) },
            buy() {
                if(this.canAfford())
                {
                    player.p.points = player.p.points.sub(this.cost())
                    player.au.points = player.au.points.add(1)
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                }
            },
            buyMax() {
                var level2 = player.p.points.logBase(2).floor().sub(1)
                if(this.canAfford() && level2.gt(getBuyableAmount("au",12)) && this.cost(level2).lte(player.p.points))
                {
                    player.p.points = player.p.points.sub(this.cost(level2.add(1)).sub(1))
                    player.au.points = player.au.points.sub(getBuyableAmount("au",12)).add(level2)
                    setBuyableAmount(this.layer, this.id,level2)
                }
            },
        },
        13: {
            title: "用助推器制造自动化燃料",
            cost(x) { return new ExpantaNum(2).pow(x).floor() },
            display() {
                var display3 = "数量："
                display3 += getBuyableAmount("au",13)
                display3 += "<br>价格："
                display3 += this.cost()
                display3 += "助推器"
                return display3
            },
            unlocked()
            {
                return player.b.points.gte(1) || hasMilestone("b",0)
            },
            canAfford() { return player.b.points.gte(this.cost()) },
            buy() {
                if(this.canAfford())
                {
                    player.b.points = player.b.points.sub(this.cost())
                    player.au.points = player.au.points.add(1)
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                }
            },
            buyMax() {
                var level3 = player.b.points.logBase(2).floor().sub(1)
                if(this.canAfford() && level3.gt(getBuyableAmount("au",13)) && this.cost(level3).lte(player.b.points))
                {
                    player.b.points = player.b.points.sub(this.cost(level3.add(1)).sub(1))
                    player.au.points = player.au.points.sub(getBuyableAmount("au",13)).add(level3)
                    setBuyableAmount(this.layer, this.id,level3)
                }
            },
        }
    },
    clickables: {
        11: {
            display() {
                return "最大化购买自动化燃料"
            },
            unlocked()
            {
                return true
            },
            canClick()
            {
                return true
            },
            onClick() {
                buyMaxBuyable("au",11)
                buyMaxBuyable("au",12)
                buyMaxBuyable("au",13)
            },
        },
        12: {
            title: "序数维度O<sub>1</sub>自动化",
            display() {
                if(player.au.d1auto)
                {
                    return "开"
                }
                else
                {
                    return "关"
                }
            },
            unlocked()
            {
                return hasMilestone("b",0)
            },
            canClick()
            {
                return player.au.points.gte(1)
            },
            onClick() {
                if(player.au.d1auto)
                {
                    player.au.d1auto = false
                }
                else
                {
                    player.au.d1auto = true
                }
            },
        },
        13: {
            title: "模式",
            display() {
                if(player.au.d1max)
                {
                    return "购买最大"
                }
                else
                {
                    return "购买单个"
                }
            },
            unlocked()
            {
                return hasMilestone("b",0)
            },
            canClick()
            {
                return player.au.points.gte(1)
            },
            onClick() {
                if(player.au.d1max)
                {
                    player.au.d1max = false
                }
                else
                {
                    player.au.d1max = true
                }
            },
        },
        14: {
            title: "序数维度O<sub>2</sub>自动化",
            display() {
                if(player.au.d2auto)
                {
                    return "开"
                }
                else
                {
                    return "关"
                }
            },
            unlocked()
            {
                return hasMilestone("b",0)
            },
            canClick()
            {
                return player.au.points.gte(2)
            },
            onClick() {
                if(player.au.d2auto)
                {
                    player.au.d2auto = false
                }
                else
                {
                    player.au.d2auto = true
                }
            },
        },
        15: {
            title: "模式",
            display() {
                if(player.au.d2max)
                {
                    return "购买最大"
                }
                else
                {
                    return "购买单个"
                }
            },
            unlocked()
            {
                return hasMilestone("b",0)
            },
            canClick()
            {
                return player.au.points.gte(2)
            },
            onClick() {
                if(player.au.d2max)
                {
                    player.au.d2max = false
                }
                else
                {
                    player.au.d2max = true
                }
            },
        },
        16: {
            title: "序数维度O<sub>3</sub>自动化",
            display() {
                if(player.au.d3auto)
                {
                    return "开"
                }
                else
                {
                    return "关"
                }
            },
            unlocked()
            {
                return hasMilestone("b",0)
            },
            canClick()
            {
                return player.au.points.gte(3)
            },
            onClick() {
                if(player.au.d3auto)
                {
                    player.au.d3auto = false
                }
                else
                {
                    player.au.d3auto = true
                }
            },
        },
        17: {
            title: "模式",
            display() {
                if(player.au.d3max)
                {
                    return "购买最大"
                }
                else
                {
                    return "购买单个"
                }
            },
            unlocked()
            {
                return hasMilestone("b",0)
            },
            canClick()
            {
                return player.au.points.gte(3)
            },
            onClick() {
                if(player.au.d3max)
                {
                    player.au.d3max = false
                }
                else
                {
                    player.au.d3max = true
                }
            },
        },
        18: {
            title: "序数维度O<sub>4</sub>自动化",
            display() {
                if(player.au.d4auto)
                {
                    return "开"
                }
                else
                {
                    return "关"
                }
            },
            unlocked()
            {
                return hasMilestone("b",0)
            },
            canClick()
            {
                return player.au.points.gte(4)
            },
            onClick() {
                if(player.au.d4auto)
                {
                    player.au.d4auto = false
                }
                else
                {
                    player.au.d4auto = true
                }
            },
        },
        19: {
            title: "模式",
            display() {
                if(player.au.d4max)
                {
                    return "购买最大"
                }
                else
                {
                    return "购买单个"
                }
            },
            unlocked()
            {
                return hasMilestone("b",0)
            },
            canClick()
            {
                return player.au.points.gte(4)
            },
            onClick() {
                if(player.au.d4max)
                {
                    player.au.d4max = false
                }
                else
                {
                    player.au.d4max = true
                }
            },
        },
        21: {
            title: "序数维度O<sub>5</sub>自动化",
            display() {
                if(player.au.d5auto)
                {
                    return "开"
                }
                else
                {
                    return "关"
                }
            },
            unlocked()
            {
                return hasMilestone("b",1)
            },
            canClick()
            {
                return player.au.points.gte(5)
            },
            onClick() {
                if(player.au.d5auto)
                {
                    player.au.d5auto = false
                }
                else
                {
                    player.au.d5auto = true
                }
            },
        },
        22: {
            title: "模式",
            display() {
                if(player.au.d5max)
                {
                    return "购买最大"
                }
                else
                {
                    return "购买单个"
                }
            },
            unlocked()
            {
                return hasMilestone("b",1)
            },
            canClick()
            {
                return player.au.points.gte(5)
            },
            onClick() {
                if(player.au.d5max)
                {
                    player.au.d5max = false
                }
                else
                {
                    player.au.d5max = true
                }
            },
        },
        23: {
            title: "序数维度O<sub>6</sub>自动化",
            display() {
                if(player.au.d6auto)
                {
                    return "开"
                }
                else
                {
                    return "关"
                }
            },
            unlocked()
            {
                return hasMilestone("b",1)
            },
            canClick()
            {
                return player.au.points.gte(6)
            },
            onClick() {
                if(player.au.d6auto)
                {
                    player.au.d6auto = false
                }
                else
                {
                    player.au.d6auto = true
                }
            },
        },
        24: {
            title: "模式",
            display() {
                if(player.au.d6max)
                {
                    return "购买最大"
                }
                else
                {
                    return "购买单个"
                }
            },
            unlocked()
            {
                return hasMilestone("b",1)
            },
            canClick()
            {
                return player.au.points.gte(6)
            },
            onClick() {
                if(player.au.d6max)
                {
                    player.au.d6max = false
                }
                else
                {
                    player.au.d6max = true
                }
            },
        },
        25: {
            title: "序数维度O<sub>7</sub>自动化",
            display() {
                if(player.au.d7auto)
                {
                    return "开"
                }
                else
                {
                    return "关"
                }
            },
            unlocked()
            {
                return hasMilestone("b",1)
            },
            canClick()
            {
                return player.au.points.gte(7)
            },
            onClick() {
                if(player.au.d7auto)
                {
                    player.au.d7auto = false
                }
                else
                {
                    player.au.d7auto = true
                }
            },
        },
        26: {
            title: "模式",
            display() {
                if(player.au.d7max)
                {
                    return "购买最大"
                }
                else
                {
                    return "购买单个"
                }
            },
            unlocked()
            {
                return hasMilestone("b",1)
            },
            canClick()
            {
                return player.au.points.gte(7)
            },
            onClick() {
                if(player.au.d7max)
                {
                    player.au.d7max = false
                }
                else
                {
                    player.au.d7max = true
                }
            },
        },
        27: {
            title: "序数维度O<sub>8</sub>自动化",
            display() {
                if(player.au.d8auto)
                {
                    return "开"
                }
                else
                {
                    return "关"
                }
            },
            unlocked()
            {
                return hasMilestone("b",1)
            },
            canClick()
            {
                return player.au.points.gte(8)
            },
            onClick() {
                if(player.au.d8auto)
                {
                    player.au.d8auto = false
                }
                else
                {
                    player.au.d8auto = true
                }
            },
        },
        28: {
            title: "模式",
            display() {
                if(player.au.d8max)
                {
                    return "购买最大"
                }
                else
                {
                    return "购买单个"
                }
            },
            unlocked()
            {
                return hasMilestone("b",1)
            },
            canClick()
            {
                return player.au.points.gte(8)
            },
            onClick() {
                if(player.au.d8max)
                {
                    player.au.d8max = false
                }
                else
                {
                    player.au.d8max = true
                }
            },
        },
        31: {
            title: "序数维度驱动器自动化",
            display() {
                if(player.au.driverAuto)
                {
                    return "开"
                }
                else
                {
                    return "关"
                }
            },
            unlocked()
            {
                return hasMilestone("b",2)
            },
            canClick()
            {
                return player.au.points.gte(10)
            },
            onClick() {
                if(player.au.driverAuto)
                {
                    player.au.driverAuto = false
                }
                else
                {
                    player.au.driverAuto = true
                }
            },
        },
        32: {
            title: "模式",
            display() {
                if(player.au.driverMax)
                {
                    return "购买最大"
                }
                else
                {
                    return "购买单个"
                }
            },
            unlocked()
            {
                return hasMilestone("b",2)
            },
            canClick()
            {
                return player.au.points.gte(10)
            },
            onClick() {
                if(player.au.driverMax)
                {
                    player.au.driverMax = false
                }
                else
                {
                    player.au.driverMax = true
                }
            },
        },
        33: {
            title: "自动用序数点制造自动化燃料",
            display() {
                if(player.au.fuel1auto)
                {
                    return "开"
                }
                else
                {
                    return "关"
                }
            },
            unlocked()
            {
                return true
            },
            canClick()
            {
                return player.au.points.gte(10)
            },
            onClick() {
                if(player.au.fuel1auto)
                {
                    player.au.fuel1auto = false
                }
                else
                {
                    player.au.fuel1auto = true
                }
            },
        },
        34: {
            title: "模式",
            display() {
                if(player.au.fuel1max)
                {
                    return "购买最大"
                }
                else
                {
                    return "购买单个"
                }
            },
            unlocked()
            {
                return true
            },
            canClick()
            {
                return player.au.points.gte(10)
            },
            onClick() {
                if(player.au.fuel1max)
                {
                    player.au.fuel1max = false
                }
                else
                {
                    player.au.fuel1max = true
                }
            },
        },
        35: {
            title: "自动用声望点制造自动化燃料",
            display() {
                if(player.au.fuel2auto)
                {
                    return "开"
                }
                else
                {
                    return "关"
                }
            },
            unlocked()
            {
                return player.p.points.gte(1) || hasMilestone("p",0)
            },
            canClick()
            {
                return false
            },
            onClick() {
                if(player.au.fuel2auto)
                {
                    player.au.fuel2auto = false
                }
                else
                {
                    player.au.fuel2auto = true
                }
            },
        },
        36: {
            title: "模式",
            display() {
                if(player.au.fuel2max)
                {
                    return "购买最大"
                }
                else
                {
                    return "购买单个"
                }
            },
            unlocked()
            {
                return player.p.points.gte(1) || hasMilestone("p",0)
            },
            canClick()
            {
                return false
            },
            onClick() {
                if(player.au.fuel2max)
                {
                    player.au.fuel2max = false
                }
                else
                {
                    player.au.fuel2max = true
                }
            },
        },
        37: {
            title: "自动用助推器制造自动化燃料",
            display() {
                if(player.au.fuel3auto)
                {
                    return "开"
                }
                else
                {
                    return "关"
                }
            },
            unlocked()
            {
                return player.b.points.gte(1) || hasMilestone("b",0)
            },
            canClick()
            {
                return false
            },
            onClick() {
                if(player.au.fuel3auto)
                {
                    player.au.fuel3auto = false
                }
                else
                {
                    player.au.fuel3auto = true
                }
            },
        },
        38: {
            title: "模式",
            display() {
                if(player.au.fuel3max)
                {
                    return "购买最大"
                }
                else
                {
                    return "购买单个"
                }
            },
            unlocked()
            {
                return player.b.points.gte(1) || hasMilestone("b",0)
            },
            canClick()
            {
                return false
            },
            onClick() {
                if(player.au.fuel3max)
                {
                    player.au.fuel3max = false
                }
                else
                {
                    player.au.fuel3max = true
                }
            },
        },
    },
    tabFormat: {
        "燃料": {
            content: ["main-display",
                      ["row",[["clickable",11]]],
                      ["row",[["buyable",11],["buyable",12],["buyable",13]]]],
        },
        "阶层1": {
            content: [["infobox",1],
                      ["row",[["clickable",12],["clickable",13]]],
                      ["row",[["clickable",14],["clickable",15]]],
                      ["row",[["clickable",16],["clickable",17]]],
                      ["row",[["clickable",18],["clickable",19]]],
                      ["row",[["clickable",21],["clickable",22]]],
                      ["row",[["clickable",23],["clickable",24]]],
                      ["row",[["clickable",25],["clickable",26]]],
                      ["row",[["clickable",27],["clickable",28]]],
                      ["row",[["clickable",31],["clickable",32]]],],
        },
        "元自动化": {
            content: [["infobox",2],
                      ["row",[["clickable",33],["clickable",34]]],
                      ["row",[["clickable",35],["clickable",36]]],
                      ["row",[["clickable",37],["clickable",38]]],],
        },
    }
})