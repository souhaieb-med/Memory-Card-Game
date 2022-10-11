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
//var orderRange = [...Array(blocks.length).keys()]    with the spread function 
var orderRange = Array.from(Array(blocks.length).keys())

//console.log(orderRange)
shuffle(orderRange)
//console.log(orderRange)

// Add Css Property
blocks.forEach((block, index) =>{
 block.style.order = orderRange[index]

// Add Click Event
block.addEventListener('click', function(){

    flipBlock(block)
})
})

// Flip Block Function
function flipBlock(selectedBlock){
    // Add class is-flipped
    selectedBlock.classList.add('is-flipped')
    //Collect All Flipped Card
    var allFlippedBlocks = blocks.filter(flippedBlock=> flippedBlock.classList.contains('is-flipped'))

    //
    if(allFlippedBlocks.length === 2){

        // Stop Clicking Function
        stopClicking()
        //Check Matched Block Function
        checkMatchedBlocks(allFlippedBlocks[0],allFlippedBlocks[1])

    }
}
// Stop Clicking Function 
function stopClicking(){
    // Add Class no Clinking on Main container
    blockContainer.classList.add('no-clicking')

    // Set Time For The Clicked Ones
    setTimeout(()=>{
    // Remove Class no Clicking After The Duration
    blockContainer.classList.remove('no-clicking')
    
    },duration)
}

//Check Matched Block Function 

function checkMatchedBlocks(firstBlock, secondBlock){
    var triesElement = document.querySelector('.tries span')
    if(firstBlock.dataset.social === secondBlock.dataset.social){
        // Remove The Class is-flipped And Assign It To Has Matched
        firstBlock.classList.remove('is-flipped')
        secondBlock.classList.remove('is-flipped')

        firstBlock.classList.add('has-matched')
        secondBlock.classList.add('has-matched')
    }
    else {
        //Add 1 To tries If Not Matched
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1

        setTimeout(()=>{
            firstBlock.classList.remove('is-flipped')
            secondBlock.classList.remove('is-flipped')
        },duration)
    }

}
// Shuffle Function
function shuffle(array){
    var current = array.length 
    var temp = 0
    var random  = 0
while(current> 0){
// Get Random Number
random = Math.floor(Math.random() * current)
//console.log(random)

current-- 

//save current Element in arr 
temp = array[current] 

//actual element = random element
array[current] = array[random]

//random element = current Element in arr 
array[random] = temp

}}





