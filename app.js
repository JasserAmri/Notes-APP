const yargs = require ('yargs');
const notes = require("./notes");


var title= yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];




if (command === 'add') {
    console.log('I am adding a note')
   notes.add(title,body)
}
else if (command === 'remove'){
    console.log('I am removing a Note');
    notes.remove(title);
}
else if (command ==='list'){
    console.log('Here is the Notes List');
    notes.list();
}
else if (command === 'read'){
    console.log('I am reading a note ');
    notes.read(title);
}
else {
    console.log('Unkown command typed, try again!');
    console.log('node main.js list \t\t\t\t\t to show the list of notes');
    console.log('node main.js add --title your_title --body todo_body \t to add a note');
    console.log('node main.js read --title your_title \t\t\t to read a note ');
    console.log('node main.js remove --title your_title \t\t\t to remove a note');
}


