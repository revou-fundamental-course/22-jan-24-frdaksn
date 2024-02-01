let goHome = function(){
    window.location = "#banner-section";
}

let goPackage = function(){
    window.location = "#package-section";
}

let goCallUs = function(){
    window.location = "#closing-section";
}

let goAsideSection = function(){
    window.location = "#aside-section";
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("image-fruit-veg");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
}


var form = document.getElementById("form-contact");
var errorMessageName = document.getElementById("error-message-name");
var errorMessageEmail = document.getElementById("error-message-email");
var errorMessageInterests = document.getElementById("error-message-interests");
 

function getHeightAsideSection(){
    var asideSection = document.querySelector("#aside-section");
    var heightAside = asideSection.offsetHeight;
    return heightAside;
}

function addHeightAsideSection(){
    heightAside = getHeightAsideSection();
    var asideSection = document.querySelector("#aside-section");
    var additionalHeight = heightAside + 20;
    additionalHeight = additionalHeight + "px";
    asideSection.style.height = additionalHeight;
}


function validateForm(event) {
    event.preventDefault();

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var interests = document.getElementById("interests"); 

    if (name.value == "") {
        addHeightAsideSection();
        errorMessageName.innerHTML = "Please enter your name.";
        name.focus();
        return false;
    }

    if (name.value){
        document.getElementById("aside-section").style.height = "550px";
        errorMessageName.innerHTML = "";
    }

    if (email.value == "") {
        addHeightAsideSection();
        errorMessageEmail.innerHTML = "Please enter your email address.";
        email.focus();
        return false;
    }

    if (email.value){
        if (email.value.indexOf("@") != -1) {
            document.getElementById("aside-section").style.height = "550px";
            errorMessageEmail.innerHTML = "";
        } else{
            addHeightAsideSection();
            errorMessageEmail.innerHTML = "Please enter a valid email address.";
            email.focus();
            return false;
        }
    }

    if (interests.value == "") {
        errorMessageInterests.innerHTML = "Please select an option from the list.";
        interests.focus();
        return false;
        } else{
            document.getElementById("aside-section").style.height = "550px";
            errorMessageInterests.innerHTML = "";
        }


        form.submit();
    }

   form.addEventListener("submit", validateForm);