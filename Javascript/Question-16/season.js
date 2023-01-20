const season = prompt("Enter the month of your choice");

switch (season){
    case ("September" || "October" || "November") : 
        console.log("Autumn");
        break;
    case ("December" || "January" || "February") : 
        console.log("Winter");
        break;
    case ("March" || "April" || "May") : 
        console.log("Spring");
        break;
    case ("June" || "July" || "August") : 
        console.log("Summer");
        break;
}