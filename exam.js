const add = require('./add')
const read = require('./read')
const write = require ('./write')



const cmd = process.argv

if (cmd[2]=="add") {
   const note = {
        "Employee":cmd[3],
        "Role":cmd[4],
        "Department":cmd[5]
    }
   const oldNote = read()
    add(note,oldNote)
}
if (cmd[2] == 'read'){
    console.log(read())
}
    if (cmd[2]==="delete"){
        const id = cmd [3]
        const oldNote = read()
        const del = require ('./del')
        del(id,oldNote)
        console.log(read())
    }

