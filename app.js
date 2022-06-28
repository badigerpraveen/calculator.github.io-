let inputfield = document.querySelector(".inputfield")
let buttons = document.querySelectorAll(".btn");
//let span = document.querySelector(".result");
//console.log(span);
let inputfieldValue = " ";
//console.log(result); 

function claculater() {
    for (button of buttons) {
        button.addEventListener('click', (e) => {
            //  console.log(result); 
            buttonText = e.target.value
            if (buttonText == "C") {
                inputfieldValue = " ";
                //span.innerHTML = 0 ;
                // inputfield = " ";
                inputfield.value = inputfieldValue;
                inputfield.setAttribute("value", " ")

            }
            else if (buttonText === "+" || buttonText === "-" || buttonText === "/" || buttonText === "X" || buttonText === ".") {
                inputfieldValue = document.getElementById("result").value;
                if (inputfieldValue == " ") {
                    inputfieldValue = " "
                } else if (buttonText == "X") {
                    buttonText = "*";
                    //  alert("text"); 


                    inputfieldValue = document.getElementById("result").value;
                    // inputfieldValue +=buttonText ;
                    // inputfield.value = inputfieldValue;
                    let x = inputfieldValue.charAt(inputfieldValue.length - 1);
                    if (x === "X") {
                        let result = inputfieldValue.substring(0, inputfieldValue.length - 1);

                        //alert(result);
                        //inputfieldValue += x ;
                        result += buttonText;
                        inputfield.value = result;
                        //console.log("x",x); 
                        //console.log("y",y); 

                    } else if (x == "+" || x == "-" || x == "/" || x == "*") {
                        let result = inputfieldValue.substring(0, inputfieldValue.length - 1);

                        //alert(result);
                        //inputfieldValue += x ;
                        result += buttonText;
                        inputfield.value = result;
                        //console.log("x",x); 
                        //console.log("y",y); 
                    } else {
                        // alert("text");
                        // console.log(inputfieldValue);
                        inputfieldValue += buttonText;
                        inputfield.value = inputfieldValue;
                        // console.log(inputfieldValue);
                        inputfield.setAttribute("value", inputfieldValue)
                        // inputfield.value = inputfieldValue ; 
                        console.log(inputfield.value);
                    }

                }

                else {


                    let x = inputfieldValue.charAt(inputfieldValue.length - 1)

                    // if(x == "+" || x == "-" ||  x == "/" || x== "." ){ 
                    if (x === ".") {
                        let result = inputfieldValue.substring(0, inputfieldValue.length - 1);

                        //alert(result);
                        //inputfieldValue += x ;
                        result += buttonText;
                        inputfield.value = result;
                        //console.log("x",x); 
                        //console.log("y",y); 

                    } else if (x == "+" || x == "-" || x == "/" || x == "*") {
                        let result = inputfieldValue.substring(0, inputfieldValue.length - 1);

                        //alert(result);
                        //inputfieldValue += x ;
                        result += buttonText;
                        inputfield.value = result;
                        //console.log("x",x); 
                        //console.log("y",y); 
                    } else {
                        // alert("text");
                        // console.log(inputfieldValue);
                        inputfieldValue += buttonText;
                        inputfield.value = inputfieldValue;
                        // console.log(inputfieldValue);
                        inputfield.setAttribute("value", inputfieldValue)
                        // inputfield.value = inputfieldValue ; 
                        console.log(inputfield.value);
                    }



                }


            }
            else if (buttonText == "." || buttonText == "1" || buttonText == "2" || buttonText == "3" || buttonText == "4" ||
                buttonText == "5" || buttonText == "6" || buttonText == "7" || buttonText == "8" || buttonText == "9"
                || buttonText == "0") {
                inputfieldValue = document.getElementById("result").value;
                inputfieldValue += buttonText;
                inputfield.value = inputfieldValue;

                inputfield.setAttribute("value", inputfieldValue)
                // inputfield.value = inputfieldValue ; 
                // console.log(inputfieldValue);
            } else if (buttonText == ".") {

            }

            else if (buttonText == "=") {
                //console.log(inputfieldValue);
                inputfieldResult = eval(inputfieldValue);
                //inputfield.setAttribute("value",inputfield.value) ;
                // span.innerHTML = inputfieldResult ; 
                //console.log(inputfieldResult);
                //;
                if (inputfieldResult == undefined) {
                    inputfield.value = " ";
                } else {
                    inputfield.value = inputfieldResult;
                    inputfield.setAttribute("value", inputfieldResult)
                    // alert(span.innerHTML);
                }
                console.log(inputfield.value);
            }
            else {
                inputfieldValue += buttonText;
                inputfield.setAttribute("value", inputfieldValue)
                inputfield.value = inputfieldValue;

            }
        })
    }

}
claculater()








