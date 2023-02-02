# Task 1 : Update the list section for Header

## Expected output

![Expected Output](./firstAssignmentImage/task1Output.png)

## Related Code

Adding 'Hire Me' list item :

```
let ul = document.querySelector('ul'); //selecting the list in header
let li = document.createElement('li'); // creating a new li element to add
li.innerText = 'Hire Me'; // adding text inside li
ul.append(li); // adding li to list

```
Updating list item 'Contact' to 'Projects' :

```

```
Removing the list with logos from 'footer' :

```
const footer = document.querySelector('footer'); //seletcting the entire footer
const logo = document.querySelector('footer>ul'); //selecting the list from footer
footer.removeChild(logo); // removing the list from footer

```