const arr = []

//good -- populating the array
for (let value = 10; value <= 50; value += 10) {
  arr.push(value)
}

//bad -- iterating over an array
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}