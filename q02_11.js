function mutliplyXByY1 () {
  x *= y
  console.log(x)
}

function mutliplyXByY2 () {
  let x = 2
  x *= y
  console.log(x)
}

const mutliplyXByY3 = (function () {
  let x = 2
  function innerMulti () {
    x *= y
    console.log(x)
    return x
  }
  return innerMulti
})()

const y = 5

let x
console.log('mutliplyXByY1 * 2----------')
x = 4
mutliplyXByY1()
mutliplyXByY1()

console.log('mutliplyXByY2 * 2----------')
x = 4
mutliplyXByY2()
mutliplyXByY2()

console.log('mutliplyXByY2 * 3----------')
x = 4
mutliplyXByY3()
mutliplyXByY3()
mutliplyXByY3()
