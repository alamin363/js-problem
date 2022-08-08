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

// splice ....sclice are boro vi kintu mole arr kea change kore😵‍💫

const frinds = [12, 13, 24, 25, 53, 34, 45 ,76];
let partial = frinds.splice(2, 4, 100, 200, 300);
//  *200 and *300 Added
console.log(partial);
console.log(frinds);

//  REMOVE DUBLICATES ==================================================================================================================================
// orjinal name.............
const names = ['Alamin', 'robiul', 'Alamin', 'Nafi', 'robiul'];

function removeDuplicate(names){
  const unique = [];
  for(let i = 0; i < names.length; i++){
    const name = names[i];
    if(unique.includes(name) === false){
      unique.push(name);
    }
  }
  return unique;
}


let uniqueNames = removeDuplicate(names);
console.log(uniqueNames);

//  3 dara bivaggo 

function divisibelBy3(){
  let count = 0;
  for(let i = 1; i <= 20; i++){
    if(i % 3 === 0){
     count++;
    }
  }
  return count;
}

let resule = divisibelBy3();
console.log(resule);

let number = [12, 13 ,44, 10];
let resul1 = number.sort();
console.log(resul1);

function avareg(n) {
  let count = 0, sum = 0;
  for(let i = 0; i <= n; i++){
    count++;
    sum += i;
  }
  const avg = sum / count;
  return avg;
}

let avareg1 = avareg(30);
console.log(avareg1);

// 

function electricityBill(unit){
  let bill;
  if(unit <= 100){
    bill = unit * 5;
  }
  else if(unit <= 200){
    const first100 = 100 * 5;
    const remaining = unit - 100;
    const remainingCost = remaining * 6;
    bill = first100 + remainingCost;
  }
  else{
    const first100 = 100 * 5;
    const secont100 = 100 * 6;
    const remaining = unit - 200;
    const remainingBoll = remaining * 7;
    bill = first100 + secont100 + remainingBoll;

  }
  return bill;
}

const totalBill = electricityBill(250);
console.log(totalBill);

// prime number jei sonka oi sonka and 1 dara vag jai na ;

function isPrime(number) {
  for(let i = 2; i < number; i++){
   if(number % i == 0){
    return false;
   }
  }
  return true;
}

let prime = isPrime(4);
console.log(prime);

