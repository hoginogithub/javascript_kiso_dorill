function * fib (n) {
  let current = 1
  let pre = 0
  let tmp
  while (n) {
    yield current
    n -= 1
    tmp = current
    current = tmp + pre
    pre = tmp
  }
}

const g = fib(50)
for (const x of g) console.log(x)
