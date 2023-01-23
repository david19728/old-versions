addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new ExpantaNum(0),
        best: new ExpantaNum(0),
        prsBase: new ExpantaNum(5),
        resetTime: 0
    }},
    color: "#7BFF9C",
    requires: ExpantaNum(3).pow(105), // Can be a function that takes requirement increases into account
    resource: "声望点", // Name of prestige currency
    effectDescription()
    {
        var prestigeDisplay = "将你的所有维度乘以<h2>"
        prestigeDisplay += player.p.prsBase.pow(player.p.points).toFixed(6)
        prestigeDisplay += "×</h2>"
        return prestigeDisplay
    },
    baseResource: "序数点", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "custom", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    prestigeButtonText()
    {
        var prsText = "声望以获得<h3>"
        prsText += this.getResetGain().toFixed(6)
        prsText += "</h3>声望点<br>"
        if(hasMilestone("p",3))
        {
            prsText += "<br>下一个在：<h3>"
        }
        else
        {
            prsText += "<br>需要：<h3>"
        }
        prsText += player.points.toFixed(6)
        prsText += "/<br>"
        prsText += this.getNextAt().toFixed(6)
        prsText += "</h3>序数点"
        return prsText
    },
    getResetGain()
    {
        if(hasMilestone("p",3))
        {
            if(this.canReset())
            {
                return player.points.div(ExpantaNum(3).pow(30)).logBase(ExpantaNum(3).pow(75)).floor().sub(player.p.points)
            }
            else
            {
                return ExpantaNum(0)
            }
        }
        else
        {
            if(this.canReset())
            {
                return ExpantaNum(1)
            }
            else
            {
                return ExpantaNum(0)
            }
        }
    },
    getNextAt()
    {
        if(hasMilestone("p",3))
        {
            return ExpantaNum(3).pow(30).mul(ExpantaNum(3).pow(75).pow(player.p.points.add(this.getResetGain()).add(1)))
        }
        else
        {
            return ExpantaNum(3).pow(30).mul(ExpantaNum(3).pow(75).pow(player.p.points.add(1)))
        }
    },
    canReset()
    {
        return player.points.gte(ExpantaNum(3).pow(30).mul(ExpantaNum(3).pow(75).pow(player.p.points.add(1))))
    },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new ExpantaNum(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new ExpantaNum(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P：声望", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.points.gte(1e30) || player.p.points.gte(1) || hasMilestone("p",0)},
    update(diff){
        if(hasUpgrade("b",13))
        {
            player.p.prsBase = ExpantaNum(5).add(player.b.dist.add(1).logBase(10).div(5))
        }
    },
    upgrades: {
        11: {
            title: "首领之力",
            description: "O<sub>1~7</sub>生产变为（O<sub>8</sub>+1）<sup>3</sup>倍",
            cost: new ExpantaNum(2),
            effectDisplay()
            {
                return "+" + getBuyableAmount("o",18).pow(3).toFixed(6)
            }
        },
        12: {
            title: "驱动强化",
            description: "驱动器底数+1",
            cost: new ExpantaNum(4),
        },
        13: {
            title: "BP协同",
            description: "距离加成声望底数",
            cost: new ExpantaNum(7),
            effectDisplay()
            {
                return "+" + player.b.dist.add(1).logBase(10).div(5).toFixed(6)
            }
        },
        14: {
            title: "首领之力",
            description: "O<sub>1~7</sub>生产变为O<sub>8</sub><sup>3</sup>倍",
            cost: new ExpantaNum(10),
            effectDisplay()
            {
                return "+" + getBuyableAmount("o",18).pow(3).toFixed(6)
            }
        }
    },
    milestones: {
        0: {
            requirementDescription: "1声望点",
            effectDescription: "购买序数维度O<sub>1~4</sub>不再花费任何东西",
            done() { return player.p.points.gte(1) }
        },
        1: {
            requirementDescription: "3声望点",
            effectDescription: "购买序数维度O<sub>5~8</sub>不再花费任何东西",
            done() { return player.p.points.gte(3) }
        },
        2: {
            requirementDescription: "5声望点",
            effectDescription: "购买序数维度驱动器不再花费任何东西",
            done() { return player.p.points.gte(5) }
        },
        3: {
            requirementDescription: "8声望点",
            effectDescription: "你可以购买最大声望",
            done() { return player.p.points.gte(8) }
        }
    },
})
