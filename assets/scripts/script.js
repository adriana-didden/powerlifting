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




    //CASE 3 code section 1 start
    //establishes info variable as the response to a prompt asking if they want more info
    var info = prompt("Want More Details?");

    //states that is info is equal to yes, it'll run the next line
    if(info=="yes")
    
    //will add the statement to the section of html where the protein id is located
    document.getElementById('protein').innerHTML="Protein (g)=Weight lbs * .6(bare minimum) - 1(max)<br />";
    
    //states that is info is equal to no, it'll run the next line
    if(info=="no")

    //will add the statement to the section of html where the protein id is located
    document.getElementById('protein').innerHTML="No Problem! Check out our page for any other information you might need! <br />";
    //case3 code section 1 end



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

    


 
    //CASE 3 code section 2 start
    //establishes info variable as the response to a prompt asking if they want more info
    var info = prompt("Want More Details?");

    //states that is info is equal to yes, it'll run the next line
    if(info=="yes")
    
    //will add the statement to the section of html where the protein id is located
    document.getElementById('protein').innerHTML="Protein (g)=Weight lbs * .6(bare minimum) - 1(max)<br />";
    
    //states that is info is equal to no, it'll run the next line
    if(info=="no")

    //will add the statement to the section of html where the protein id is located
    document.getElementById('protein').innerHTML="No Problem! Check out our page for any other information you might need! <br />";
    //case3 code section 2 end
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

