function emptyFieldValidation(str){
    if(str.length == 0){
        return true
    }
    else return false
}

function checkPass(password){
    for(let i = 0; i < password.length; i++){
        if(!isNaN(password[i])){
            return true;
        }
    }
    return false;
}

function checkPhone(phone){
    for(let i = 0; i < phone.length; i++){
        if(!isNaN(phone[i])){
            return false;
        }
    }
    return true;
}

function validation(){
    event.preventDefault();

    var email = document.getElementById("Email").value;
    var name = document.getElementById("Name").value;
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var phone = document.getElementById("PhoneNum").value;
    var address = document.getElementById("Address").value;
    var password = document.getElementById("Password").value;
    var confPass = document.getElementById("ConfPass").value;
    var terms = document.getElementById("Terms");
    // var subs = document.getElementById("Subscribe");

    if(emptyFieldValidation(email)){
        alert('Email Address must be filled!')
    }
    else if(!email.endsWith('@gmail.com')){
        alert('Email Address must ends with "@gmail.com"')
    }
    else if(emptyFieldValidation(name)){
        alert('Name must be filled!')
    }
    else if(name.length < 3 || name.length > 25){
        alert('Name must be between 3 to 25 characters!')
    }
    else if(!male.checked && !female.checked){
        alert("Select your Gender!");
    }
    else if(emptyFieldValidation(phone)){
        alert('Phone Number must be filled!')
    }
    else if(phone.length < 8 || phone.length > 12){
        alert('Phone Number must be between 8 to 12 numbers!')
    }
    else if(checkPhone(phone)){
        alert('Phone Number must be numbers!')
    }
    else if(emptyFieldValidation(address)){
        alert('Address must be filled!')
    }
    else if(emptyFieldValidation(password)){
        alert('Password must be filled!')
    }
    else if(password.length < 8){
        alert('Password must be minimum 8 characters!')
    }
    else if(checkPass(password)){
        alert('Password should not contain numbers!')
    }
    else if(password.localeCompare(confPass)!=0){
        alert('Password does not match!')
    }
    else if(!terms.checked){
        alert("You must agree with the Terms & Conditions!");
    }
    else{
        alert("You have successfully register.")
        location.href="login.html"
    }
} 