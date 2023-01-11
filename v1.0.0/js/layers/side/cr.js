addLayer("cr", {
    name: "credits", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Cr", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new ExpantaNum(0),
    }},
    color: "#00FF00",
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
    row: "side", // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
    ],
    layerShown(){return true},
    tooltip()
    {
        return "鸣谢"
    },
    infoboxes: {
        1: {
            title: "鸣谢",
            body() {
                var t1display = "<a href='https://github.com/Naruyoko/ExpantaNum.js'>ExpantaNum.js</a> 由Naruyoko开发<br>"
                t1display += "<a href='https://patcailmemer.github.io/Ordinal-Markup/'>序数增量</a> 由Patcail开发<br>"
                t1display += "<a href='https://spotky1004.com/Spotkys-mod-hub/Ordinal-Markup/Ordinal-Dimensions/'>序数维度</a> 由Spotky1004开发<br>"
                t1display += "<a href='https://ivark.github.io/'>反物质维度</a> 由Hevipelle开发<br>"
                t1display += "<a href='https://aarextiaokhiao.github.io/NG-plus-3/'>反物质维度NG+3</a>&<a href='https://aarextiaokhiao.github.io/IvarK.github.io/'>NG+3R</a> 由Aarex Tiaokhiao开发<br>"
                t1display += "<a href='https://jacorb90.me/Prestige-Tree-Classic/'>声望树经典版</a>&<a href='https://jacorb90.me/Prestige-Tree/'>重制版</a> 由Jacorb90开发<br>"
                t1display += "<a href='https://github.com/Acamaeda/The-Modding-Tree'>模组树</a> 由Acamaeda开发<br>"
                t1display += "<a href='https://github.com/unsoftcapped3/The-Modding-Tree-ExpantaNum'>模组树ExpantaNum</a> 由unsoftcapped3开发<br>"
                t1display += "<a href='https://raw.githack.com/jasperfr/The-Modding-Tree/master/index.html'>反物质维度树</a> 由JasperFR开发<br>"
                t1display += "<a href='https://qq1010903229.github.io/Prestige-Tree-Dimensions/'>声望树：维度重写</a> 由qq1010903229开发<br>"
                return t1display
            },
        },
    },
    tabFormat: {
        "鸣谢": {
            content: [["infobox",1]],
        },
    }
})