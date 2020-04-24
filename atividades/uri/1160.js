const numTest = 6; // 1 <= numTest <= 3.000 

// conferir os inputs se seguem as especificações e pegar os inputs
for(let i = 0; i < numTest; i++) {
  let PA = [100, 90000, 56700, 123, 100000, 62422];  // PopulationA  100 <= PA < 1.000.000  Sempre int 100 * 2.5 = 102 (sempre pra baixo)
  let PB = [150, 120000, 72000, 2000, 110000, 484317]; // PopulationB  PA < PB <= 1.000.000
  const GA = [1.0, 5.5, 5.2, 3.0, 1.5, 3.1] // crescimento populacional de A 0.1 ≤ G1 ≤ 10.0 && G2 < G1 Em porcentagem
  const GB = [0.0, 3.5, 3.0, 2.0, 0.5, 1.0] // crescimento populacional de B 0.0 ≤ G2 ≤ 10.0 && G2 < G1
  let time = 0

  // console.log(PA[i], PB[i], GA[i], GB[i])
  while(PA[i] <= PB[i] && time < 101) {
    PA[i] += parseInt(PA[i] * GA[i] / 100);
    PB[i] += parseInt(PB[i] * GB[i] / 100);
    time += 1;
    // console.log('while:',i,  time, 'PA[i]', PA[i], 'PB[i]', PB[i])

  }
  if(time > 100) {
    console.log('Mais de 1 seculo.')
  } else {
    console.log(`${time} anos.`)
  }
};
