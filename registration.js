

function userid_validation(uid, mx, my) {
  var uid_len = uid.value.length;
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
    document.getElementById("msg-one").innerHTML = "Required must be filled";
    uid.focus();
    return false;
  } else {
    return true;
  }
}
function passid_validation(passid, mx, my) {
  var passid_len = passid.value.length;
  if (passid_len == 0 || passid_len >= my || passid_len < mx) {
    document.getElementById("msg-two").innerHTML = "Required must be filled";
    passid.focus();
    return false;
  }
  document.getElementById("msg-two").innerHTML = "";
  return true;
}
function ValidateName(uname) {
  var letters = /^[A-Za-z]+$/;
  if (uname.value.match(letters)) {
    document.getElementById("msg-name").innerHTML = "";
    return true;
  } else {
    document.getElementById("msg-name").innerHTML = "Username Can't be empty";
    uname.focus();
    return false;
  }
}
function Validateuser(uadd) {
  var letters = /^[0-9a-zA-Z,\s]*$/;
  if (uadd.value.match(letters) || uadd.value.length != 0) {
    return true;
  } else {
    document.getElementById("msg-add").innerHTML = "Username Can't be empty";
    uadd.focus();
    return false;
  }
}
function countryselect(ucountry) {
  if (ucountry.value == "Select") {
    document.getElementById("msg-country").innerHTML = "Select a country";
    ucountry.focus();
    return false;
  } else {
    return true;
  }
}
function validateAddress(address) {
  if (address.value == "") {
    document.getElementById("msg-add").innerHTML = "Address cant be empty";
  } else {
    return true;
  }
}
function ValidateZip(uzip) {
  var numbers = /^[0-9]+$/;
  if (uzip.value.match(numbers)) {
    return true;
  } else {
    document.getElementById("msg-zip").innerHTML = "Reqired";
    uzip.focus();
    return false;
  }
}

function ValidateEmail(uemail) {  
  // var mailformat =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
  if(uemail.value) {
    return true;
  } else {
    document.getElementById("msg-mail").innerHTML = "Email is not valid";
    uemail.focus();
    return false;
  }
}


function validsex(umsex){
  let x = 0;
  
  if (umsex[0].checked) {
    x++;
  }
  if (umsex[1].checked) {
    x++;
  }
 
  if (x == 0) {
    document.getElementById("msg-sex").innerHTML = "Select a Gender";

    return false;
  } 
  else {
    document.getElementById("msg-submit").innerHTML = "Sucessfully submitted";
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
  var address = document.registration.address;

  if (userid_validation(uid, 5, 12)) {
    if (passid_validation(passid, 7, 12)) {
      if (ValidateName(uname)) {
        if (validateAddress(address)){
          if (Validateuser(uadd)) {
            if (countryselect(ucountry)) {
              if (ValidateZip(uzip)){
                if (ValidateEmail(uemail)) {
                    if (validsex(umsex)) {
                    document.getElementById("msg-submit").innerHTML = "Sucessfully submitted";
                    return true;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return false;
}
