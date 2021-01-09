// JavaScript source code

function calculate() {
  var Num1 =+prompt("Number-1");

  var Num2 =+prompt("Number-2");

  var Op =prompt("Operation('add''subtract''divide''multiply'");

  var Calculate;

  if (Op == "add") {
      Calculate = Num1+Num2;
  }
  else if (Op == "subtract") {
      Calculate = Num1-Num2;
  }
  else if (Op == "divide") {
      Calculate = Num1/Num2;
  }
  else if (Op == "multiply") {
      Calculate = Num1*Num2;
  }else{
    Calculate = "InvalidInput"
  }

  document.querySelector("#result").innerHTML =  Calculate;

}
