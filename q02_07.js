function log (record, username) {
  username = username || '名無しのひきこもり'
  const updateAt = new Date()
  return `${record} update by ${username} ` +
         `at ${updateAt} \n` +
         '----------------------------'
}

console.log(log('優勝したい'))
console.log(log('転職したい', 'h.ogino'))
console.log(log('どうやったら幸せになれる?', ''))