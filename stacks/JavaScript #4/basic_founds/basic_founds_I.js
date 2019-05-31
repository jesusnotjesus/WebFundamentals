/* 
File Name: Jesus Ramos
*/

/* #1: Get 1 to 255 */

//function that takes in empy array and returns array with nums 1- 255
function get1To255(arr){
    for(var i = 1; i < 256; i++){
        arr.push(i);
    }
    return arr;
}

//variables
var emptyArr = [];
var fullArr = get1To255(emptyArr);
console.log(fullArr);


/* #2: Get Even 1000 */
//function that adds all even numbers (% == 0) and gives the sum of them all
function getEven1000(){
    var evenSum = 0;
    for (var i = 1; i < 1001; i++){
        if (i%2 == 0){
            evenSum = evenSum + i;
        }
    }
    console.log(evenSum);
}

getEven1000();


/* #3: Sum Odd 5000 */
function sumOdd5000(){
    var oddSum = 0;
    for (var i = 1; i < 5001; i++){
        if (i%2 == 1){
            oddSum = oddSum + i;
        }
    }
    console.log(oddSum);
}

sumOdd5000();


/* #4: Sum of an entire array */
function sumOfAnArray(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

var addArray = [-5,2,5,12];
var result = sumOfAnArray(addArray);
console.log(result);


/* #5: Find Max */
function findMax(arr){
    var max = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

var maxArr = [-3,3,5,7];
var maxResult = findMax(maxArr);
console.log(maxResult);


/* #6: Find Average */
function findAverage(arr){
    var add = 0;
    var avg = 0;
    for (var i = 0; i < arr.length; i++){
        add = add + arr[i];
    }
    avg = add / arr.length;
    return avg;
}

var avgArray = [1,3,5,7,20];
var avgResult = findAverage(avgArray);
console.log(avgResult);


/* #7: Find Average */
function returnOddArray(arr){
    for (var i = 1; i < 51; i++){
        if (i%2 == 1){
            arr.push(i);
        }
    }
    return arr;
}

var nothingArray = [];
var oddArray = returnOddArray(nothingArray);
console.log(oddArray);


/* #8: Greater Than Y */
function greaterThanY(arr,Y){
    var counter = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > Y) {
            counter++;
        }
    }
    return counter;
}

var num = 3;
var compArray = [1,3,5,7];
var compResult = greaterThanY(compArray, num);
console.log(compResult);


/* #9: Squares */
function returnSquaredArray(arr){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

var nonSqaured = [1,5,10,-2];
var squaredArray = returnSquaredArray(nonSqaured);
console.log(squaredArray);


/* #10: Negatives */
function returnNonNegArray(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}

var negArray = [1,5,10,-2];
var nonNegArray = returnNonNegArray(negArray);
console.log(nonNegArray);


/* #11: Max/Min/Avg */
function returnMaxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var add = 0;
    var avg = 0;
    var maxMinAvgArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
        else if (arr[i] < min){
            min = arr[i]
        }
        add = add + arr[i];
    }
    avg = add / arr.length;
    maxMinAvgArr.push(max);
    maxMinAvgArr.push(min);
    maxMinAvgArr.push(avg);
    return maxMinAvgArr;
}

var multiValArray = [1,5,10,-2];
var mmaArray = returnMaxMinAvg(multiValArray);
console.log(mmaArray);


/* #12: Swap Values */
function swapValues(arr){
    var temp;
    temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    
    return arr;
}

var nonSwapArr = [1,5,10,-2];
var swappedArr = swapValues(nonSwapArr);
console.log(swappedArr);


/* #13: Number to String */
function negNumToString(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = "Dojo"
        }
    }
    return arr;
}

var negNoStringArr = [-1,-3,2];
var negToStringArr = negNumToString(negNoStringArr);
console.log(negToStringArr);