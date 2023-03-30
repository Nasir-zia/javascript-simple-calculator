alert("Simple calculator");

var num1=prompt("Enter A number");
var num2 =prompt("Enter A Number two");
var opr=prompt("Enter A opreator  +,-,/,*");

switch(opr){
    case "+":
        var res =parseFloat(num1)+ parseFloat(num2);
        alert(`  ${num1} + ${num2}= ${res}`+" is Answer");
        break;
    


            case "-":
                var res =parseFloat(num1)- parseFloat(num2);
                alert(`  ${num1} - ${num2}= ${res}`+" is Answer");
                break;
                

                case "*":
                    var res =parseFloat(num1)* parseFloat(num2);
                    alert(`  ${num1} * ${num2}= ${res}`+" is Answer");
                    break;

                    case "/":
                        var res =parseFloat(num1)/ parseFloat(num2);
                        alert(`  ${num1} / ${num2}= ${res}`+" is Answer");
                        break;
                        default:
                        alert("invaled opreator");

}