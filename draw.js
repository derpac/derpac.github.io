const canvas = document.getElementById("drawingboard");
const brush = document.getElementById("brush");
// const eraser = document.getElementById("eraser");
const ctx = canvas.getContext("2d");


// derpacdown code ---------------------------------

const container = document.getElementById("flex-container");
title = ["d","e","r","p","a","c",".","c","o","m","","i","s","","d","o","w","n"];
const weirdCharacters = "!@#$%^&*()_+-=<>?[]{}|~><.,derpac";

function getRandomCharacter() {
    return weirdCharacters[Math.floor(Math.random() * weirdCharacters.length)];
}

for(let i = 0; i < title.length; i++){
    let letter = document.createElement("h1");
    letter.id = (i);
    letter.className = "letter";
    letter.textContent = title[i] === "" ? '\u00A0' : title[i];
    container.appendChild(letter);

    letter.addEventListener('mouseover', function() {
        this.originalText = this.textContent;  // Store the original text
        this.textContent = getRandomCharacter();
    });

}




//---------------------------------





// vertical and horizontal offsets:
// these should be 0
const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

// obtain the canvas width and height (these should be maximum)

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPaintingM = false;
let isPaintingT = false;
let lineWidth = 48;
let startX;
let startY;
ctx.strokeStyle = "#d45500";


const saveImage = event => {
    console.log("save");
    let link = document.createElement("a");
    let image = canvas.toDataURL("image/png");
    link.download = "canvas.png";
    link.href = image;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const draw = (e) => {
    if(!isPaintingM && !isPaintingT){
        return;
    }
    else if(isPaintingM){
        console.log("drawing", ctx.strokeStyle, lineWidth);
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke();
    }
    else if(isPaintingT){
        console.log("touchmove");
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.lineTo(e.touches[0].clientX,e.touches[0].clientY);
     //   ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke();
    
    }
    }                             // add whole new one for touch and one for mouse painting..

// canvas.addEventListener("mousedown", (e) => {
//     isPaintingM = true;
//     startX = e.clientX;
//     startY = e.clientY;
// });

// canvas.addEventListener("mouseup", (e) => {
//     isPaintingM= false;
//     ctx.stroke();
//     ctx.beginPath();
// });
// eraser.addEventListener("mouseup", (e) => {
//     isPaintingM = false;
//     ctx.stroke();
//     ctx.beginPath();
// });

canvas.addEventListener("mousemove", draw);

// brush.addEventListener("click", e => {

//     if(e.currentTarget.id === "orange"){
//         ctx.strokeStyle = "#d45500";
//         console.log(ctx.strokeStyle);
//     }
//     else if(e.currentTarget.id === "eraser"){
//         ctx.strokeStyle = "#fefefe";
//         console.log(ctx.strokeStyle);
//     }
//     else if(e.target.id === "bloodorange"){
//         ctx.strokeStyle = "#ff3e31";
//     }
//     else if(e.target.id === "lime"){
//         ctx.strokeStyle = "#44aa00";
//     }
//     else if(e.target.id === "lemon"){
//         ctx.strokeStyle = "#ffcc00";
//     }
 
    
// });

canvas.addEventListener("mousedown", (e) => {
    isPaintingM = true;
    startX = e.clientX;
    startY = e.clientY;
    //console.log("touch");
});

canvas.addEventListener("mouseup", (e) => {
    isPaintingM = false;
    ctx.stroke();
    ctx.beginPath();
});

// brush.addEventListener("mousedown", (e) => {
//     ctx.strokeStyle = e.target.value;
//     isPaintingM = true;
//     startX = e.clientX;
//     startY = e.clientY; 
// });
// eraser.addEventListener("mousedown", (e) => {
//     isPaintingM = true;
//     ctx.strokeStyle = "#fefefe";
//     startX = e.clientX;
//     startY = e.clientY;
//     console.log("mousedown");
// });




//brush.addEventListener("mousemove", draw);
//eraser.addEventListener("mousemove", draw);


// mobile friendly mode: 
//  - dont use draggable just use finger on canvas
//  - select mode by tapping the orange or eraser
//  - normal event listner for canvas

//canvas.addEventListener("touchmove", draw);

// canvas.addEventListener("touchmove", e => {
//     console.log("Move");
// });

// brush.addEventListener("touchstart", (e) => {
//     ctx.strokeStyle = "#d45500";
//     lineWidth = 48;

// });

canvas.addEventListener("touchmove", draw);

brush.addEventListener("touchstart", (e) => {
   
    
});

canvas.addEventListener("touchstart", (e) => {
    isPaintingT = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    //console.log("touch");
});

canvas.addEventListener("touchend", (e) => {
    isPaintingT = false;
    ctx.stroke();
    ctx.beginPath();
});


