addLayer("st", {
    name: "statistics", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "📊", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new ExpantaNum(0),
    }},
    color: "#FFFFFF",
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
        return "统计"
    },
    infoboxes: {
        1: {
            title: "阶层1",
            body() {
                var t1display = "你有" + player.points + "序数点<br>"
                if(getBuyableAmount("o",11).gte(1))
                {
                    t1display += "你有" + getBuyableAmount("o",11) + "序数维度O<sub>1</sub><br>"
                }
                if(getBuyableAmount("o",12).gte(1))
                {
                    t1display += "你有" + getBuyableAmount("o",12) + "序数维度O<sub>2</sub><br>"
                }
                if(getBuyableAmount("o",13).gte(1))
                {
                    t1display += "你有" + getBuyableAmount("o",13) + "序数维度O<sub>3</sub><br>"
                }
                if(getBuyableAmount("o",14).gte(1))
                {
                    t1display += "你有" + getBuyableAmount("o",14) + "序数维度O<sub>4</sub><br>"
                }
                if(getBuyableAmount("o",15).gte(1))
                {
                    t1display += "你有" + getBuyableAmount("o",15) + "序数维度O<sub>5</sub><br>"
                }
                if(getBuyableAmount("o",16).gte(1))
                {
                    t1display += "你有" + getBuyableAmount("o",16) + "序数维度O<sub>6</sub><br>"
                }
                if(getBuyableAmount("o",17).gte(1))
                {
                    t1display += "你有" + getBuyableAmount("o",17) + "序数维度O<sub>7</sub><br>"
                }
                if(getBuyableAmount("o",18).gte(1))
                {
                    t1display += "你有" + getBuyableAmount("o",18) + "序数维度O<sub>8</sub><br>"
                }
                if(getBuyableAmount("o",21).gte(1))
                {
                    t1display += "你有" + getBuyableAmount("o",21) + "序数维度驱动器，将你的所有维度乘以" + ExpantaNum(2.5).pow(getBuyableAmount("o",21)) + "×<br>"
                }
                if(hasMilestone("b",0))
                {
                    t1display += "维度献祭将你的序数维度O<sub>8</sub>乘以" + player.o.sacMult + "×"
                }
                if(player.points.lte(30000))
                {
                    t1display += "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(500) + "个前子。（大小500幺米）"
                }
                else if(player.points.lte(1200000))
                {
                    t1display += "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(30000) + "个底夸克。（大小30泽米）"
                }
                else if(player.points.lte(1.7e9))
                {
                    t1display += "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(1200000) + "个电子。（大小1.2阿米）"
                }
                else if(player.points.lte(2.4e14))
                {
                    t1display += "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(1.7e9) + "个质子。（大小1.7飞米）"
                }
                else if(player.points.lte(1e17))
                {
                    t1display += "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(2.4e14) + "个氢原子。（大小240皮米）"
                }
                else if(player.points.lte(1.5e18))
                {
                    t1display += "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(1e17) + "个PVC分子。（大小100纳米）"
                }
                else if(player.points.lte(3e21))
                {
                    t1display += "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(1.5e18) + "个Y染色体。（大小1.5微米）"
                }
                else if(player.points.lte(1e25))
                {
                    t1display += "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(3e21) + "只蚂蚁。（大小3毫米）"
                }
                else if(player.points.lte(5.2e27))
                {
                    t1display += "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(1e25) + "棵树。（高10米）"
                }
                else if(player.points.lte(1.27e30))
                {
                    t1display += "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(5.2e27) + "个PSR B0493+10。（位于狮子座的微型脉冲星，直径5.2千米）"
                }
                else if(player.points.lte(1.39e32))
                {
                    t1display += "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(1.27e30) + "个地球。（直径12742千米）"
                }
                else if(player.points.lte(1.21e33))
                {
                    t1display += "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(1.39e32) + "个太阳。（直径1392700千米）"
                }
                else if(player.points.lte(1.61e41))
                {
                    t1display += "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(1.21e33) + "个太阳系。（直径12132650千米）"
                }
                //1光年=9.46e35幺米
                else if(player.points.lte(8.798e46))
                {
                    t1display += "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(1.61e41) + "个银河系。（直径170000光年）"
                }
                else if(player.points.lte(1e60))
                {
                    t1display += "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(8.798e46) + "个可观测宇宙。（直径9.3e10光年）"
                }
                else
                {
                    t1display += "如果你每秒写一个数字，那么写下你的序数点数量（不用科学计数法）需要" + player.points.logBase(10).div(60) + "分钟。"
                }
                return t1display
            },
        },
        2: {
            title: "阶层2",
            body() {
                var t2display = "你有" + player.p.points + "声望点"
                if(player.p.points.gte(1))
                {
                    t2display += "，将你的所有维度乘以" + ExpantaNum(5).pow(player.p.points).toFixed(6) + "×"
                }
                t2display += "<br>你有" + player.b.points + "助推器"
                if(player.b.points.gte(1))
                {
                    t2display += "，生成"
                    t2display += ExpantaNum(5).pow(player.b.points).sub(1).toFixed(6)
                    t2display += "米距离每秒<br>你有"
                    t2display += player.b.dist.toFixed(6)
                    t2display += "米距离，将你的所有维度乘以"
                    t2display += player.b.dist.add(1).sqrt().toFixed(6)
                    t2display += "×"
                }
                t2display += "<br>你的声望点和助推器对序数维度的总增幅为："
                t2display += ExpantaNum(5).pow(player.p.points).mul(player.b.dist).toFixed(6)
                t2display += "×"
                if(ExpantaNum(5).pow(player.p.points).gte(player.b.dist.add(1).sqrt()))
                {
                    t2display += "<br>你的声望点对序数维度的增幅更强，比助推器强"
                    t2display += ExpantaNum(5).pow(player.p.points).div(player.b.dist.add(1).sqrt()).toFixed(6)
                    t2display += "倍"
                }
                else
                {
                    t2display += "<br>你的助推器对序数维度的增幅更强，比声望点强"
                    t2display += player.b.dist.add(1).sqrt().div(ExpantaNum(5).pow(player.p.points)).toFixed(6)
                    t2display += "倍"
                }
                return t2display
            },
        },
    },
    tabFormat: {
        "阶层1": {
            content: [["infobox",1]],
        },
        "阶层2": {
            content: [["infobox",2]],
        },
    }
})
