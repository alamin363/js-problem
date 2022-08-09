const phones = [
  {name:'Samsung', Storage: '32gb', prich:'30000', color: 'Silver'},
  {name:'Nokia', Storage: '32gb', prich:'50000', color:'green'},
  {name:'Walton', Storage: '32gb', prich:'10000',color: 'black'}
]

function chipestPhone(phones) {
  let cheapest = phones[0];
  for(let i = 0; i < phones.length; i++){
    let phone = phones[i];
    if(phone.prich < cheapest.prich){
      cheapest = phone;
    }
  }
  return cheapest;
}

let minimamPrich = chipestPhone(phones);
// console.log(minimamPrich);

// prodeckt prich ===== and joita nibo = quentity

const carth = [
  {name:'Samsung', Storage: '32gb', prich: 30000, color: 'Silver' ,quentity:2 },
  {name:'Nokia', Storage: '32gb', prich: 50000, color:'green' ,quentity:5 },
  {name:'Walton', Storage: '32gb', prich: 10000, color: 'black' ,quentity:2 },
]
function totalCost(carth) {
  let total = 0;
  for(let i = 0; i < carth.length; i++){
    let product = carth[i];
    const productTotal = product.prich * product.quentity;
    total = total + productTotal;
  }
  return total;
}

let totalsPrich = totalCost(carth);
console.log("tootal expesed today", totalsPrich);


// uniqu and and ununick number === 
const number =[1,2,3,4,2,4,5,3,6,8,7,7];

const dublicates = number.filter((value, index, array)=>{
  // unicke number are jorno === use
 return array.indexOf(value) !== index;
});
console.log("dublikated number :", dublicates);