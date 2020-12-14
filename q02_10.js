function catchingDecorator (func) {
  return function (...args) {
    try {
      return func.apply(this, args)
    } catch (err) {
      console.log(`An unexpected ${err.name} occurred ` +
        `during "${func.name}": ${err.message}`)
    }
  }
}

let test = a => b
test = catchingDecorator(test)
test(5)
