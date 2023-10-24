let day = "Saturday"
switch(day){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
    console.log("Weekdays");
    break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;
        default:
        console.log("You're out of the days");
}