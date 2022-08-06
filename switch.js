// let grade = 50;

// // boro vier style=======  🤣🤣

// switch (true) {
//   case grade >= 80:
//     console.log("A+");
//     break;
//     case 70 <= grade && grade <= 79:
//     console.log("A");
//     break;
//     case 50 <= grade && grade <= 69:
//       console.log("B");
//       break;
//       case 40 <= grade && grade <= 50:
//         console.log("C");
//         break;
//   default:
//     console.log("F");
//     break;
// }

//  MY Style Switch  🥴🥴

function switc(number) {
  let text = '';
  switch(true){
    case number >= 80:
    text += 'A+';
    break;
    case number >= 70 && number <= 79:
      text += 'A';
      break;
    case number >= 50 && number <= 69:
      text += 'B';
      break;
    case number >= 40 && number <= 49:
        text += 'C';
    break;
    default:
       text += 'F';  
      break;
  }
  return text;
}
 let parsone = 30;
 let gade1 = switc(parsone)
 console.log(gade1);