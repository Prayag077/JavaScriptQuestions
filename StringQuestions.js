function reverseString(str) {
    
    let nstr= " ";

    for (let i = 0; i < str.length; i++) {
        nstr = str.charAt(i) + nstr;
    }

    return nstr;
}

function reverseEachWord(str) {
    
    let reverse = " ";

    for (let word of str.split(" ")) {
        let nstr = " ";
        for (let char of word) {
           nstr = char + nstr;
        }
        reverse += nstr;
    }
    return reverse;
}

function dupeChar(str) {

    let dupeChar = new Map();

    for (let char of str) {
        if (dupeChar.has(char)) {
            dupeChar.set(char , dupeChar.get(char)+1);
        } else {
            dupeChar.set(char,1);
        }
    }

    for (let [key, value] of dupeChar.entries()) {
        if (value>1) {
            console.log(key + " : " + value);
            
        }
    }
}

function occuranceOfEachWord(str) {
    let occurance = new Map();

    for (let word of str.split(' ')) {
        if (occurance.has(word)) {
            occurance.set(word , occurance.get(word)+1);
        } else {
            occurance.set(word ,1);
        }
    }
    console.log(occurance);
}


function countNumberOfWords(str) {
    words = str.split(" ").length;
    console.log("number of words in give String : " + words);
}


function permutationRecursion(str, prefix) {

    if (str.length ==0) {
        console.log(prefix);
        return;
    }


    for (let i = 0; i < str.length; i++) {
        
        rem = str.substring(0,i) + str.substring(i+1);
        permutationRecursion(rem , prefix + str.charAt(i));        
    }
}

function StringPalindrome(str) {
    let first = 0;
    let last = str.length-1;

    while (first<last) {
        if (str.charAt(first) != str.charAt(last)) {
            console.log(str + " not a palindrome");
            return;
        }
        first++;
        last--;
    }
    console.log(str + " is a palindrome");
    
}

function anograms(str1,str2) {
    
    if (str1.length != str2.length) {
        console.log("not anograms");
        return;
    }

    let arr = new Array(126).fill(0);
    for (let i = 0; i < str1.length; i++) {
        arr[str1.charCodeAt(i)]++;      //diffrent from java but charAt Also working
        arr[str2.charCodeAt(i)]--;
    }

    for (let n of arr) {
        if (n != 0) {
            console.log("not anograms");
            return
        }
    }

    console.log("anograms");
}


function countVowelsAndConst(str) {
    
    let vowels = 0;
    let conso = 0;
    
    for (let c of str) {
        if (c== 'a'||c== 'e' ||c== 'i' ||c== 'o'||c== 'u') {
            vowels++;
        } else {
            conso++;
        }
    }
    console.log("vowels : " + vowels);
    console.log("consonant : "+  conso);
}

function uniqueChar(str) {
    
    let unique = new Array(256).fill(false);

    for (let c of str) {

        let code = c.charCodeAt(0);

        if (!unique[code]) {
            console.log(c);
            unique[code] = true;
        }
    }
}


const str = "Jai shree ram";
const str1 = "Jai shree ram Jai shree ramJai shree ram Jai shree ram Jai shree ram";
const str2 = "malayalam";

console.log("reverse each character of the given String");
console.log(reverseString(str));


console.log("revese each Word");
console.log(reverseEachWord(str));

console.log("check for duplicate Characters");
dupeChar(str1);

console.log("Check Occurance of each word");
occuranceOfEachWord(str1);

console.log("check Number Of Words");
countNumberOfWords(str);
countNumberOfWords(str1);


console.log("check permutation");
permutationRecursion("ABC" , " ");
permutationRecursion("RAM"," ");

console.log("check if the Stirng is Palindrome");
palindrome(str2);
palindrome(str1);
palindrome("madam");


console.log("check anograms");
anograms("ram", "mar");
anograms("ram", "m3faar");
anograms("listen", "silent"); 
anograms("apple", "papel");   
anograms("rat", "car");    

console.log("count vowels and consonant");
countVowelsAndConst(str2);
countVowelsAndConst(str1);

console.log("print unique Character");
uniqueChar(str2);
uniqueChar(str1);







