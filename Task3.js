//Creating Switch Satement with case=Days
//let day=["Sunday","Monday","Tuesday","Wednessday","Thursday","Friday","Saturday"]
let day="Sunday"
switch(day)
{
    case "Sunday":{
        console.log("First Day of the Week");
        console.log("Sunday is always Holiday");
        break;
    }
    case "Monday":{
        console.log("Second Day of the Week");
        break;
    }
    case "Tuesday":{
        console.log("Third Day of the Week");
        break;
    }
    case "Wednessday":{
        console.log("Fourth Day of the Week");
        break;
    }
    case "Thursday":{
        console.log("Fifth Day of the Week");
        break;
    }
    case "Friday":{
        console.log("sixth Day of the Week");
        break;
    }
    case "Saturday":{
        console.log("Seventh Day of the Week");
        console.log("Saturday is the lastday of a week");
        break;
    }
    default:        
            console.log("Input Given is not a Day in a week");     
            break;

}