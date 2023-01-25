
let bodyVar = document.querySelector('body');// we can also use html here if the body is empty so that we target the entire thing even if empty
//document.querySelector('html')
bodyVar.addEventListener("click", function addElementToBody(e){
    const circle = document.createElement("div"); // creating the element

    //styling the element
    circle.style.position = "absolute"; // the circle will display relative to the position of it's parent i.e the body
    circle.style.height ="40px" ; //giving width and height to the element so that it displays
    circle.style.width ="40px";
    circle.style.borderRadius = "50%"; // making a circle out of the div
    circle.style.backgroundColor = randomColorGenerator (); // giving it random colors
    
    //finding the co-ordinates of the click to display div where the mouse clicks
    circle.style.left = e.clientX + "px";
    circle.style.top = e.clientY + "px";
    
    bodyVar.appendChild(circle);
    
    // making it disappear in 1sec
    setTimeout(() => { circle.remove();}, 1000);

});

// X and Y position of the click event, the returned value is relative to the element clicked on thus this is a partially correct value now in order to accurately find 
//the value we find its position based on the top-left corner of document

function randomColorGenerator (){
    let val = '0123456789ABCDEF';
    let cons ='#';
    for(let i =0;i<6;i++){
        cons = cons + val[Math.floor(Math.random()*16)];
    }
    return  cons;
}
