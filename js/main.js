console.log('JavaScript is running!'); 

/* this is a JS block comment

the let statement creates a variable - a chunk of computer memory that can hold references to data that you want to save, we're starting a reference to an element on the page with this line - we're telling JavaScript to look for the element with the ID we specify inside of the round branches (the image tag with the ID of bimapGrphic)

document refers to the index.html pagel querySelection is HOW JS uses CSS to select elements on the page (called a method)
*/
 


let coolBlueSun = document.querySelector("#coolBlueSun")
document.querySelector("#coolBlueSun");

let coolPinkFlower = document.querySelector("#coolPinkFlower")
document.querySelector("#coolPinkFlower");

let coolCactus = document.querySelector("#coolCactus")
document.querySelector("#coolCactus");

let coolColourfulFlowers = document.querySelector("#coolColourfulFlowers")
document.querySelector("#coolColourfulFlowers");

let coolSunnyCloud = document.querySelector("#coolSunnyCloud")
document.querySelector("#coolSunnyCloud");

let coolRainyCloud = document.querySelector("#coolRainyCloud")
document.querySelector("#coolRainyCloud");

let coolFunkyTree = document.querySelector("#coolFunkyTree")
document.querySelector("#coolFunkyTree");

let coolMusicNote = document.querySelector("#coolMusicNote")
document.querySelector("#coolMusicNote");

let coolLightningBolt = document.querySelector("#coolLightningBolt")
document.querySelector("#coolLightningBolt");

let coolStarryMoon = document.querySelector("#coolStarryMoon")
document.querySelector("#coolStarryMoon");

// step 3 - what happens when events are triggered? 
function logID() {
    console.log('Clicked on this Desert Festival icon:', this.id);(this.id); 
}


// step 2 - how do you want the user to interact with the element? 

coolBlueSun.addEventListener('click', logID); 

coolPinkFlower.addEventListener('click', logID); 

coolCactus.addEventListener('click', logID); 

coolColourfulFlowers.addEventListener('click', logID); 

coolSunnyCloud.addEventListener('click', logID); 

coolRainyCloud.addEventListener('click', logID);

coolFunkyTree.addEventListener('click', logID);

coolMusicNote.addEventListener('click', logID);

coolLightningBolt.addEventListener('click', logID);

coolStarryMoon.addEventListener('click', logID);














