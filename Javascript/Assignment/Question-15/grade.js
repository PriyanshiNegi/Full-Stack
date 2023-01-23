const grade = prompt("Enter your grade");
if(grade>= 90 && grade <= 100){
    console.log("Congratulations ! great job you have an A grade");
}
else if(grade >=70 && grade <= 89){
    console.log("Great ! You got a B grade");
}
else if(grade >=60 && grade <= 69){
    console.log("You got a C grade , try to work hard !");
}
else if(grade >=50 && grade <=59){
    console.log("Oh! You just passed you have a D grade");
}
else{
    console.log("Oh no ! You failed you have a F grade");
}