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

function validation(){
    event.preventDefault();

    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    // var remember = document.getElementById("Remember");

    if(emptyFieldValidation(email)){
        alert('Email Address must be filled!')
    }
    else if(!email.endsWith('@gmail.com')){
        alert('Email Address must ends with "@gmail.com"')
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
    else{
        alert("You have successfully login.")
        location.href="home.html"
    }
} 