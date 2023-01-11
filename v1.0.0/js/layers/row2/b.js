addLayer("b", {
    name: "booster", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "B", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new ExpantaNum(0),
		bstBase: new ExpantaNum(5),
        dist: ExpantaNum(0)
    }},
    color: "#00F7FF",
    requires: ExpantaNum(3).pow(105), // Can be a function that takes requirement increases into account
    resource: "助推器", // Name of prestige currency
    effectDescription()
    {
        var boosterDisplay = "生成<h2>"
        boosterDisplay += ExpantaNum(5).pow(player.b.points).sub(1).toFixed(6)
        boosterDisplay += "米</h2>距离每秒<br>你有<h2>"
        boosterDisplay += player.b.dist.toFixed(6)
        boosterDisplay += "米</h2>距离，将你的所有维度乘以<h2>"
        boosterDisplay += player.b.dist.add(1).sqrt().toFixed(6)
        boosterDisplay += "×</h2>"
        return boosterDisplay
    },
    baseResource: "序数点", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "custom", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    prestigeButtonText()
    {
        var bstText = "维度提升以获得<h3>"
        bstText += this.getResetGain().toFixed(6)
        bstText += "</h3>助推器"
        if(hasMilestone("p",3))
        {
            bstText += "<br>下一个在：<h3>"
        }
        else
        {
            bstText += "<br>需要：<h3>"
        }
        bstText += player.points.toFixed(6)
        bstText += "/<br>"
        bstText += this.getNextAt().toFixed(6)
        bstText += "</h3>序数点"
        return bstText
    },
    getResetGain()
    {
        if(hasMilestone("b",3))
        {
            if(this.canReset())
            {
                return player.points.div(ExpantaNum(3).pow(30)).logBase(ExpantaNum(3).pow(75)).floor().sub(player.b.points)
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
        if(hasMilestone("b",3))
        {
            return ExpantaNum(3).pow(30).mul(ExpantaNum(3).pow(75).pow(player.b.points.add(this.getResetGain()).add(1)))
        }
        else
        {
            return ExpantaNum(3).pow(30).mul(ExpantaNum(3).pow(75).pow(player.b.points.add(1)))
        }
    },
    canReset()
    {
        return player.points.gte(ExpantaNum(3).pow(30).mul(ExpantaNum(3).pow(75).pow(player.b.points.add(1))))
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
        {key: "b", description: "B：维度提升", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.points.gte(1e30) || player.b.points.gte(1) || hasMilestone("b",0)},
    update(diff){
        player.b.dist = player.b.dist.add(player.b.bstBase.pow(player.b.points).sub(1).mul(diff))
    },
    milestones: {
        0: {
            requirementDescription: "1助推器",
            effectDescription: "解锁维度献祭，你可以自动购买序数维度O<sub>1~4</sub>",
            done() { return player.b.points.gte(1) }
        },
        1: {
            requirementDescription: "3助推器",
            effectDescription: "你可以自动购买序数维度O<sub>5~8</sub>",
            done() { return player.b.points.gte(3) }
        },
        2: {
            requirementDescription: "5助推器",
            effectDescription: "你可以自动购买序数维度驱动器",
            done() { return player.b.points.gte(5) }
        },
        3: {
            requirementDescription: "8助推器",
            effectDescription: "你可以购买最大助推器",
            done() { return player.b.points.gte(8) }
        }
    },
})
