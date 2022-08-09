function paperRequirements(fbook, sbook, tbook) {
  let fastBookPages = fbook * 100;
  let secondBookPages = sbook * 200;
  let threeBookpages = tbook * 300;
   
  let allPages = fastBookPages + secondBookPages + threeBookpages ;
  return allPages;
}

let pages = paperRequirements(2,3,0);
console.log(pages);
 

// bestFrinds =====================================