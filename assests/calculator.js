const container = document.querySelector(".container");
const screentop = document.querySelector(".screentop");

const screenbottom = document.querySelector(".screenbottom");
let numbers = "";

container.addEventListener("click", (e) => {
    lengthControl();

    
   
    console.log(e.target);

//----------------------- numbers ---------------------------
    if (e.target.classList.contains("numbers")) {
        screentop.innerText += e.target.innerText;

 //----------------------- ac button -------------------
    } else if (e.target.classList.contains("acbutton")) {
        screentop.innerHTML = "";
        screenbottom.innerHTML = "";
        screentop.style.fontSize = "50px"
    } else if (e.target.classList.contains("changenum")) {
        screentop.innerText += "-";
    } else if (e.target.classList.contains("percent")) {
        screentop.innerText += "%";

 //----------------------- operators and change to valid operator sign  -------------------
    } else if (e.target.classList.contains("operators")) {

        if (e.target.innerText == "x") {
            screentop.innerText += "*";
        } else if (e.target.innerText == "÷") {
            screentop.innerText += "/";
        } 
        else {
            screentop.innerText += e.target.innerText;
        }


    } else if (e.target.classList.contains("point")) {
        screentop.innerText += e.target.innerText;

//----------------------- equals  button -------------------

    } else if (e.target.classList.contains("equals")) {
        isoperatorlast();
        console.log(eval(screentop.innerText));
        
        screenbottom.innerText = screentop.innerText;
        screentop.innerHTML = eval(screentop.innerText)

    }

//------------check if fisrt letter is num or operator ------------

    isoperatorfirst();



 if (isFloat(+screentop.innerHTML)){
screentop.innerHTML = (+screentop.innerHTML).toFixed(4);
}





})




// --------------------CONTROL THE LENGTH OF NUMBERS-------------------
const lengthControl = function () {
    if (screentop.innerText.length >= 20) {
        screentop.style.fontSize = "15px";
    } else if (screentop.innerText.length >= 10) {
        screentop.style.fontSize = "25px";
    }
}
// --------------------- IS IT A FLOAT? -------------------
function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}



//----------------check if the first element is number?----------------
function isoperatorfirst(){
if (screentop.innerHTML.slice(0,1) == "+" || screentop.innerHTML.slice(0,1) == "/" ||screentop.innerHTML.slice(0,1) == "*" || screentop.innerHTML.slice(0,1) == "."){
    console.log("oopps");
    screentop.innerHTML = "";
    }}

function isoperatorlast(){
    if (screentop.innerHTML.slice(-1) == "+" || screentop.innerHTML.slice(-1) == "/" ||screentop.innerHTML.slice(-1) == "*" || screentop.innerHTML.slice(-1) == "." || screentop.innerHTML.slice(-1) == "-" ){
        console.log("oopps");
        screentop.innerHTML = screentop.innerHTML.slice(0,-1);
        }}