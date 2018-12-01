
let arra = [2,4,5,7,9];

function insOrd(arr,n){
  if (arr.length == 0){
    return arr.splice(0, 0, n);
  } else if (arr[0] < n) {
    return arr.splice(0,0,n);
  } else {
    return insOrd(arr.splice(0,1),n).splice(0,0,arr[0]);
  }
}

function test(arr){
  console.log(arr.length);
  if (arr.length === 1){
    return arr;
  }else {
    return test(arr.splice(0,1)).splice(0, 0, arr[0]);
  }
}

function factorial(number) {
  if (number <= 0) { // terminal case
    return 1;
  } else { // block to execute
    return (number * factorial(number - 1));
  }
};

function insOrd2(arr,n){
  if (arr.length == 0){
    return arr[0] = n;
  }else if (arr[0] > n){
    // Insertar n en 0, retornando un array
    return [n].concat(arr);
  }else {
    let temp = arr.shift();
    console.log([temp])
    return [temp].concat(insOrd2(arr,n));
  }
}