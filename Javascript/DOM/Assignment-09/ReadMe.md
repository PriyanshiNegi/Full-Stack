# Task 1 : Updating Title Color


## Expected output

![Expected Output](./ass9.1-after.png)

## Related Code

```
const title = document.querySelector('h1.title');//selecting element
title.style.color ='red';//coloring it red
```
# Task 2 : Change the button color on hover


## Expected output

![Expected Output](./ass9.2-after.png)

## Related Code

```
const button = document.querySelector('.add-to-cart');
button.addEventListener('mouseover', function(){//mouseover will keep it red once the mouse hovers over it
    button.style.backgroundColor = 'red';
    });


<!-- button.addEventListener("mouseenter" , ()=>{//will make the button red as soon as the move enters
    button.style.backgroundColor = "red";
})

button.addEventListener("mouseleave" , () =>{//and turn it green as soon as the move leaves
    button.style.backgroundColor = "green";
}
) -->
```