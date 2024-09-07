// Exercício
/* Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA); 

Ao final do processamento, qual será o valor da variável SOMA?
*/

// RESPOSTA: 77 é o valor final da variável SOMA. Comprovado pelo código abaixo.

function programa() {
  let indice = 12;
  let soma = 0;
  let k = 1;

  while (k < indice) {
    k += 1;
    soma += k;
  }

  console.log(soma);
}

programa();
