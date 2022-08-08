for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fow fa");
  }else if(i % 3 === 0){
    console.log('fow');
  }else if (i % 5 === 0) {
    console.log("foo");
  }else{
    console.log(i);
  }
}

// quantity ======================================wood calculetor

function woodCalculator(chireQuantity, tableQuantity, bedQuantity) {
  const chireWood = chireQuantity * 3;
  const TableWood = tableQuantity * 10;
  const bedBedWood = bedQuantity * 50;

  const totalWood = chireWood + TableWood + bedBedWood ;
  return totalWood;
}

let result = woodCalculator(2, 2, 1)
console.log(result);

