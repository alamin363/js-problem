// let personYear = 23;
// let parsone2year = 30;
// let result = Math.abs(personYear - parsone2year);
// console.log(result);
// if(result <= 5){
//   console.log('you are a frins');
// }else{
//   console.log('you are not be frinds');
// }

// const number = 2.1456;
// const fullNumber = Math.round(number);
// console.log(fullNumber); 
// const result1 = Math.ceil(number);
// const result2 = Math.floor(number);
// console.log(result1);
// console.log(result2);

//  random
for(let i = 0 ; i < 10; i++){
  const random = Math.round(Math.random() * 6);
console.log(random);

}
// aakane Math.random() purno sonka dei

// tempu ..........========
let numb1 = 7;
let num2= 10;
let temp = numb1;
// numb1 = num2;
// num2 = temp;
// console.log(numb1, num2 );

// oder style ......========
[numb1 , num2] = [num2 , numb1];
console.log(numb1, num2 );

// if-else vs math **

let Alamin = 60;
let robiul = 80;
let nafi = 90;
if (Alamin > robiul && Alamin > nafi) {
  console.log("cong Alamin");
}
else if(robiul > Alamin && robiul > nafi){
  console.log('cong mr robiul');
}else{
  console.log('cong nafi');
}

let Result = Math.max(Alamin, nafi, robiul);
console.log( Result);

// ================ buji nai===============

// console.log(Result);
let Result1 = Math.min(Alamin, nafi, robiul)
console.log( Result1);
