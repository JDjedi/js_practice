
const notes = ['Note1', 'Note2', 'Note3' ]
notes.push('Note4')
notes.unshift('newNote5')
notes.splice(3, 0, 'This is the new item')
notes.pop()
notes.unshift('note6')
console.log(" ")

// call-back function is just a function that gets passed into another function
notes.forEach(function(element, index) {
  //element = 'ID:245: ' + element
  console.log(`Index: ${index}[${element}]`)
})

