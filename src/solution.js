function solution(number) {
    if (number < 0) return 0;
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

function getAverage(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return total / scores.length;
}

// Probamos con los ejemplos
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])); 
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95])); 

solution(10);
module.exports = solution;
module.exports = getAverage;
