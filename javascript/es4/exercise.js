function sumUntil(maxValue) {
  if(maxValue === 0)
    return 0
  return maxValue + sumUntil(maxValue-1)
}

console.log(sumUntil(5));