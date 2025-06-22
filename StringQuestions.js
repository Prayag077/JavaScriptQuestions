console.log(`%cString Questions`, "color: Magenta; font-weight: bold; background : white; font-size: 22px;");

function reverseString(str) {
    console.log("String : " , str);
    
    let nstr= " ";

    for (let i = 0; i < str.length; i++) {
        nstr = str.charAt(i) + nstr;
    }

    return nstr;
}

function reverseEachWord(str) {
    console.log("String : " , str);
    
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
    console.log("String : " , str);

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
    console.log("String : " , str);
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
    console.log("String : " , str);
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
    console.log("String : " , str);
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
    console.log("Str1: " , str1);
    console.log("Str2: ", str2);
    
    
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
    console.log("String : " , str);
    
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
    console.log("String : " , str);
    
    let unique = new Array(256).fill(false);

    for (let c of str) {

        let code = c.charCodeAt(0);

        if (!unique[code]) {
            console.log(c);
            unique[code] = true;
        }
    }
}

function printEvenIndex(str) {
    console.log("String : " , str);
    let nstr =" ";
    for (let i = 0; i < str.length; i++) {
        if (i %2 === 0 ) {
            nstr += str.charAt(i);
        }
    }
    console.log(nstr);
}

function removeSpace(str) {
    console.log("String : " , str);
    let nstr = " ";

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) != " " ) {
            nstr += str.charAt(i);
        }
    }
    console.log(nstr);
}


function eachLetterTwice(str) {
    console.log("String : " , str);
    
    let nstr = " ";

    for (let c of str) {
        nstr += c + c;
    }
    console.log(nstr);
    
}

function swapTwoString(str1,str2) {
    console.log(`Before Swapping str1 = ${str1} ` );
    console.log(`Before Swapping str2 = ${str2}`);
    
    str1 = str1 + str2;
    str2 = str1.substring(0,str1.length - str2.length);
    str1 = str1.substring(str2.length);

    console.log(`After Swapping str1 = ${str1} ` );
    console.log(`After Swapping str2 = ${str2}`);
}

function countChar(str) {
    console.log("String : " , str);
    let count = 1;
    let nstr = " ";

    for (let i = 0; i < str.length; i++) {
        if (i+1 < str.length && str.charAt(i) == str.charAt(i+1)) {
            count++;
        } else {
            nstr += str.charAt(i) + count;
            count = 1;
        }
    }
    console.log(nstr);
}

function upperLower(str) {
    console.log("String : " , str);

    let upper = " ";
    let lower = " ";

    for (let c of str) {
        if ('a' <= c && 'z' >= c) {
            upper += c;
        } else if (c >= 'A' && c <= 'Z') {
            lower += c;
        }
    }

    console.log("Lower case:", lower);
    console.log("Upper case:", upper);
}


function digitAlpha(str) {

    console.log("String : " , str);

    let digit = " ";
    let alpha = " ";

    for (let c of str) {
        if ('0' <= c && '9' >= c) {
            digit += c;
        } else{
            alpha += c;
        }
    }

    console.log(" Alphabet:", alpha);
    console.log("digit:", digit);
}

function digitAlphaInSameLine(str) {

    console.log("String : " , str);

    let digit = " ";
    let alpha = " ";

    for (let c of str) {
        if ('0' <= c && '9' >= c) {
            digit += c;
        } else{
            alpha += c;
        }
    }

    console.log(" AlphaAndDigit:", alpha , digit);
    
}

function format(str) {

    console.log("BEFORE FORMAT: " + str);
    let number = parseInt(str,10);
    let formatted = number.toString().padStart(11,'0');
    console.log("AFTER FORMAT: " + formatted);

}

function longestWithhoutRepeatingChar(str) {

    console.log("String " , str);
    
    
    let first = 0;
    let end = 0;
    let minIndex = 0; 

    const set = new Set();

    while (end < str.length) {
        if (!set.has(str.charAt(end))) {
            set.add(str.charAt(end));
        minIndex = Math.max(minIndex, end - first +1);
        end++;
        } else {
            set.delete(str.charAt(first));
            first++;
        }
    }

    console.log("Longest length without repeating characters:", minIndex);
}




const str = "Jai shree ram";
const str1 = "Jai shree ram Jai shree ramJai shree ram Jai shree ram Jai shree ram";
const str2 = "malayalam";
const str3 = "JAI shree RAM Jai SHREE ramJai shree RAM JAI SHREE ram Jai shree ram";
const str4 = "m3al8aya77la5442m";


function styledLog(message) {
    console.log(`%c${message}`, "color: black; font-weight: bold; background : yellow; font-size: 16px;");
}



styledLog("reverse each character of the given String");
console.log(reverseString(str));

styledLog("reverse each Word of the given String");
console.log(reverseEachWord(str));

styledLog("check for duplicate Characters in a given String");
dupeChar(str1);

styledLog("Check Occurrence of each word of the give String");
occuranceOfEachWord(str1);

styledLog("check Number Of Words from the give String");
countNumberOfWords(str);
countNumberOfWords(str1);

styledLog("check permutation of the Given String");
permutationRecursion("ABC", " ");
permutationRecursion("RAM", " ");

styledLog("check if the String is Palindrome");
palindrome(str2);
palindrome(str1);
palindrome("madam");

styledLog("check anagrams from given Strings");
anograms("ram", "mar");
anograms("ram", "m3faar");
anograms("listen", "silent");
anograms("apple", "papel");
anograms("rat", "car");

styledLog("count vowels and consonants from the give String");
countVowelsAndConst(str2);
countVowelsAndConst(str1);

styledLog("print unique Characters from the given String");
uniqueChar(str2);
uniqueChar(str1);

styledLog("print even Index Characters from the give String");
printEvenIndex(str1);
printEvenIndex(str2);

styledLog("remove Spaces frome the give string");
removeSpace(str);
removeSpace(str1);

styledLog("print each letter twice");
eachLetterTwice(str);
eachLetterTwice(str1);

styledLog("swap two Strings without using a third one");
swapTwoString(str1, str2);

styledLog("character Count in a row");
countChar(str);
countChar(str1);

styledLog("Upper and Lower case Extractor");
upperLower(str3);

styledLog("Digit and Alpha Extractor");
digitAlpha(str4);

styledLog("Print Digit and Alphabet in same line");
digitAlphaInSameLine(str4);

styledLog("Format number in 11 digits");
format("12345");
format("4512");

styledLog("longest Without repeating character in given String");
longestWithhoutRepeatingChar(str);
longestWithhoutRepeatingChar(str1);
longestWithhoutRepeatingChar(str2);
















