function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

const result1 = add(12, 34);
const result2 = add(23, 46);
const finalResult = add(result1, result2);
console.log('my result1 is:', result1);
console.log('my result2 is:', result2);
console.log('my final result is:', finalResult);
