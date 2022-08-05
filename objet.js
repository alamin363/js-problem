// let shoppingCart ={
//   book: 3,
//   sungalas:1,
//   mouse:1,
//   pen:24
// }

// let penCount = shoppingCart.pen;
// let penCount2 = shoppingCart['pen'];
// let properties = Object.keys(shoppingCart);
// let valus = Object.values(shoppingCart);
// console.log(valus);
// console.log(properties);
// console.log(penCount);
// console.log(penCount2);


// get
// let propertyNames = 'mouse'
// // set
// let propertiesValues = shoppingCart[propertyNames]

// console.log(propertyNames, propertiesValues);
// console.log(shoppingCart);

// set properties  Values

// shoppingCart.mouse = 15;
// console.log(shoppingCart);
// shoppingCart['mouse'] =29;
// console.log(shoppingCart);
// shoppingCart[propertyNames] = 89;
// console.log(shoppingCart);

// 

let shoping = {
  panjabi:1,
  paigama:1,
  sharte:2,
  pante:3
}
// let keys = Object.keys(shoping)
// // console.log(keys);
// let values = Object.values(shoping);
// console.log(values);

// for (let i = 0; i < keys.length; i++){
//   let propertyNames = keys[i]
//   let propertiesValues = shoping[propertyNames]
//   console.log(propertyNames, propertiesValues);
  
// }

for (const i in shoping) {
  let value = shoping[i]
  console.log(i, value); 
};

// problime sloving ============================================================
function mathThiten(num){
  for (let i = 0; i < 10; i++) {
    const element = i * num;
    console.log(element);
    
  }
}

// mathThiten(13)


function lowerCase(name) {
  let lowerCaseName =name.toLowerCase();
  console.log(lowerCaseName);
  return lowerCaseName;
};

var text = 'This sentence has some Miccfgh CASE LeTTeRs in it.';
var upper = text.toUpperCase()
// let leter = lowerCase(upper)
// console.log(leter);

// 
function fullName(halfName) {
  let fullName = halfName + " " + 'islam' ;
  return fullName;
}

// let fname = fullName('Alamin')

// console.log(fname);



function square(x) {
  let numbers = Math.pow(x,2)
  return numbers;
}

// console.log(square(5));

// convter with function
function feetToMeter(feets) {
  const valus = feets /  3.28084;
  const value = valus.toFixed(2);
  return value;
}

const meter = feetToMeter(12);
const me = feetToMeter(5.7);
// console.log(me);

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

// const even = adEven(33);
// console.log(even);

// const adeven = adEven(34);
// console.log(adeven);

function isLeapYear(year) {
  const remainder = year % 4;
  if (remainder === 0) {
    return true;
  }
  return false;
}

const myYearLeapYear = isLeapYear(2022);
console.log(myYearLeapYear);