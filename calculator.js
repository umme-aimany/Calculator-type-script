import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "ENTER YOUR FIRST NUMBER", type: "number", name: "firstNumber" },
    { message: "ENTER YOUR SECOND NUMBER", type: "number", name: "secondNumber" },
    {
        message: "Which Operation You Want To Perform",
        type: "list",
        name: "operation",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPICATI", "DIVISION", "REMINDER"],
    },
]);
if (answer.operation === "ADDITION") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operation === "SUBTRACTION") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operation === "MULTIPICATION") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operation === "DIVISION") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operation === "REMINDER") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else {
    console.log("ENTER YOUR NUMBER FIRST");
}
