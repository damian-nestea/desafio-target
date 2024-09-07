// Exercício 2
/* Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre. */

function verificaLetra(frase, letra) {
  let contador = 0;
  if (frase.toLowerCase().indexOf(letra.toLowerCase()) != -1) {
    for (let i of frase) {
      if (i.toLowerCase() === letra.toLowerCase()) {
        contador++;
      }
    }
    return contador;
  } else {
    return contador;
  }
}

function programa() {
  let frase = prompt("Digite uma frase...");
  let letra = prompt("Digite uma letra...");

  let vezesNaFrase = verificaLetra(frase, letra);

  console.log(`Frase digitada...: ${frase}`);
  console.log(`Letra a buscar...: ${letra}`);
  if (vezesNaFrase !== 0) {
    console.log(
      `A letra ${letra} foi encontrada ${vezesNaFrase} vezes na frase digitada...`,
    );
  } else {
    console.log(`A letra ${letra} não foi encontrada na frase digitada...`);
  }
}

programa();
