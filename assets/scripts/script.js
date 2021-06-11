function bothCals() {   //start of bothCals function.
    var gender = document.getElementsByName("gender");//this establishes the variable "gender" and where to get it from          
    for(i = 0; i < gender.length; i++) {
        if(gender[i].checked)
        document.getElementById("result").innerHTML
                = "Gender: "+gender[i].value;
    }
    if (gender[1].checked) {    //this states that if the user has selected female for gender that it should do this action
        caloriesFemale();        //calls on the caloriesFemale function to execute
    } else if (gender[0].checked) {        //states  that is the user chooses male as the gender to execute the following
        caloriesMale();     //calls on the caloriesMale function 
    }
}


function caloriesFemale() {//start of the caloriesFemale function.Will determine the users maintenance calories
    weightcalc();    //calls for the weightcalc function to execute
    var totalCalories = document.getElementById("weight").value * 20;    //implements a variable called totalCalories and states what that varible is equal to. It will get the weight value and multiply by 20
    document.getElementById('MyCals').innerHTML = "Cals: " + " " + totalCalories;    //this will get the area in html that has this Id and then place the totalCalories into the HTML
    console.log(totalCalories);    //runs the totalCalories value in the console
    moreInfo(); //runs the moreInfo function
}
function moreInfo(){
    var info = prompt("Want More Details?");    //establishes info variable as the response to a prompt asking if they want more info
    if(info=="yes"){    //states that is info is equal to yes, it'll run the next line
    document.getElementById('proteinQuestion').innerHTML="Protein (g)=Weight lbs * .6(bare minimum) - 1(max)<br />";    //will add the statement to the section of html where the protein id is located
    }
    else if(info=="no"){    //states that is info is equal to no, it'll run the next line
    document.getElementById('proteinQuestion').innerHTML="No Problem! Check out our page for any other information you might need! <br />";    //will add the statement to the section of html where the protein id is located
    }
    else{ //this code handles situations where the user didn't answer
        alert("Error: please select yes or no"); //pops up an alert telling the uesr to select one or  the other 
        moreInfo(); //reruns the moreInfo function
    }
}

function caloriesMale() {//start of the caloriesMale function.Will determine the users maintenance calories
    weightcalc();    //calls for the weightcalc function to execute
    var totalCalories = document.getElementById("weight").value * 23;    //implements a variable called totalCalories and states what that varible is equal to. It will get the weight value and multiply by 23
    document.getElementById('MyCals').innerHTML = "Cals: " + " " + totalCalories;    //this will get the area in html that has this Id and then place the totalCalories into the HTML 
    console.log(totalCalories);    //runs the totalCalories value in the console
    moreInfo();//calls the moreInfo function
}

function weightcalc() {//start of the weightcalc function, this will get the users weight from their input and return it to the console and html
    var weight = document.getElementById("weight").value;    //establishes a variable called weight and what it equals/where to find it. weight is the value of the element in html that has the Id of weight
    document.getElementById('weights').innerHTML = "Weight: " + " " + weight;    //this will get the area in html that has this Id and then place the weight into the HTML 
    console.log(weight);    //runs the weight value in the console    
}


//CASE 4 code below this line--------------------------------

function contact(){//starts the function for the contact page validation
    var errorMsg,lastName;//establishes variables of errorMsg and lastName
    errorMsg= document.getElementById("error");//sets errorMsg to whatever is in the out id section
    errorMsg.innerHTML="";//sets the html in this section to nothing
    lastName=document.getElementById("lastName").value;//sets the value of lastName based on user input

    var formHasErrors = false;//sets the form has errors as false
    try {//tells browser to try to run the following
        var lastName=document.getElementById("lastName").value;//states that the lastName variable is the value that the user inputs
        if (lastName === ""){//if the value is left empty it will run the following code
            throw "please enter last name";//this is the error statement
        }else{//what the browser should do if there is a valid value
            submitThanks();//calls the submitThanks function.
        }
    }
    catch(errMsg){//catches the error 
        console.log(errMsg); //console logs the error
        formHasErrors=true;//sets teh formHasErrors variable to true
        document.getElementById("error").innerHTML = errMsg; // puts the errMsg into the Html for user to see
    }
    finally{
        if (formHasErrors){
            console.log("Please fix all errors");//logs this statement into the console log
        }
    }
}
function submitThanks(){//start of submitThanks function
    window.location.href = "thanks.html"; // sends user to the thanks page

}