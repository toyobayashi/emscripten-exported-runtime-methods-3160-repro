{{{ ((DEFAULT_LIBRARY_FUNCS_TO_INCLUDE instanceof Set ? DEFAULT_LIBRARY_FUNCS_TO_INCLUDE.add("$myLibraryInit") : DEFAULT_LIBRARY_FUNCS_TO_INCLUDE.indexOf("$myLibraryInit") === -1 ? DEFAULT_LIBRARY_FUNCS_TO_INCLUDE.push("$myLibraryInit") : undefined), "") }}}
{{{ ((EXPORTED_RUNTIME_METHODS instanceof Set ? EXPORTED_RUNTIME_METHODS.add("myLibraryInit") : EXPORTED_RUNTIME_METHODS.indexOf("myLibraryInit") === -1 ? EXPORTED_RUNTIME_METHODS.push("myLibraryInit") : undefined), "") }}}

addToLibrary({
  $myLibraryInitOptions: {},
  $myLibraryInit (options) {
    Object.assign(myLibraryInitOptions, options || {})
    __my_library_init()
  },
  $myLibraryInit__deps: ['_my_library_init', '$myLibraryInitOptions'],
})
