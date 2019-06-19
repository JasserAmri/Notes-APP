const fs = require('fs');


// var help = () => {

//     console.log('node main.js --help \t\t\t\t\t for help')
//     console.log('node main.js list \t\t\t\t\t to show the list of todos')
//     console.log('node main.js add --title your_title --body todo_body \t to add a todo note')
//     console.log('node main.js read --title your_title \t\t\t to read a todo note ')
//     console.log('node main.js remove --title your_title \t\t\t to remove a todo note')
// }

var fetch = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.txt'))
    }
    catch (error) {
        return []
    }
}

var add = (title, body) => {
    var notes = fetch();
    var note = {
        title,
        body,
    };

    notes.push(note);
    fs.writeFileSync("notes.txt", JSON.stringify(notes));
}

var remove = (title) => {
    var notes = fetch();
    var filteredNotes = notes.filter((note) => note.title !== title);
    fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
}

var read = (title) => {
    var notes = fetch();
    var filteredNotes = notes.filter((note) => note.title === title);
    console.log(`Title:\n  ${filteredNotes[0].title}\nBody:\n  ${filteredNotes[0].body}`);
}
var list = () => {
    var notes = fetch();
    console.log(notes);

}

module.exports = {
    add,
    remove,
    list,
    read,
    // help,

}


