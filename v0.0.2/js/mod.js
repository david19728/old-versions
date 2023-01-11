let modInfo = {
	name: "序数维度树增量",
	id: "odm-tree",
	author: "david19728",
	pointsName: "序数点",
	discordName: "",
	discordLink: "",
	initialStartPoints: new ExpantaNum (10), // Used for hard resets and new players
	
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.0.2",
	name: "维度更新",
}

let changelog = `<h1>Changelog:</h1><br>
	如果你发现了一个bug或者平衡性问题，把它发在<a href="https://tieba.baidu.com/p/8146795633">这里</a>！<br>
	<h3>v0.0.2-"维度更新"</h3><br>
		- 添加8个序数维度（O<sub>1~8</sub>）。<br>
	<h3>v0.0.1 Patch 1-"葛立恒更新"</h3><br>
		- 转移到unsoftcapped3的模组树ExpantaNum。(数字极限:F1.79e308->K9e15)<br>
		- 添加版本列表。<br>
	<h3>v0.0.1-"初始版本"</h3><br>
		- 添加序数点。`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

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
	gain = gain.times(new ExpantaNum(1.5).pow(getBuyableAmount("o",11).div(10).floor()))
	gain = gain.times(d2mult)
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
	return player.points.gte(new ExpantaNum(1e20))
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