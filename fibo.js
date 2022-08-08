// const fibo =[0, 1, 2, 3, 4, 5, 6];

// fibo[3] = fibo[2] +  fibo[1];
// fibo[4] = fibo[3] + fibo[2];

const fibo = [0, 1];
for(let i = 2; i <= 10; i++){
  fibo[i] = fibo[i-1] + fibo[i-2];
}
