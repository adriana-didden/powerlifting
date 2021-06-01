//start of bothCals function.
function bothCals() {

    //this establishes the variable "gender" and where to get it from
    var gender = find("gender").value;

    //this states that if the user has selected female for gender that it should do this action
    if (gender = "female") {

        //calls on the caloriesFemale function to execute
        caloriesFemale();

        //states  that is the user chooses male as the gender to execute the following
    } else if (gender = "male") {

        //calls on the caloriesMale function 
        caloriesMale();
    }
}

//start of the caloriesFemale function.Will determine the users maintenance calories
function caloriesFemale() {

    //calls for the weightcalc function to execute
    weightcalc();

    //implements a variable called totalCalories and states what that varible is equal to. It will get the weight value and multiply by 20
    var totalCalories = document.getElementById("weight").value * 20;

    //this will get the area in html that has this Id and then place the totalCalories into the HTML
    document.getElementById('MyCals').innerHTML = "Cals: " + " " + totalCalories;

    //runs the totalCalories value in the console
    console.log(totalCalories);

}
//start of the caloriesMale function.Will determine the users maintenance calories
function caloriesMale() {

    //calls for the weightcalc function to execute
    weightcalc();
   
    //implements a variable called totalCalories and states what that varible is equal to. It will get the weight value and multiply by 23
    var totalCalories = document.getElementById("weight").value * 23;

    //this will get the area in html that has this Id and then place the totalCalories into the HTML 
    document.getElementById('MyCals').innerHTML = "Cals: " + " " + totalCalories;

    //runs the totalCalories value in the console
    console.log(totalCalories);
}

//start of the weightcalc function, this will get the users weight from their input and return it to the console and html
function weightcalc() {

    //establishes a variable called weight and what it equals/where to find it. weight is the value of the element in html that has the Id of weight
    var weight = document.getElementById("weight").value;

    //this will get the area in html that has this Id and then place the weight into the HTML 
    document.getElementById('weights').innerHTML = "Weight: " + " " + weight;
    
    //runs the weight value in the console    
    console.log(weight);

}

