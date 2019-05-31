/*-------------------------------- Number 1: STARTS HERE -------------------------------------------*/
//Makes all negative values become zero

var negArray = [1,2,-1,-3];

function setNegsToZero(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}

var nonNegArr = setNegsToZero(negArray);
console.log(nonNegArr); //displays [1,2,0,0]
/*-------------------------------- Number 1: ENDS HERE -------------------------------------------*/




/*-------------------------------- Number 2: STARTS HERE -------------------------------------------*/
//moves all values forward by one index, dropping the first and leaving a 0 value at the end
//exxample: [1,2,3] -> [2,3,0]

var moveArr = [1,2,3];

function indexLeftArray(arr){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i + 1]; //takes the previous indexes spot so 2 moves to 1's spot.
    }
    arr[arr.length - 1] = 0; //mkaes last value 0 in array
    return arr;
}

var newArr = indexLeftArray(moveArr);
console.log(newArr);
/*-------------------------------- Number 2: ENDS HERE -------------------------------------------*/





/*-------------------------------- Number 3: STARTS HERE -------------------------------------------*/
//reverse array values -> ex: [1,2,3] -> (becomes) -> [3,2,1]
var forwArray = [1,2,3];

function reverseArrayVals(arr){
    for (var i = 0; i < arr.length/2; i++){
        var tempFirst = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length-i-1] = tempFirst;
    }
    return arr;
}

var reverArray = reverseArrayVals(forwArray);
console.log(reverArray);
/*-------------------------------- Number 3: ENDS HERE -------------------------------------------*/

var forwArray = [4,5,6];

function reverseArrayVals(arr){
    var tempFirst = arr[0];
    var tempLast = arr[arr.length - 1];
    var newArr = [];

    for (var i = arr.length - 1; i > 0; i--){
        console.log(arr[i]);
        
    }
    arr[0] = tempLast;
    arr[arr.length - 1] = tempFirst;
    return arr;
}

var reverArray = reverseArrayVals(forwArray);
console.log(reverArray);


/*-------------------------------- Number 4: STARTS HERE -------------------------------------------*/
var singleArr = [4,"Ulysses",42,false];

function repeatTwice(arr){
    for (var i = arr.length-1; i >= 0; i--){
        arr[2*i+1] = arr[i];
        arr[2*i] = arr[i];
    }
    return arr;
}

doubleArr = repeatTwice(singleArr);
console.log(doubleArr);
/*-------------------------------- Number 4: ENDS HERE -------------------------------------------*/
