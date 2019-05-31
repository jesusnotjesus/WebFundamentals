/*  Jesus Ramos
    Basic Foundations II
 */

 /* #1 Biggie Size */
 function makeItBig(arr){
     for (var i = 0; i < arr.length; i++){
         if (arr[i] > 0){
             arr[i] = "big";
         }
     }
     return arr;
 }

 var nonBigArr = [-1,3,5,-5];
 var biggieArr = makeItBig(nonBigArr);
 console.log(biggieArr);



 /* #2 Print Low and Return High */
 function printLowReturnHigh(arr){
     var max = arr[0];
     var min = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
        else if (arr[i] < min){
            min = arr[i];
        }
    }
    console.log("Printed Lowest Number: ", min);
    return max;
 }

var multiArr = [-1,3,5,-2,10];
var printreturnedMax = printLowReturnHigh(multiArr);
console.log("This is the returned highest number: ", printreturnedMax);



/* #3 Print One, Return Another */
function printOneReturnAnother(arr){
    for (var i = 0; i < arr.length; i++){
        console.log("The second to last value is: ", arr[arr.length - 2]);
        if (arr[i]%2 == 1){
            return arr[i];
        }
    }
}

var secondToLastAndFirstOddArr = [2,4,9,7,18,-2];
var firstOddNum = printOneReturnAnother(secondToLastAndFirstOddArr);
console.log("The first odd value returned is first odd num is: ", firstOddNum);


/* #4 Double Vision */
function DoubleVision(arr){
    var double = 0;
    var newArr = [];

    for (var i = 0; i < arr.length; i++){
        double = arr[i] * 2;
        newArr.push(double);
    }
    return newArr;
}

var singleVision = [1,2,3,4,-8];
var doubledArr = DoubleVision(singleVision);
console.log(doubledArr);



/* #5 Count Positives */
function countPositives(arr){
    var counter = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            counter++;
        }
    }
    arr[arr.length - 1] = counter;
    return arr;
}

var countPositivesArr = [-1,1,1,1];
var countedPosArr = countPositives(countPositivesArr);
console.log(countedPosArr);



/* #6 Evens and Odds */
function evensAndOdds(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i]%2 == 1 && arr[i + 1]%2 == 1 && arr[i + 2]%2 == 1){
            console.log("That's Odd!");
        }
        else if (arr[i]%2 == 0 && arr[i + 1]%2 == 0 && arr[i + 2]%2 == 0){
            console.log("Even More So!");
        }
    }
}

var oddsArr = [1,1,1,2,3,5];
var evensArr = [2,2,2,3,5,6,];
var bothEvenAndOddArr = [1,1,1,0,2,2,2];
evensAndOdds(oddsArr);
evensAndOdds(evensArr);
evensAndOdds(bothEvenAndOddArr);



/* #7 Increment the seconds */
function incrementTheSeconds(arr){
    for (var i = 0; i < arr.length; i++){
        if (i%2 == 1){
            arr[i] = arr[i] + 1;
        }
    }
}

var incrementTheSecondsArr = [1,2,3,4];
var everyOtherOddsArr = incrementTheSeconds(incrementTheSecondsArr);
console.log(incrementTheSecondsArr);

/* #8 Previous Lengths */
function previousLengths(arr){
    for (var i = arr.length - 1; i > 0; i--){
        arr[i] = arr[i - 1].length;
    }
    return arr;
}

var stringArr = ["hello","dojo","awesome"];
var prevSTRLengthsArr = previousLengths(stringArr);
console.log(prevSTRLengthsArr);

/* #9 Add 7 */
function addSeven(arr){
    var newArr = [];
    var addSeven = 0;
    for(var i = 0; i < arr.length; i++){
        addSeven = arr[i] + 7;
        newArr.push(addSeven);
    }
    return newArr;
}

var beforeSevenArr = [1,2,3];
var afterSevenArr = addSeven(beforeSevenArr);
console.log(afterSevenArr);


/* #10 Reverse Array */
function reverseTheArray(arr){
    var temp = 0;
    for (var i = 0; i < arr.length/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}

var forwArr = [1,2,3,4];
var reverArr = reverseTheArray(forwArr);
console.log(reverArr);

/* #11 Outlook Negative */
function outlookNegative(arr){
    var newNegArr = [];
    var negNum = 0;

    for (var i =0; i < arr.length; i++){
        if (arr[i] > 0){
            arr[i] = arr[i] * -1;
        }
        newNegArr.push(arr[i]);
    }
    return newNegArr;
}

var almostNegArr = [1,-3,5];
var compleNegArr = outlookNegative(almostNegArr);
console.log(compleNegArr);

/* #12 Always Hungry */
function alwaysHungry(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == "food"){
            console.log("yummy");
        }
        else if (arr[i] != "food" && i >= arr.length - 1){
            console.log("I'm Hungry");
        }
    }
}

var foodArr = ["food","food","food"];
var hungryArr = [4,2,1];
var sayYummy = alwaysHungry(foodArr);
var sayHungry = alwaysHungry(hungryArr);

/* #13 Swap towards the center */
function swapTowardsCenter(arr){
    var firstIdx = arr[0];
    var thirdIdx = arr[2];
    
    arr[0] = arr[arr.length - 1]; //making first index the last index's value
    arr[arr.length - 1] = firstIdx; //making the last index the first index's value

    arr[2] = arr[arr.length - 3]; //making third index the third-to-last index's value
    arr[arr.length - 3] = thirdIdx; //making the third-to-last index the third index's value

    console.log(arr);
}

var arrToBeSwapped = [1,2,3,4,5,6];
var arrToBeSwappedTwo = [true,42,"ada",2,"pizza"];
swapTowardsCenter(arrToBeSwapped);
swapTowardsCenter(arrToBeSwappedTwo);

/* #14 Scale the Array */
function scaleTheArray(arr,multiplier){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * multiplier;
    }
    return arr;
}

var nonScaledArr = [1,2,3];
var scaler = 3;

var scaledArr = scaleTheArray(nonScaledArr,scaler);
console.log(scaledArr);