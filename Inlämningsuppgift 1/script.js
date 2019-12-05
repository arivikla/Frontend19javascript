$(function() {

  function isEmpty(id) {
      if($(id).val() === '') {
          $(id).addClass('is-invalid')

          $(id).focus();
      } else {
          $(id).removeClass('is-invalid')
          $(id).addClass('is-valid')
      }
  }

  $('input').blur(function(e) {
      let id = "#" + e.currentTarget.id
      isEmpty(id);
  });

  //Email
  function ValidateEmail(email) 
  {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('#email').val()))
    {
      $('#email').removeClass('is-invalid')
      $('#email').addClass('is-valid') 
      return (true)
    }
      $('#email').addClass('is-invalid')
      $('#email').focus();
      return (false)
  }    

//Password
let myInput = document.getElementById("psw");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");


// When the user starts to type something inside the password field
myInput.onkeyup = function() {
// Validate lowercase letters
let lowerCaseLetters = /[a-z]/g;
if(myInput.value.match(lowerCaseLetters)) {  
  letter.classList.remove("invalid");
  letter.classList.add("valid");
} else {
  letter.classList.remove("valid");
  letter.classList.add("invalid");
}

// Validate capital letters
let upperCaseLetters = /[A-Z]/g;
if(myInput.value.match(upperCaseLetters)) {  
  capital.classList.remove("invalid");
  capital.classList.add("valid");
} else {
  capital.classList.remove("valid");
  capital.classList.add("invalid");
}

// Validate numbers
let numbers = /[0-9]/g;
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
}
} 

$('#regForm').submit((e) => {
  e.preventDefault();

  isEmpty('#firstName');
  isEmpty('#lastName');
  isEmpty('#address');
  isEmpty('#zipcode');
  isEmpty('#city');
  isEmpty('#country');    
  isEmpty('#interests');               
  ValidateEmail();  

  location.replace("valideringklarsida.html");   

})

});