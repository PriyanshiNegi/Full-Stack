# Task : 

## Expected output

![Expected Output](./Expected%20Output-04/task1Output.png)

## Related Code

```
<!-- Method One -->

const block_barbarian = document.querySelector('.clash-card__unit-stats--barbarian');//selecting barabarian block
block_barbarian.style.background = "#EC9B3B";

const block_archer= document.querySelector('.clash-card__unit-stats--archer');//selecting archer block
block_archer.style.background = "#EE5487";

const block_giant = document.querySelector('.clash-card__unit-stats--giant');//selecting giant block
block_giant.style.background = "#F6901A";

const block_goblin = document.querySelector('.clash-card__unit-stats--goblin');//selecting goblin block
block_goblin.style.background = "#82BB30";

const block_wizard = document.querySelector('.clash-card__unit-stats--wizard');//selecting wizard block
block_wizard.style.background = "#4FACFF";

const text_div = document.querySelectorAll('.one-third div');//selecting all text blocks
text_div.forEach((element)=> element.style.color = 'white');


<!-- Method Two -->

let clearfix = document.querySelectorAll(".clearfix");//referencing clearfix

let text_div = document.querySelectorAll(".one-third div");// Generating the reference to div of .one-third

let arr = ["#EC9B3B", "#EE5487", "#F6901A", "#82BB30", "#4FACFF"];// storing all colors together

for(let i=0; i<5; i++){// coloring all background of deatils in card
clearfix[i].style.background = arr[i];
}

text_div.forEach((element) =>{element.style.color="#fff";})//changing color

```