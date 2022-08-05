// sum jog kore ============================================================
function isSum(number){
  let sum = 0;
  for(let i = 0; i < number.length ; i++){
    let element = number[i];
    sum += element;
  }
  return sum;
}

// bijor number bahir kore nei ======================================================
function oddNumber(num){
  let oddNum = [];
  for(let i = 0; i < num.length; i++){
     let value = num[i] ;
     if(value % 2 === 1){
       oddNum.push(value);
     }
  }
  return oddNum;
}



let number = [12, 22, 43, 77, 33];
let oddNumbers = oddNumber(number)
console.log(oddNumbers);
let sum = isSum(oddNumbers);
console.log(sum);