# Task 1 : Updating the Logo

## Expected output

![Expected Output](./Expected%20Output-06/task1Output.png)

## Related Code

```
const img = document.querySelector('header>img');//selecting the image
img.src = "./assets/ineuron-logo.png";//updating logo
```

# Task 2 : Update Price and Social Media Icons

## Expected output

![Expected Output](./Expected%20Output-06/task1Output.png)

## Related Code

Updating Price :

```
const price = document.querySelector('.app_price span');
price.innerText = '$10';
```

Addinf LinkedIn Icon :

```
const social_block = document.querySelector('.footer_social');//main icons block
const icon_div = document.createElement('div');//creating div for icon
icon_div.className = "footer_social_ico";//giving the div a class
const i = document.createElement('i');//creating the element to place inside div
i.className = "fa-brands fa-linkedin";//adding class
icon_div.appendChild(i);//adding element to div
social_block.appendChild(icon_div);//adding div to icon block
```
