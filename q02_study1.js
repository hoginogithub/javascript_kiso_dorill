function * generatorSample (n) {
  while (n) {
    yield n
    n -= 1
  }
}

const f = generatorSample(3)
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)

const g = generatorSample(6)
for (const x of g) console.log(x)
