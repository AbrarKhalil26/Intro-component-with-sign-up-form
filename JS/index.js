let form = document.getElementById("form");
let fName = document.getElementById("firstName");
let lName = document.getElementById("lastName");
let email = document.getElementById("email");
let pass = document.getElementById("pass");

form.addEventListener('submit',e => {
    e.preventDefault();

    let firstName = fName.value.trim();
    let lastName = lName.value.trim();
    let emailValue = email.value.trim();
    let passValue = pass.value.trim();
    let pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    
    if(firstName === "")
        errorFun(fName,'First Name Cannet be empty');
    else 
        successFun(fName);

    if(lastName === "")
        errorFun(lName,'Last Name Cannet be empty');
    else 
        successFun(lName);

    if(emailValue === "")
        errorFun(email,'First Name Cannet be empty');
    else if(!emailValue.match(pattern)){
        errorFun(email,'Looks like this is not an email');
    }
    else 
        successFun(email);

    if(passValue === "")
        errorFun(pass,'Password cannot be empty');
    else 
        successFun(pass);

})
function errorFun(req,message){

    //input
    const formControl = req.parentElement;
    //console.log(formControl);
    req.className += 'error';

    // span 
    let span = formControl.querySelector("span");
    //console.log(span);
    span.innerText = message;
    span.className += 'error-text';

    if( req !== email){
        req.value = ' ';
    }
    else{
        req.style.color = "hsl(0, 100%, 74%)";
    }
}

function successFun(req){
    req.className += 'success';
    delete span;
}