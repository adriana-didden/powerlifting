//macro script

function getMacros(){

    var carbsHigh;
    var carbsLow;
    var proteinHigh;
    var proteinLow;
    var fatHigh; 
    var fatLow;

    var weight = document.getElementById("weight");

    function carbs(weight) {
        carbsLow = "weight*5"
        carbsHigh = "weight*8"
        return "Carbs: "+ carbsLow + " - " + carbsHigh;
    }

}

//macronutrient breakdown of 5-8 g per kg body weight of carbohydrates, weight * 5 or weight * 8 = total gram carb
// 1.4-2 gram per kg body weight of protein, and                        weight * 1.4 or weight * 2 = total gram protein
//30% of total calories from fat per day.                               weight * .30 = total gram fat