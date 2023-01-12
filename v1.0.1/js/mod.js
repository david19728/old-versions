let modInfo = {
	name: "序数维度树增量",
	id: "odm-tree",
	author: "david19728",
	pointsName: "序数点",
	discordName: "",
	discordLink: "",
	initialStartPoints: new ExpantaNum (10), // Used for hard resets and new players
	
	offlineLimit: 8760,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.0.0",
	name: "阶层2更新",
}

let changelog = `如果你发现了一个bug或者平衡性问题，把它发在<a href="https://tieba.baidu.com/p/8146795633">这里</a>！<br>
	<h1>Changelog:</h1><br>
    <h3>v1.0.1-"统计更新"</h3><br>
        - 优化了统计和formatTime()函数。<br>
		- 添加了4个声望升级和4个助推器升级。<br>
		- 重新平衡了自动化燃料的价格。<br>
        - 当前结局：购买“名誉的神话”和“升维”升级（需10声望点和10助推器≈1.43e372序数点）<br>
	<h1>v1.0.0-"阶层2更新"</h1><br>
        - 将ExpantaNum更新到最新。（α1.1.1→α1.3.10）<br>
		- 添加序数维度献祭。<br>
		- 添加声望和4个声望里程碑。<br>
		- 添加助推器和4个助推器里程碑。<br>
		- 添加统计。<br>
		- 添加自动化。<br>
		- 添加鸣谢。<br>
		- 将离线进度上限从默认的1小时提高到1年。<br>
		- 当前结局：8声望点 && 8助推器（≈3.86e300序数点）<br>
    <h3>v0.0.3-"驱动器更新"</h3><br>
        - 添加序数维度驱动器。<br>
        - 当前结局：3<sup>105</sup>≈1.25e50序数点<br>
	<h3>v0.0.2-"维度更新"</h3><br>
		- 添加8个序数维度（O<sub>1~8</sub>）。<br>
		- 当前结局：1e20序数点<br>
	<h3>v0.0.1 Patch 1-"葛立恒更新"</h3><br>
		- 转移到unsoftcapped3的模组树ExpantaNum。(数字极限:F1.79e308->K9e15)<br>
		- 添加版本列表。<br>
		- 当前结局：10序数点<br>
	<h3>v0.0.1-"初始版本"</h3><br>
		- 添加序数点。<br>
		- 当前结局：10序数点`

let winText = `祝贺你通关了这个游戏！`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new ExpantaNum(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return getBuyableAmount("o",11).gte(1)
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new ExpantaNum(0)

	let gain = new ExpantaNum(1)
	gain = gain.times(getBuyableAmount("o",11))
	gain = gain.times(ExpantaNum(1.5).pow(getBuyableAmount("o",11).div(10).floor()))
	gain = gain.times(player.o.d2mult)
	gain = gain.times(player.p.prsBase.pow(player.p.points))
	gain = gain.times(player.b.dist.add(1).sqrt())
	if(hasUpgrade("p",11))
    {
        gain = gain.times(getBuyableAmount("o",18).add(1).pow(3))
    }
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	function()
	{
		if(player.points.lte(30000))
		{
			return "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(500) + "个前子。（大小500幺米）"
		}
		else if(player.points.lte(1200000))
		{
			return "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(30000) + "个底夸克。（大小30泽米）"
		}
		else if(player.points.lte(1.7e9))
		{
			return "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(1200000) + "个电子。（大小1.2阿米）"
		}
		else if(player.points.lte(2.4e14))
		{
			return "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(1.7e9) + "个质子。（大小1.7飞米）"
		}
		else if(player.points.lte(1e17))
		{
			return "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(2.4e14) + "个氢原子。（大小240皮米）"
		}
		else if(player.points.lte(1.5e18))
		{
			return "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(1e17) + "个PVC分子。（大小100纳米）"
		}
		else if(player.points.lte(3e21))
		{
			return "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(1.5e18) + "个Y染色体。（大小1.5微米）"
		}
		else if(player.points.lte(1e25))
		{
			return "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(3e21) + "只蚂蚁。（大小3毫米）"
		}
		else if(player.points.lte(5.2e27))
		{
			return "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(1e25) + "棵树。（高10米）"
		}
		else if(player.points.lte(1.27e30))
		{
			return "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(5.2e27) + "个PSR B0493+10。（位于狮子座的微型脉冲星，直径5.2千米）"
		}
		else if(player.points.lte(1.39e32))
		{
			return "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(1.27e30) + "个地球。（直径12742千米）"
		}
		else if(player.points.lte(1.21e33))
		{
			return "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(1.39e32) + "个太阳。（直径1392700千米）"
		}
		else if(player.points.lte(1.61e41))
		{
			return "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(1.21e33) + "个太阳系。（直径12132650千米）"
		}
		else if(player.points.lte(8.798e46))
		{
			return "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(1.61e41) + "个银河系。（直径170000光年）"
		}
		else if(player.points.lte(1e60))
		{
			return "如果你的每个序数点大小为1幺米，那么你可以制造" + player.points.div(8.798e46) + "个可观测宇宙。（直径9.3e10光年）"
		}
		else
		{
			return "如果你每秒写一个数字，那么写下你的序数点数量（不用科学计数法）需要" + formatTime(player.points.logBase(10)) + "。"
		}
	}
]

// Determines when the game "ends"
function isEndgame() {
	return hasUpgrade("p",14) && hasUpgrade("b",14)
}



// Less important things beyond this point!

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}