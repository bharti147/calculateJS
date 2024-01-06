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
    // console.log(math.evaluate(displayValue).toString());
    // USING eval() function
    // try{
    // const result=eval(displayValue).toString();
    // displayValue=result;
    // updateDisplay();
    // }
    // catch(error){
    //     displayValue="error";
    //     updateDisplay();
    // } 

    // USING math.js library of js, firstly add its script in html file, then write here.
    //In this we are using evaluate function of math.js
    try{
    const result=math.evaluate(displayValue).toString();
    displayValue=result;
    updateDisplay();
    }
    catch (error) {
        displayValue = 'Error, enter valid expression';
        updateDisplay();
      }
}
function clearDisplay(){
    displayValue='';
    updateDisplay();
}