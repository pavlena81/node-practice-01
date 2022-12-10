const argv = require("yargs").argv;
const { sum, minus, mult, divide } = require("./function");


// TODO: рефакторить
function invokeAction({ action, num1, num2 }) {
  switch (action) {
    case "sum":
        console.log(sum(num1, num2));
        break;

    case "minus":
          console.log(minus(num1, num2));           
      break;

    case "mult":
       console.log(mult(num1, num2));
      break;

    case "divide":
      console.log(divide(num1, num2));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);