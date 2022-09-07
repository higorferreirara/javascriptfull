let vara = 'A';
let varb = 'B';
let varc = 'C';

console.log(vara, varb, varc);

let vard = vara;
vara = varb;
varb = varc;
varc = vard;

console.log(vara, varb, varc);

// solução moderna
// [vara, varb, varc] = [varb, varc, vara];