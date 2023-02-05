# Task 1 : 

## Expected output

![Expected Output](./Expected%20Output-02/task1Output.png)

## Related Code

```
const title = document.querySelectorAll('h3');//selecting all the h3 available this will give them as a NodeList from which one element will have to be picked at a time
title.forEach((element)=> element.style.background = '#DADAF8');
```

# Task 2 : 

## Expected output

![Expected Output](./Expected%20Output-02/task2Output.png)

## Related Code

```
const div = document.createElement('div');//creating a div
div.className = 'accordian';//giving it a class name
div.innerHTML='<h3>Skills</h3><p style="display: block;">I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the GitHub.</p>';//adding the HTML to the div (setting the display as block displays the content inside the Skill block always setting it as none will close it)
const blockdiv = document.querySelector('.accordian-wrapper');//selecting the block to add the content to
blockdiv.appendChild(div);//appending it in the right place
```