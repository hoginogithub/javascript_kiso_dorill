let gVar1 = 30;
let gVar2 = 3
const f3 = (() => {
  const captVar = gVar2
  return (p) => {
    return p + gVar1 + captVar
  }
})()

gVar1 = 40
gVar2 = 4
const f4 = (() => {
  const capVar = gVar2
  return (p) => {
    return p + gVar1 + capVar
  }
})()

gVar1 = 90
gVar2 = 9
console.log(f3(300))
console.log(f4(400))
