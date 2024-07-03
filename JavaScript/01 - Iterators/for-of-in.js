const numbers = [10, 20, 30, 40, 50]

for (const i in numbers) {
  if (numbers[i] > 20) {
    break
  }
  console.log(numbers[i])
}

console.log('-------------------------------')

for (const value of numbers) {
  if (value > 20) {
    break
  }
  console.log(value)
}