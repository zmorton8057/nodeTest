var operator = process.argv[2];
var num1 = Number(process.argv[3]);
var num2 = Number(process.argv[4]);

if (operator === "add"){
    console.log(num1 + num2)
} else if(operator === "subtract"){
    console.log(num1 - num2)
}  else if(operator === "multiply"){
    console.log(num1 * num2)
}  else if(operator === "divide"){
    console.log(num1 / num2)
}  else if(operator === "remainder"){
    console.log(num1 % num2)
} else if(operator === "exp"){
    console.log(Math.pow(num1, num2))
}