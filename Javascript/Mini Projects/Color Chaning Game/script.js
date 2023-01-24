const butt = document.getElementById('button');//grab the element

butt.addEventListener("click", colorChange );//what should happen when to the grabbed element

function randomColor (){//generating random numbers on the button click
    let val = '0123456789ABCDEF';//these are total characters that can make a hexcode for color
    let cons ='#';
    for(let i =0;i<6;i++){//there are 6 characters in a hexcode value for color
        cons = cons + val[Math.floor(Math.random()*16)];
        //Example String = "Priyanshi"
        // String[4] which is 'a'
    }
    return  cons; //this has random HEX value combination from the loop
}

function colorChange(){
 document.body.style.backgroundColor = randomColor(); 
}

/*
HEX value generation
val[Math.floor(Math.random()*16)]

Math.random()---gives randm values between 0-0.99 (ex-0.768)
0.768*16 = 12.288

16 since there are 16 characters

Math.floor(12.288)=12

val[12] = B

#B this continues for 6 times total for the hex code
*/