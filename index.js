const init = require('./out/lib.js')
init().then(Module => {
  console.log(Module.myLibraryInit)
  Module.myLibraryInit()
})
