let nameEl=document.getElementById("name");
let nameErrorEl=document.getElementById("nameError");
let passwordEl=document.getElementById("Password");
let psswordErrorEl=document.getElementById("passwordError");
let mainheadingEl=document.getElementById("heading");
let userDetails=[]
let logincount=0;
let userDetailsWarningMsg=document.getElementById("userdetails");
//confirm password
let confirmPasswordContainer=document.getElementById("confirmPasswordContainer");
confirmPasswordContainer.style.display="none"
let confirmPasswordEl=document.getElementById("confirmPassword");
let confirmPasswordErrorEl=document.getElementById("ConfirmPasswordError");

confirmPasswordEl.addEventListener("blur",function(event){
    if(event.target.value===""){
        confirmPasswordErrorEl.textContent="Required*";
    }
    else{
        confirmPasswordErrorEl.textContent="";
    }
})
//closed
let count=0;
function register(){
    confirmPasswordContainer.style.display="block";
    mainheadingEl.textContent="Register"
    mainheadingEl.style.color="blue";
    userDetailsWarningMsg.textContent="";
    if(nameEl.value!=="" && passwordEl.value!=="" && confirmPasswordEl.value!==""){
        if(passwordEl.value===confirmPasswordEl.value){
            userDetails.push(nameEl.value);
            userDetails.push(passwordEl.value);
            console.log(userDetails);
            window.open("file:///C:/Users/SATYA%20BHASKAR/Desktop/pro/HomePage.html", "_blank");
            nameEl.value="";
            passwordEl.value="";
            confirmPasswordEl.value="";
        }
        else{
            confirmPasswordErrorEl.textContent="Enter Password Correctly"
        }
    }
    
    
}

function login(){
    mainheadingEl.textContent="Login";
    mainheadingEl.style.color="rgb(230, 83, 25)";
    confirmPasswordContainer.style.display="none";
    userDetailsWarningMsg.textContent="";
    for(let i=0; i<userDetails.length; i++){
        console.log("hii login for")
        if (userDetails[i]===nameEl.value){
            logincount+=1
            if(userDetails[i+1]===passwordEl.value){
                window.open("file:///C:/Users/SATYA%20BHASKAR/Desktop/pro/HomePage.html", "_blank");
            }
            else{
               userDetailsWarningMsg.textContent="Invalid user Details";
               break;
            }
        }
    }
    if(userDetails.length===0){
        userDetailsWarningMsg.textContent="Invalid user Details";
    }
    nameEl.value="";
    passwordEl.value="";
   
}
passwordEl.addEventListener("blur",function(event){
    if(event.target.value===""){
        psswordErrorEl.textContent="Required*";
    }
    else{
        psswordErrorEl.textContent="";
    }
})
function displayingNameError(event){
    if(event.target.value===""){
        nameErrorEl.textContent="Required*";
    }
    else{
        nameErrorEl.textContent="";
    }
}
nameEl.addEventListener("blur",displayingNameError)
