#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//1- Computer will generate a ramdom number.done
//2- user input for guessing number.done
//3- compare user input with computer generated number and show results.done
const randomNumber = Math.floor(Math.random() * 6 + 1); // 1t gives the range b/w  1 to 6
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please! Guess A Number Between 1 to 10:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log(chalk.bgBlue("CONGRATULATIONS! You Guessed A Right Number"));
}
else {
    console.log(chalk.bgGreen("You Guessed Wrong Number"));
}
