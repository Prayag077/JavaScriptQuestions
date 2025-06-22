
console.log(`%cArrays Question`, "color: Magenta; font-weight: bold; background : white; font-size: 22px;");


function printCommonElements(arr1, arr2) {
    console.log("array: ", arr1);
    console.log("array: ", arr2);

    const set1 = new Set(arr1);
    const commonSet = new Set();

    for (const num of arr2) {
        if (set1.has(num)) {
            commonSet.add(num);
        }
    }

    console.log("Common Elements:", Array.from(commonSet));
}


function firstAndLastElementOfAnArrayList(list) {
    console.log("list: ", list);
    
    if (list.length>0) {
        console.log("first element", list[0]);
        console.log("last element", list[list.length-1]);
    } else {
        console.log("list is empty");
    }
}

function bubbleSort(arr) {
    console.log("array: ", arr);
    
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if (arr[j] > arr[ j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    console.log("Bubbel Sort : ", Array.from(arr));
    
}

function selectionSort(arr) {
    console.log("array: ", arr);
    
    for (let i = 0; i < arr.length-1; i++) {
       let minIndex = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j]<[arr[i]]) {
                minIndex = j;
            }
        }
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    console.log("Selection Sort", arr);
    
}

function insertionSort(array) {
    console.log("array: ", array);
    
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i-1;
        while (array.length > j +1 && array[j]>current ) {
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = current;
    }
    console.log("Insertion Sort :",array);
}

function removeDuplicates(array) {
    console.log("array: ", array);
    
    const unique = new Set(array);
    const result = Array.from(unique);

    console.log("Unique Elements ", result);
}

function removeDuplicatesFromAnArrayList(list){ 
    console.log("List: ", list);
    
    const unique = new Set(list);
    const result = Array.from(unique);

    console.log("after Removeing Duplicates: ", result);
    
}

function findMissingNumber(array) {
    console.log("Array: ", array);
    
    let n = array.length +1; 
    let totalSum =  n *(n+1)/2;
    let sum = 0;

    for (const n of array) {
        sum += n;
    }

    console.log("missing Number : " , totalSum-sum);
}

function smallestAndLargestElement(array) {
    console.log("Array: ", array);

    let smallest = array[0];
    let largest = array[0];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < smallest) {
            smallest = element;
        }

        if (element > largest) {
            largest = element;
        }
    }

    console.log("Largest Element : ", largest);
    console.log("Smallest Element :", smallest);
}


function searchElement(array, target) {
    console.log("Array: ", array);
    console.log("Target: ", target);

    let count = 1;
    for (const n of array) {
        if (target == n) {
            console.log("element At Index :",count);
            return;
        }
        count++;
    }
    console.log("Element not found in the give Array!!!!");
    
}

function sumOnlyIntegers(array) {
    console.log("Array: ", array);
    
    let sum = 0;

    for (const element of array) {

        const num = parseInt(element);

        if (!isNaN(num)) {
            sum +=num;
        }
    }

    console.log("Sum: ", sum);
}

function minAndMax(arr){
    console.log("Array: ", arr);

    let min = arr[0];
    let max = arr[0];

    if (arr.length == 0) {
        throw new Error("array shoudent be emplty");
    }

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element < min) {
            min = element;
        }

        if (element > max) {
            max = element;
        }
    }

    console.log("Max Element : ", max);
    console.log("Min Element :", min);

}

function countOddEven(arr) {
    console.log("Array: ", arr);

    let odd = 0;
    let even = 0;

    for (const element of arr) {
        if (element%2==0) {
            even++;
        } else {
            odd++;
        }
    }

    console.log("Odd count:", odd);
    console.log("even Count:",even);
}

function findNonRepeatedElements(arr) {
    console.log("Array: ", arr);
    
    const map = new Map();

    for (const element of arr) {
        map.set(element, (map.get(element) || 0)+1);
    }
    for (const [key,value] of map.entries()) {
        if (value == 1) {
            console.log(key + " ");
        }
    }

}

function reverseAnArray(arr) {
    console.log("Array: ", arr);

    let first = 0;
    let last = arr.length-1;

    while (first< last) {
        let temp = arr[first];
        arr[first] = arr[last];
        arr[last] = temp;

        first++;
        last--;
    }
    console.log("Reversed Array:", arr);
}


function styledLog(message) {
    console.log(`%c${message}`, "color: black; font-weight: bold; background : yellow; font-size: 16px;");
}
    let array1 = [1, 2, 3, 4, 5,4,6,22,77,23];
    const array2 = [3, 4, 5, 6, 7];

styledLog("print common elements");
printCommonElements(array1, array2);


styledLog("print first and last element of an array List");
const names = ["Ram", "Sita","Sita","Hanuman", "Lakshman"];
console.log("list items :",names);
firstAndLastElementOfAnArrayList(names);


styledLog("Bubble Sort");
bubbleSort(array1);

array1 = [1, 2, 3, 4, 5,4,6,22,77,23];
styledLog("Selection Sort");
selectionSort(array1);

array1 = [1, 2, 3, 4, 5,4,6,22,77,23];
styledLog("insertion Sort");
insertionSort(array1);

styledLog("remove Duplicate Elements from an Array")
removeDuplicates(array1);

styledLog("remove Duplicate Elements from an Array List")
removeDuplicatesFromAnArrayList(names);

styledLog("find Missing Number in an Array")
let array3 = [1, 2, 4, 5, 6];
findMissingNumber(array3); 

styledLog("Find smallest and largest element in an array");
smallestAndLargestElement(array1);

styledLog("Search Element in an Array");
searchElement(array1,74);
searchElement(array1,77);

styledLog("sum only integers")
let array4 = ["1","2","4","5","6","ram","5","7","sita","57","hanuman","4","4"];
sumOnlyIntegers(array4);

styledLog("min and max of an Array")
minAndMax(array1);
minAndMax(array2);
minAndMax(array3);

styledLog("odd even count in an Array")
countOddEven(array1);
countOddEven(array2);
countOddEven(array3);


styledLog("find non repeated elements in an array");
findNonRepeatedElements(array1);
const array5 = [1, 2, 2, 3, 4, 4, 5];
findNonRepeatedElements(array5);


styledLog("reverse an array");
reverseAnArray(array1);
reverseAnArray(array2);
reverseAnArray(array3);
reverseAnArray(array4);
reverseAnArray(array5);



