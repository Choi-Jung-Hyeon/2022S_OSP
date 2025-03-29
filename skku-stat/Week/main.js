#!/usr/bin/env node
const lib = require("./lib");

if(process.argv.length <= 3) {
    console.log("Insufficient parameter!");
    process.exit(1);
}

let command = process.argv[2];

let numbers = process.argv
    .slice(3, process.argv.length)
    .map((n) => parseFloat(n));

if(numbers.some((n) => isNaN(n))) {
    console.log("Some arguments are not numbers!");
    process.exit(1);
}

let result;
switch(command) {
    case "sum":
        result = lib.sum(numbers);
        console.log(result);
        break;
    case "avg":
        result = lib.avg(numbers);
        console.log(result);
        break;
    case "max":
        result = lib.max(numbers);
        console.log(result);
        break;
    case "mean2":
        if(numbers.length % 2 != 0) process.exit(1);
        console.log(lib.mean2(numbers));
        break;
    case "med2":
        if(numbers.length % 2 != 0) process.exit(1);
        console.log(lib.med2(numbers));
        break;
    case "pareto":
        if(numbers.length % 2 != 0) process.exit(1);
        console.log(lib.pareto(numbers));
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);

}

