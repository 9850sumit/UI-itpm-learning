// // 1. createElement + appendChild
// // Task:

const { createElement, Children } = require("react");

// Create a button that, when clicked, adds a new <li> element with the text "New Item" to an existing <ul>.
let node = document.createElement("li");
let textNode=document.createTextNode("6");
node.appendChild(textNode);
document.getElementById("demo").appendChild(node);




// // 2. createTextNode + appendChild
// // Task:
// // Create a <div> and add a text node to it using createTextNode. The text should say "Hello, this is a new div."

// let newDiv = document.createElement("div");
// let divTextNode = document.createTextNode("hello this is a div");

// newDiv.appendChild(divTextNode)
// document.body.appendChild(newDiv);






//  3. insertBefore
// Task:
// Create three <p> tags. Insert a new <p> with the text "Inserted Paragraph" before the second paragraph using insertBefore.

// let newP = document.createElement("p");
// let pTextNode= document.createTextNode("hello i am inserted before 2 children of p");

// newP.appendChild(pTextNode);

// let getIdMain = document.getElementById("pDemo");
// getIdMain.insertBefore(newP,getIdMain.children[2])


//  4. removeChild
// Task:
// Add three list items inside a <ul>. Create a button that removes the last list item when clicked using removeChild.
let targateId = document.getElementById("demo");
console.log(targateId);
targateId.removeChild(targateId.lastElementChild)

// 5. replaceChild
// Task:
// Create a heading <h2> with the text "Old Heading". Replace it with a new <h2> element with the text "New Heading" using replaceChild.

let newHeading= document.createElement("h2");
let newHeadingText = document.createTextNode("New Heading");
newHeading.appendChild(newHeadingText);
let oldHEding = document.getElementById("oldHeading");
oldHEding.replaceWith(newHeading)

