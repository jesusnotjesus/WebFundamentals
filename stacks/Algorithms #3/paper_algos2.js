/* Algos III: Paper Algos II */

/*-------------------------------- Number 1: STARTS HERE -------------------------------------------*/
function printAverage(x){
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < x.length; i++){
        sum = sum + x[i];
    }
    avg = sum / x.length;
    return avg;
 }
 y = printAverage([1,2,3]);
 console.log(y); // should log 2
   
 y = printAverage([5,2,8]);
 console.log(y); // should log 5
/*-------------------------------- Number 1: ENDS HERE -------------------------------------------*/




/*-------------------------------- Number 2: STARTS HERE -------------------------------------------*/
function returnOddArray(){
    var oddArr = [];
    for (var i = 0; i < 256; i++){
        if (i%2 == 1){
            oddArr.push(i);
        }
    }
    return oddArr;
 }
 y = returnOddArray();
 console.log(y); // should log [1,3,5,...,253,255]
/*-------------------------------- Number 2: ENDS HERE -------------------------------------------*/




/*-------------------------------- Number 3: START HERE -------------------------------------------*/
function squareValue(x){

    for (var i = 0; i < x.length; i++){
        x[i] = x[i] * x[i];
    }
    return x;
 }
 y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]
/*-------------------------------- Number 3: ENDS HERE -------------------------------------------*/
