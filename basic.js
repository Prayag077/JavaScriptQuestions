function evenOdd(num) {
    if (num%2==0) {
            return "even";
        } else {
            return "odd";
        }
}

function primeNumber(num) {

    if (num == 1) {
        return "not a prime Number";
    }

    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i == 0) {
            return "not a prime Number";
        }
        
    }
    return "prime Number";
}

function fibonacci(num) {
    first = 0;
    second = 1;

    for (let i = 0; i < num; i++) {
        console.log(first);
        
        next = first + second;
        first = second;
        second = next;
    }
}

function swapNumbers(num1 , num2) {

    console.log("Before Swapping NUM1 : " + num1);
    console.log("Before swapping NUM2 : " + num2);
    
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;

    console.log("After Swapping NUM1 : " + num1);
    console.log("After swapping NUM2 : " + num2);
}

function factorial(num) {

    let fact = 1;
    
    for (let i = 1; i <=num; i++) {
        fact *= i;
    }
    console.log(fact);
}

function printReverse(num) {
    
    let reverse = 0;

    while (num > 0) {
       let digit = num %10;
        reverse = 10*reverse + digit;
        num = Math.floor(num/10);  //diffrent from java it consider it as floot use math.floor to covert it into decimal part
    }

    console.log(reverse);
    
}

function armstrong(num) {
    const digits = num.toString().length; //diffrent from java String.valueOf(num).length
    let arm = 0;
    let original = num; 

     while (num > 0) {
       let digit = num %10;
        arm += Math.pow(digit, digits);
        num = Math.floor(num/10); 
    }

    if (arm == original) {
        console.log("armstrong Number");
    } else {
        console.log("not an armstrong Number");
        
    }

}

function numberOfDigits(num) {
    const digits = num.toString().length;
    console.log(digits);
    
}

function palindrome(num) {
    let reverse = 0;
    const original = num;

    while (num > 0) {
       let digit = num %10;
        reverse = 10*reverse + digit;
        num = Math.floor(num/10);  
    }

    if (reverse == original) {
        console.log( original +" palindrome");
    } else {
        console.log(original +" not a plaindrome");
    }
}

function sumOfDigits(num) {
    const origianl = num;
    let sum = 0;
    while (num > 0) {
       let digit = num %10;
        sum += digit;
        num = Math.floor(num/10);  
    }
    console.log(" sum of digit " + origianl + " is "+sum);
    
}

function leapYear(num) {

    if ((num % 4 ==0 && num % 100 !=0)|| num % 400 == 0) {
        return num + " is leap year";
    } else {
        return num + " is not a leap year";
        
    }


    
}

let a = 5;
let b = 6;
let c = 12345;
let d = 153;
let e = 123321;

console.log("Check Even Odd");
console.log(a + " is " + evenOdd(a));

console.log("prime Number Check");
console.log(a + " is " + primeNumber(a));
console.log(b + " is " + primeNumber(b));

console.log("fibonnaci series");
fibonacci(a);
fibonacci(b);

console.log("Swap Numbers" );
swapNumbers(a,b);

console.log("factorial");
factorial(a);
factorial(b);


console.log("reverse a number");
printReverse(c);
printReverse(d);

console.log("check armstrong Number");
armstrong(c);
armstrong(d);

console.log("Number of Digits");
numberOfDigits(a);
numberOfDigits(b);
numberOfDigits(c);
numberOfDigits(d);

console.log("check Palindrome");
palindrome(a);
palindrome(b);
palindrome(c);
palindrome(d);
palindrome(e);

console.log("sum Of Digits");
sumOfDigits(c);
sumOfDigits(d);
sumOfDigits(e);

console.log("leap year check");
console.log(leapYear(2024));
console.log(leapYear(2020));
console.log(leapYear(2001));
console.log(leapYear(2009));



















