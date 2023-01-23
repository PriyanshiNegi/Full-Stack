let num = prompt("Enter a number for pattern");

//Triangle
console.log("Triangle Pattern");
for(let i=1; i<=num; i++)
{
    let patternone = "";
    for(let j=1; j<=i; j++){
        patternone = patternone +" * ";
    }
    console.log(patternone);//since console.log() always prints in a single line
}

//Square
console.log("Square Pattern");
for(let i=1; i<=num; i++)
{
    let patterntwo = "";
    for(let j=1; j<=num; j++){
        patterntwo = patterntwo +" * ";
    }
    console.log(patterntwo);
}

//Pyramid
console.log("Pyramid Pattern");
for(let i=1; i<=num; i++)
{
    //blank space
    let patternthree = "";
    for(let j=num-1; j>=i; j--){
        patternthree = patternthree +" ";
    }
    //pattern
    for(let k=1; k<=i;k++){
        patternthree = patternthree +" * ";
    }
    console.log(patternthree);
}
