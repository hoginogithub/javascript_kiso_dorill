const { performance } = require('perf_hooks')

function measurePerformance (fnc, n, msg) {
  console.log(msg)
  const start = performance.now()
  console.log(fnc(n))
  console.log(`${performance.now() - start}ミリ秒`)
}

const fiboNoName = (n) => n < 2 ? n : fiboNoName(n - 1) + fiboNoName(n - 2)

/*
function * fiboGenerator () {
  let x = 0
  let y = 1
  let tmp
  while (true) {
    yield x
    tmp = x
    x = y
    y = tmp + y
  }
}

const fiboGen = (n) => {
  const f = fiboGenerator()
  for (let i = 0; i <= n; i++) {
    if (i !== n) {
      f.next()
    } else {
      return f.next().value
    }
  }
}
*/

measurePerformance(fiboNoName, 20, '-再起呼び出し アロー演算子----------')
// measurePerformance(fiboGen, 40, '-再起呼び出し ジェネレータ----------')