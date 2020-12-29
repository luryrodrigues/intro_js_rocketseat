/* Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89 - B
* 70-79 - C
* 60-69 - D
* menor que 60 - E

*/

function getScore(score) {
  let scoreA = score >= 90 && score <= 100;
  let scoreB = score >= 80 && score < 90;
  let scoreC = score >= 70 && score < 80;
  let scoreD = score >= 60 && score < 70;
  let scoreE = score >= 0 && score < 60;


  if (scoreA){
    console.log("A")
  } else if(scoreB){
    console.log("B")
  } else if (scoreC) {
    console.log("C")
  } else if (scoreD) {
    console.log("D")
  } else if (scoreE) {
    console.log("E")
  } else {
    console.log("Nota inválida")
  }
}

getScore(92)