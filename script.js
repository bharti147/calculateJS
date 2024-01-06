/*
ek function clear krega => clearDisplay 
ek buttons click krne p value dalega screen p => appendToDisplay 
ek sath k sath update krega clear ya add hone p value => updateDisplay
ek calculate krega screen p updated values ko => calculate
*/
let displayValue="";
 
function appendToDisplay(value){
    displayValue+=value;
    updateDisplay(displayValue);

}
function updateDisplay(){
     document.getElementById('display').value=displayValue;   
}

function calculate(){

}
function clearDisplay(){
    displayValue='';
    updateDisplay();
}