function add(num1, num2) {
  if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    return 'plash enter number'
  }
  return num1 + num2;
}

const result =add(false , 45);

console.log(result);