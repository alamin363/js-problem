let shoping = {
  panjabi:1,
  paigama:1,
  sharte:2,
  pante:3
}
// let keys = Object.keys(shoping)
// // console.log(keys);
// // let values = Object.values(shoping);
// // console.log(values);

// for (let i = 0; i < keys.length; i++){
//   let propertyNames = keys[i]
//   let propertiesValues = shoping[propertyNames]
//   console.log(propertyNames, propertiesValues);
  
// }


for (const i in shoping) {
  let value = shoping[i]
  console.log(i, value); 
};

// problime sloving gune fole 10 ============================================================
function mathThiten(num){
  for (let i = 1; i <= 10; i++) {
    const element = i * num;
    console.log(element);
    
  }
}

mathThiten(10)


function lowerCase(name) {
  let lowerCaseName = name.toLowerCase();
  console.log(lowerCaseName);
  return lowerCaseName;
};

var text = 'This sentence has some Miccfgh CASE LeTTeRs in it.';
var upper = text.toUpperCase()
let leter = lowerCase(upper)
console.log(leter);

// 
function fullName(halfName) {
  let fullName = halfName + " " + 'islam' ;
  return fullName;
}

let fname = fullName('Alamin')

console.log(fname);


//  scoure math
function square(x) {
  let numbers = Math.pow(x, 2)
  return numbers;
}

console.log(square(5));

// convter with function
function feetToMeter(feets) {
  const valus = feets /  3.28084;
  const value = valus.toFixed(2);
  // string to number 
  let values = parseFloat(value);
  return values;
}

const meter = feetToMeter(12);
const me = feetToMeter(5.7);
console.log(me);

// JORE AND BAJORE .......

function adEven(numbers){
  let number = numbers % 2;
  if(number === 0){
    console.log("ami jore");
    return true;
  }else{
    console.log("Ami bajore");
    return false;
  }
}

const adeven = adEven(34);
console.log(adeven);


//======================== problem ============================================================

function  leapYear(year){
  if(year % 4 === 0){
    return true;
  }
  return false;
}

let myYear = leapYear(2023);

console.log(myYear);

//  jore bejore odd>
function odd(years){
  if(years % 2 === 0){
    return true;
  }
  return false;
}

// let myAge = 21;
// let odds = odd(myAge);
// console.log(odds);

// ==================

function timer(hours){
  let text = '';
  let min = hours * 60;
  text += 'Minute is : ' + min;
  return text;

}
let time = 1;
let minite = timer(time);
// console.log(minite);

//  Hights Number ===============

function heightNumber(number){
  let number1 = number[0];
  for(let i = 0; i < number.length; i++){
    let value = number[i];
    if(number1 < value){
      number1 = value;
    }
  }
  return number1;
}

const heights = [167, 200, 400, 500, 1000, 367];
let resultes = heightNumber(heights);
console.log(resultes);
// minimum number====-------

function miniMum(valus){
  let result = valus[0];
  for(let i = 0; i < valus.length; i++){
    let numbers = valus[i];
    if(result > numbers){
      result = numbers;
    }
  }
  return result;
}


const numbers = [167, 200, 50, 400, 500, 1000, 367];
let result = Math.min(...numbers);
// console.log(result);
let minimamNum = miniMum(numbers);
console.log(minimamNum);


function reverse1(name){
  let text = '';
 for(let i = name.length-1; i >= 0; i--){
   let names = name[i];
   console.log(names);
   text += names;
 }
 return text;
}



let name = 'i am a good boy'
let resul = reverse1(name);
console.log(resul);

//  reversh  why/

function reverse(arr){
  let element = arr.split(' ');
  let arre = [];
  for(let i = element.length-1; i >= 0; i--){
    let arres = element[i];
    arre.push(arres);
  }
  // return arre;
  const myString = arre.join(' ');
  return myString;
}

let me1 = 'alalmin is a good boy his not belong'
let result2 = reverse(me1);
console.log(result2);