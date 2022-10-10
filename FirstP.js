// Select The Start Game Button
document.querySelector(".control-button span").onclick = function(){
// Prompt For Name
var yourName = prompt("What's Your Name?")
// If Name Is Empty
if (yourName == null || yourName == ""){
    document.querySelector(".name span").innerHTML = "uknown"
    }
// Name Is Not Empty Set It To Your Name
else {
    document.querySelector(".name span").innerHTML = yourName
    }
// Remove Splash Screen
document.querySelector(".control-button").remove()
}
//Effect Duration
var duration = 1000

//Select Block Containers
var blockContainer = document.querySelector(".memory-game-blocks")

//Create Array From Game Blocks 
var blocks = Array.from(blockContainer.children)

// Create Range Of Keys
var orderRange = Array.from(Array(blocks.length).keys())
console.log(orderRange)


