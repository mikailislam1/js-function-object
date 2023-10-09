// return

function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    // return sum;
    // console.log(sum);
    return sum;
    console.log('welcome');
    return 15;
    return 'hello done';
    return 'I am hungry';
}

// add(200, 500);
var total = add(50, 70);
console.log('total:', total);

function bringShingara(money) {
    var shingaraPrice = 10;
    var quantity = money / shingaraPrice;
    return quantity;
}

var myTaka = 1000;
var shingaras = bringShingara(myTaka);
console.log('Eating shingaras:', shingaras);