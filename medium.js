let userInput = prompt ("Pick a number from 1 to 12")

function getmonth(userInput){
    switch(parseInt(userInput)){
        case 1:
            return "January";
        case 2: 
            return "February";
        case 3: 
            return "March";
        case 4: 
            return "April";
        case 5: 
            return "May";   
        case 6: 
            return "June";  
        case 7: 
            return "July";
        case 8: 
            return "August";   
        case 9: 
            return "September";
        case 10: 
            return "October";
        case 11: 
            return "November"; 
        case 12: 
            return "December"; 
        default: 
            return "ERROR: THIS IS AN INVALID INPUT, USE A NUMBER BETWEEN 1 AND 12";
    }
}

console.log(getmonth(userInput));
