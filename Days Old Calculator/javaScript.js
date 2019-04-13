console.log("hi")
function begin() {



    // var birth = document.getElementById("birthDate").value;
    //
    //
    //
    //
    // var birth = new Date(birth); //Make the Form value into a JavaScript date
    // var years = new Date().getFullYear() - birth.getFullYear();
    //
    // var birthMilli = birth.getTime(); //Turn into Milliseconds

    var today = new Date().getTime(); //Get today into milliseconds
    var total = today - birthMilli; //Difference

    var grade = years - 5 //Gets their grade
    var total = Math.floor((total / 1000 / 60 / 60 / 24)); //Convert into days
    var graduation = birth.getFullYear() + 17;
    if (total < 0) {
        total = "Please input a valid date"
    } 
	else if (grade == 0) {
        total = `You are ${total} days old and most likely in kindergarten. You will probably graduate in ${graduation}.`
	} 
	else if (years > 0 && years < 18) {
		if(grade < 0){
			console.log("OYUNG");
		}
		total = `You are ${total} days old and most likely in grade ${grade}. You will probably graduate in ${graduation}.`
	} 

	else {
        total = `You are ${total} days old and most likely graduated in ${graduation}.`

    }

    document.getElementById("total").innerHTML = total;
}
