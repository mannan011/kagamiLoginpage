function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
    // document.getElementById("get").style.marginLeft = "150px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("get").style.marginLeft = "0";
}

function shutNav(){
    document.getElementById("mySidenav").style.width = "0";
}

var usernaam = document.getElementById("username").value;

var myInput = document.getElementById("psw");

var number = document.getElementById("number");
var length = document.getElementById("length");

var m= localStorage.setItem("man",usernaam);



// password validation

myInput.onkeyup = function() {

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
    window.location.href="./webd.html";
  }
 return m;
}

// Display user

function uname(){
    var usernaam = document.getElementById("username").value;
    var m= localStorage.setItem("man",usernaam);

}

function nameu(){
    var n =localStorage.getItem("man")
    document.getElementById("usname").innerHTML = n;
}
