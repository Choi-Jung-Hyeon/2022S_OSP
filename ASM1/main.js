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
    case "mean2":
        result = lib.mean2(numbers);
        break;
    case "med2":
        result = lib.med2(numbers);
        break;
    case "pareto":
        result = lib.pareto(numbers);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);

}

console.log(result);