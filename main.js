const binaryArrayToNumber = arr => {
  let sum = 0;
  let arrlength = arr.length;
  for (let i = 0; i < arr.length; i++){
    if( arr[i] === 1 ){
        sum = sum + Math.pow(2,arrlength - (i+1));
    }
  }
  return sum;
};