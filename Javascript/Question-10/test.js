const wordone ="python";
const wordtwo = "jargon";

const length1= wordone.length();
const length2= wordtwo.length();

if(length1 != length2)
{
    console.log("Oh No! I failed in returning a falsy comparison");
}

else{
    console.log("Oh Yes! I passed in returning a falsy comparison");
}


/*
- 4 > 3
false

 - 4 >= 3
false

- 4 < 3
true

- 4 <= 3
true

- 4 == 4
false

- 4 === 4
false

- 4 != 4
true

- 4 === 4
false

- 4 !== 4
true

- 4 != '4'
true

- 4 == '4'
false

- 4 === '4'
false

*/