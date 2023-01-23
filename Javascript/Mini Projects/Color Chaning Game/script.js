const butt = document.getElementById('button');

function randomColor = () =>{//generating random numbers on the button click
    let val = '0123456789ABCDEF';//these are total characters that can make a hexcode for color
    let cons ='#';
    for(let i =0;i<6;i++){//there are 6 characters in a hexcode value for color
        cons = cons + val[Math.floor(Math.random()*16)];
    }
}



// butt.addEventListener("onclick",colorchange);
// function colorchange(){
//  document.style.backgroundColor = lavender;
// }