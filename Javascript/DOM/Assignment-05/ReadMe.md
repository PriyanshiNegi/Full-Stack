# Task : Adding 'Pro Subscripton' Button and 6th card

## Expected output

![Expected Output](./Expected%20Output-05/task1Output.png)

## Related Code

Adding 'Pro Subscription' Button :

```
<!-- Method 1 -->

const button = document.createElement('button');//create button
button.innerText='Pro Subscription';//add text for button
const navcentered = document.querySelector('.nav-center');//select area to add button
navcentered.appendChild(button);//add button
button.className ='btn'; //adjusting class for the look

<!-- Method 2 -->

const button = document.createElement('div');//keeping the actual code for the site already present in mind creating div
button.innerHTML = '<a href="index.html" class="btn">Pro Subscription</a>';//adding the HTML similar to contact button
const navcentered = document.querySelector('.nav-center');//selecting area to add button div
navcentered.appendChild(button);//adding button

<!-- Method 3 -->

let div = document.querySelector(".nav-center div:nth-child(3)");//selecting place to add button in div

//creating and adding contents accordingly to 'a' tag that will be needed
let a = document.createElement("a");
a.href = "index.html";
a.className = "btn";
a.innerText = "Pro Subscription";
div.append(a);//adding at correct place
```
Adding sixth card :

```
<!-- Method 1 -->

const div = document.createElement('div');//creating div
div.innerHTML = '<div class="card"><a href="#" class="recipe-text"><img src="./img/recipe-1.jpeg" class="recipe-img" /><h5 class="recipe-name">Chicken</h5><p class="recipe-disp">Prep : 15min | Cook : 30min</p></a></div>';//adding HTML as present in index.html
const block = document.querySelector('.recipe-gallery');//selecting place to add this card
block.appendChild(div);//adding card at right place

<!-- Method 2 -->

let recipeGallery = document.querySelector(".recipe-gallery");// where to add

<!-- Creating the content to add inside this recipeGallery -->

// creating recipe card
let card = document.createElement("div");
card.className = "card";

// creating a tag for card
let a = document.createElement("a");
a.href = "#"
a.className = "recipe-text";

// creating image 
let img = document.createElement("img");
img.src = "./img/recipe-2.jpeg";
img.className = "recipe-img";

// creating h5
let h5 = document.createElement("h5");
h5.className = "recipe-name";
h5.innerText = "Sahi Paneer";

// creaing para
let p = document.createElement("p");
p.className = "recipe-disp";
p.innerText = "Prep : 25min | Cook : 45min"; 

a.append(img);
a.append(h5);
a.append(p);
card.append(a);
recipeGallery.append(card);
```

Adding Receipe to the Options :

```
const a = document.createElement('a');//creating anchor tag
a.href ='#';//giving href link
a.innerText ='Chinese(7)';//adding text
const div = document.querySelector('.tags-container> div');//selecting where to add
div.appendChild(a);//adding anchor tag
```