# Desafio para Estágio na Target

Resolução das seguintes atividades:

1. Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

**IMPORTANTE**: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

2. Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

**IMPORTANTE**: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

3. Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?

**RESPOSTA** 77. Confira na pasta do exercício 3 para verificar a resposta, por favor.

4. Descubra a lógica e complete o próximo elemento:
   **a)** 1, 3, 5, 7, ??
   **b)** 2, 4, 8, 16, 32, 64, ??
   **c)** 0, 1, 4, 9, 16, 25, 36, ??
   **d)** 4, 16, 36, 64, ??
   **e)** 1, 1, 2, 3, 5, 8, ??
   **f)** 2,10, 12, 16, 17, 18, 19, ??

**RESPOSTA**
**a)** 1, 3, 5, 7, 9
**b)** 2, 4, 8, 16, 32, 64, 128
**c)** 0, 1, 4, 9, 16, 25, 36, 49
**d)** 4, 16, 36, 64, 100
**e)** 1, 1, 2, 3, 5, 8, 13
**f)** 2,10, 12, 16, 17, 18, 19, 200

5. Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

**RESPOSTA**

Considerando os interruptores I1, I2, I3 e as salas S1, S2 e S3:

- Ligo o interruptor I1, só desligo após 5 minutos.
- Após desligar o interruptor I1, ligo o interruptor I2.
- **1ra ida**. Vou até a sala S1. Caso a lâmpada esteja acessa, I2 corresponde a S1. Caso a lâmpada esteja desligada, mas quente, I1 corresponde a S1. Caso a lâmpada esteja desligada e fria I3 corresponde a S1.
- Neste ponto já descobri a correspondência entre uma sala e um interruptor, faltando descobrir apenas 2.
- Havendo descoberto um dos interruptores e sobrando dois interruptores por descobrir, ligo um deles e o outro deixo desligado.
- **2da ida**. Vou até a sala S2. Caso esteja ligada a lâmpada, S2 corresponderá ao interruptor acionado, caso não o interruptor corresponderá a S3.
