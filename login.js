//  @format 

function validateName(name) {
  if (name != "") {
    return true;
  }
  return false;
}

function validatePass(pass) {
  if (pass != "") {
    return true;
  }
  return false;
}

function required() {
  var name = document.form.login.value;
  var pass = document.form.pass.value;
  var a = true;
  var b = true;
  var returnvalue = false;
  if (validateName(name) == true) {
    if (validatePass(pass) == true) {
        console.log("Submitted successfully");
    } 
    
    else {
        document.getElementById("required-two").style.color = "rgb(74, 133, 221);";
        document.getElementById("required-two").innerHTML = " ! Enter the password";
        document.getElementById("required-one").innerHTML = "";
        b = false;
    }
  } 
  
  else {
    document.getElementById("required-one").innerHTML = "! Enter the username";
    
    a = false;
  }

  if (a == true && b == true) {
    returnvalue = true;
  }
  return returnvalue;
}
