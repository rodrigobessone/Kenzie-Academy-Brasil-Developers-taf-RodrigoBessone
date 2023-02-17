// Variáveis para aplicar os resultados do teste. Não as altere.

const gender = process.argv[2]; // Sexo 
const height = process.argv[3]; // Altura
const barReps = process.argv[4]; // Repetições com barra
const barSeconds = process.argv[5]; // Tempo das repetições com barra 
const abs = process.argv[6]; // Abdominais
const runDistance = process.argv[7]; // Distância da corrida
const runTime = process.argv[8]; // Tempo da corrida
const swimDistance = process.argv[9]; // Distância da natação
const swimTime = process.argv[10]; // Tempo da natação
const diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

// Importante:
// Se o sexo (gender) for masculino, utilize a palavra "male"
// Se o sexo (gender) for feminino, utilize a palavra "female"

// Sugestão para começar:
// if (gender === "male")  
// **sua lógica a partir daqui**




// Deve conter apenas esse console.log no seu código.
// Senão os testes não irão funcionar.

/*Ao avaliar um candidato em uma avaliação física, eu criei uma estrutura condicional para 
determinar se o candidato é aprovado ou não. Primeiramente, utilizei um if para avaliar as 
condições de gênero masculino, altura mínima de 1.70 metros e pelo menos 41 abdominais 
realizados. Em seguida, criei um if aninhado com mais condições, avaliando o número mínimo 
de 6 repetições na barra fixa, tempo de até 15 segundos para a série, além de uma 
distância mínima de 3000 metros em um tempo máximo de 720 segundos para a corrida, com uma 
opção de OU para uma distância mínima de 5000 metros em um tempo máximo de 1200 segundos. 
Para finalizar a primeira condicional, acrescentei uma avaliação da distância mínima de natação 
de 100 metros em um tempo de até 60 segundos, com a opção de OU para um tempo de mergulho de 
até 30 segundos. Por fim, defini um valor booleano "true" como resultado se todas as condições 
foram atendidas, e o candidato seria considerado aprovado.*/

if (gender == "male" && height >= 1.70 && abs >= 41) {
  if ((barReps >= 6 || barSeconds <= 15) && (runDistance >= 3000 && runTime <= 720) ||
    (runDistance >= 5000 && runTime < 1200)) {
    if ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30) {
      passed = true;
    }
  }

/*Para avaliar uma candidata em uma avaliação física, eu criei uma estrutura condicional com 
diversas condições. Primeiramente, utilizei um "if" para avaliar se o gênero da candidata é 
feminino, se ela tem altura mínima de 1,60 metros e se ela consegue realizar pelo menos 41 
abdominais. Em seguida, criei um "if" aninhado com mais condições, avaliando se ela consegue fazer
 no mínimo 5 repetições na barra, se ela consegue fazer a série em um tempo de até 
 12 segundos, e ainda exigindo que ela percorra pelo menos 4.000 metros em um tempo máximo de 900 
 segundos na corrida, com a opção de OU para uma distância mínima de 6.000 metros em um tempo 
 máximo de 1.320 segundos. Depois disso, finalizei a primeira condicional avaliando se ela consegue 
 nadar pelo menos 100 metros em um tempo de até 60 segundos, com a opção de OU para um tempo de 
 mergulho de até 30 segundos. Finalmente, defini um valor booleano "true" como resultado se todas 
 as condições foram atendidas, e a candidata seria considerada aprovada.*/
  
} else if (gender == "female" && height >= 1.60 && abs >= 41) {
  if ((barReps >= 5 || barSeconds <= 12) && (runDistance >= 4000 && runTime <= 900) ||
    (runDistance >= 6000 && runTime < 1320)) {
    if ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30) {
      passed = true;
    }
  }
} 
console.log(passed);


