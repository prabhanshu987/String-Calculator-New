// function add(numbers) {
//     if (!numbers) return 0;
// }

// // Handle different delimiters:

// function add(numbers) {
//     if (!numbers) return 0;

//     let delimiter = /,|\n/;
//     if (numbers.startsWith("//")) {
//         const parts = numbers.split("\n", 2);
//         delimiter = new RegExp(parts[0].slice(2));
//         numbers = parts[1];
//     }

//     const numArray = numbers.split(delimiter);
//     return calculateSum(numArray);
// }

// // Calculate the sum and handle exceptions:

// function calculateSum(numArray) {
//     let sum = 0;
//     let negatives = [];

//     for (let num of numArray) {
//         let number = parseInt(num);
//         if (number < 0) {
//             negatives.push(number);
//         } else {
//             sum += number;
//         }
//     }

//     if (negatives.length > 0) {
//         throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
//     }

//     return sum;
    
// }

//  Combine everything:
function add(numbers) {
    if (!numbers) return 0;

    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n", 2);
        delimiter = new RegExp(parts[0].slice(2));
        numbers = parts[1];
    }

    const numArray = numbers.split(delimiter);
    return calculateSum(numArray);
}

function calculateSum(numArray) {
    let sum = 0;
    let negatives = [];

    for (let num of numArray) {
        let number = parseInt(num);
        if (number < 0) {
            negatives.push(number);
        } else {
            sum += number;
        }
    }

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }
    console.log(sum);

    return sum;

}
add("//;\n1;4")

