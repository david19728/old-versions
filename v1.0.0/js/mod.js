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
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new ExpantaNum(0)

	let gain = new ExpantaNum(1)
	gain = gain.times(getBuyableAmount("o",11))
	gain = gain.times(ExpantaNum(1.5).pow(getBuyableAmount("o",11).div(10).floor()))
	gain = gain.times(player.o.d2mult)
	gain = gain.times(ExpantaNum(5).pow(player.p.points))
	gain = gain.times(player.b.dist.add(1).sqrt())
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.p.points.gte(8) && player.b.points.gte(8)
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