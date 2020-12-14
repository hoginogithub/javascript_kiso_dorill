function doHomeWork (subject, callback) {
  console.log(`${subject}の宿題を始める`)
  setTimeout(() => {
    console.log(`${subject}の宿題が終わった`)
    callback()
  }, 500)
}

const haveFan = () => console.log('遊びまくる!!')

doHomeWork('英語', haveFan)
