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

function ipsBetween(start, end) {
  function ipToNumber(ip) {
    return ip
      .split('.')               
      .map(Number)              
      .reduce((acc, oct) => acc * 256 + oct, 0); 
  }

  return ipToNumber(end) - ipToNumber(start);
}


module.exports = solution;
module.exports = ipsBetween;