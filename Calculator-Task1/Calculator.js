let userEnteredEl=document.getElementById("user-input");
let Answer=0;
function clearing(){
    userEnteredEl.value="";
}
function Deleting(){
    let UserEnteredData=userEnteredEl.value
    let listOfNums=UserEnteredData.split('');
    console.log(listOfNums);
    listOfNums.pop();
    let FinalData=listOfNums.join('')
    userEnteredEl.value=FinalData;
}
function moduloOperation(){
    userEnteredEl.value=userEnteredEl.value+"%";
}
function DivisionOperation(){
    userEnteredEl.value=userEnteredEl.value+"/";
}
function nine(){
    userEnteredEl.value=userEnteredEl.value+"9";
}
function eight(){
    userEnteredEl.value=userEnteredEl.value+"8";
}
function seven(){
    userEnteredEl.value=userEnteredEl.value+"7";
}
function multiplicationOperation(){
    userEnteredEl.value=userEnteredEl.value+"*";
}
function six(){
    userEnteredEl.value=userEnteredEl.value+"6";
}
function five(){
    userEnteredEl.value=userEnteredEl.value+"5";
}
function four(){
    userEnteredEl.value=userEnteredEl.value+"4";
}
function AdditionOperation(){
    userEnteredEl.value=userEnteredEl.value+"+";
}
function three(){
    userEnteredEl.value=userEnteredEl.value+"3";
}
function two(){
    userEnteredEl.value=userEnteredEl.value+"2";
}
function one(){
    userEnteredEl.value=userEnteredEl.value+"1";
}

function SubtractionOPeration(){
    userEnteredEl.value=userEnteredEl.value+"-";
}
function twoZero(){
    userEnteredEl.value=userEnteredEl.value+"00";
}
function oneZero(){
    userEnteredEl.value=userEnteredEl.value+"0";
}
function threeZero(){
    userEnteredEl.value=userEnteredEl.value+".";
}
function result(){
    Answer=eval(userEnteredEl.value)
    console.log(Answer)
    console.log(userEnteredEl.value)
    userEnteredEl.value=Answer;
}

