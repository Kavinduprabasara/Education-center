/** @format */

function userid_validation(uid, mx, my) {
  var uid_len = uid.value.length;
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
    document.getElementById("msg-one").innerHTML ="Fill this";
    
    uid.focus();
    return false;
  }
  else return true;
}
function passid_validation(passid, mx, my) {
  var passid_len = passid.value.length;
  if (passid_len == 0 || passid_len >= my || passid_len < mx) {
    document.getElementById("msg-two").innerHTML ="Fill this";
    passid.focus();
    return false;
  }
  document.getElementById("msg-two").innerHTML ="";
  return true;
}
function allLetter(uname) {
  var letters = /^[A-Za-z]+$/;
  if (uname.value.match(letters)) {
    document.getElementById("msg-name").innerHTML ="";
    return true;
    

  } else {
    document.getElementById("msg-name").innerHTML ="Username Can't be empty";
    uname.focus();
    return false;
  }
  
}
function alphanumeric(uadd) {
  var letters = /^[0-9a-zA-Z,\s]*$/;

  //alert(uadd.value.trim().replace(/\s/g, ""));
  //if(uadd.value.trim().replace(/\s/g, "").match(letters))
  if (uadd.value.match(letters) || uadd.value.length!=0) {
    return true;
  } else {
    alert("User address must have alphanumeric characters only");
    uadd.focus();
    return false;
  }
}
function countryselect(ucountry) {
  if (ucountry.value == "Default") {
    alert("Select your country from the list");
    ucountry.focus();
    return false;
  } else {
    return true;
  }
}
function allnumeric(uzip) {
  var numbers = /^[0-9]+$/;
  if (uzip.value.match(numbers)) {
    return true;
  } else {
    alert("ZIP code must have numeric characters only");
    uzip.focus();
    return false;
  }
}
function ValidateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
}
function validsex(umsex) {
  x = 0;

  if (umsex[0].checked) {
    x++;
  }
  if (umsex[1].checked) {
    x++;
  }

  if (x == 0) {
    alert("Select Male/Female");
    //umsex.focus();
    return false;
  } else {
    alert("Form Succesfully Submitted");
    //window.location.reload()
    return true;
  }
}

function formValidation() {
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var umsex = document.registration.msex;
    //var ufsex = document.registration.fsex;

    if (userid_validation(uid, 5, 12)) {
      
      if (passid_validation(passid, 7, 12) ) {
        if (allLetter(uname) ) {
          if (alphanumeric(uadd) ) {
            if (countryselect(ucountry) ) {
              if (allnumeric(uzip) ) {
                if (ValidateEmail(uemail) ) {
                  if (validsex(umsex) ) {
                    return true;
                  }
                }
              }
            }
          }
        }
      } 
      return false;  
    }

  }
  