function splitAtX(string) {
  let beforeX = string.slice(0, string.indexOf("x"))
  let afterX = string.slice(string.indexOf("x")+1)

  for(let i = 0; i < string.length; i++) {
      if(string[i].toLowerCase() === 'x') {
          if(beforeX.length > afterX.length) {
            return beforeX;
          } else {
            return afterX;
          }
      }
  }
  return 'There’s no x'
}
