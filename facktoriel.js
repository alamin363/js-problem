// summ ===========================================
function fackToril(number){
  let num = 1;
  for(let i = 1; i <= number; i++){
    num = num * i;
  }
  return num;
}

//  6! == 6*5*4*3*2*1 

function name(params){
  let num = 1;
  for(let i = params; i >= 1; i--){
    num = num * i
  }
  return num;
}
let result1 = name(6)

let result = fackToril(6);
console.log(result1);


//  its lepier================================

function arrLeapYear(year){
  let arry = [];
  for(let i = 0; i < year.length; i++){
    let year1 = year[i] 
    if(year1 % 4 === 0){
      year1 += " its Lipear"
      arry.push(year1);
    }else{
    year1 += " its not Lipear"
    arry.push(year1)
    }
  }
  return arry;
}


let years = [2023, 2024, 2025, 2028, 2030];

let leapYear = arrLeapYear(years);
console.log(leapYear);

//  random math 
// var randoms = () => {
//   var num;
//   do {
//       num = Math.floor(Math.random() * 10);
//       console.log(num);
//   } while (num);
// };

// randoms();
