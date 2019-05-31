/* Arrays Reintroudction */


/*-------------------------------- Number 1: STARTS HERE -------------------------------------------*/
var number = 3; //Number we will be comparing
var compArr = [5, 2, 6, 3]; // Array we will be comparing

function printNumOfGreaterValsInArray(arr,Y){
    var counter = 0; //keeps track of numbers greater than Y
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > Y){
            counter++;
        }
    }
    return counter;
}

var numbersGreater = printNumOfGreaterValsInArray(compArr, number);
console.log(numbersGreater);

/*-------------------------------- Number 1: ENDS HERE -------------------------------------------*/


/*-------------------------------- Number 2: STARTS HERE -------------------------------------------*/
var regArr = [5,9,2,1,4];

function maxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var add = 0;
    var avg = 0;

    for (var i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
        else if (arr[i] < min){
            min = arr[i];
        }
        add = add + arr[i];
    }
    avg = add / arr.length;
    console.log("Max is: ", max);
    console.log("Min is: ", min);
    console.log("Avg is: ", avg);
}

maxMinAvg(regArr);
/*-------------------------------- Number 2: ENDS HERE -------------------------------------------*/


/*-------------------------------- Number 3: STARTS HERE -------------------------------------------*/
var replaceArr = [1,2,-3,-5,5];

function replaceNegVals(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}

var DojoArr = replaceNegVals(replaceArr);
console.log(DojoArr);
/*-------------------------------- Number 3: ENDS HERE -------------------------------------------*/


/*-------------------------------- Number 4: STARTS HERE -------------------------------------------*/
var arrStart = 2;
var arrEnd = 4;
var shortenArray = [20,30,40,50,60,70]; // [20,30,70]

function removeValsInIndexes(arr,start,end){
    var offset = end - start + 1;
    for (var i = start; i <= offset; i++){
        arr[i] = arr[i + offset]; //sets 70 index 2
    }
    console.log(arr); //shows array with undefined value and 
    arr.length = arr.length - offset;
    return arr;
}

var smallerArray = removeValsInIndexes(shortenArray, arrStart, arrEnd);
console.log(smallerArray);
/*-------------------------------- Number 4: ENDS HERE -------------------------------------------*/
