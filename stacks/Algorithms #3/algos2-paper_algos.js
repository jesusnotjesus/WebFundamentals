/* Paper Algos: Part 2: */

  /*-------------------------------- Number 1: STARTS HERE -------------------------------------------*/

function printUpTo(x){
    if (x < 0){
        return false; //cannot take in negative numbers /* works */
    }
    else {
        for (var i = 1; i < x + 1; i++){ /* works */
            console.log(i);
        }
    }
}
  printUpTo(1000000); // should print all the integers from 1 to 1000000
  y = printUpTo(-10); // should return false
  console.log(y); // should print false
  /*-------------------------------- Number 1: ENDS HERE -------------------------------------------*/



  /*-------------------------------- Number 2: STARTS HERE -------------------------------------------*/
  function printSum(x){
    var sum = 0;
    for (var i = 0; i < x + 1; i++){
        console.log("integer count: ", i);
        console.log("Sum so far: ", sum);
        sum = sum + i;
    }

    return sum
  }
  y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
  console.log("Final Sum: ", y) // should print 32640
  /*-------------------------------- Number 2: ENDS HERE -------------------------------------------*/


  /*-------------------------------- Number 3: STARTS HERE -------------------------------------------*/
  function printSumArray(x){
    var sum = 0;
    for(var i=0; i<x.length; i++) {
        sum = sum + x[i];
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // should log 6 (sum of all array values given)
    /*-------------------------------- Number 3: ENDS HERE -------------------------------------------*/