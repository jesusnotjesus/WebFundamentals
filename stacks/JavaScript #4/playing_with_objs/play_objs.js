/* Obj/array */
var users = [{name: "Michael", age: 37}, {name: "John", age: 30}, {name: "David", age: 27}];

/* #1 Print/log John's Age */
console.log(users[1].age);

/* #2 Print/log name of the first object */
console.log(users[0].name);

/* #3 print/log the name and age using for loop */
function loopThruObjDic(arr){
    for (var i = 0; i < arr.length; i++){
        console.log(users[i].name, " - ", users[i].age);
    } 
}
/* function call */
loopThruObjDic(users);