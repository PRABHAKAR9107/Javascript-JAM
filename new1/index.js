//sum of an array of

let array1 = [1, 2, 3, 4];
let sum = 0;
let sumArray = array1.map((sum, index) => sum + index);

console.log(sumArray);
// for (i = 0; i <= array1.length - 1; i++) {
//   sum = sum + array1[i];
//   console.log(sum);
// }

// for(i=0;i<=array1.length-1;i++){
//     if(array1.indexOf(i)==-1){
//         console.log(array1)
//     else
//   {
//   console.log("duplicate elements are found")
//         }
//     }
// }

let a = [1, 2, 3, 4];

let b = a.reverse();
console.log(b);

let c = [1, 2, 4, 8, 9];

let duplicateArray = c.filter((c) => c > 2);

console.log(duplicateArray);

//remove duplicate from an array1
