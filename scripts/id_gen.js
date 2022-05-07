function generateID(dbNotes) {
    for (let i = 0; i < dbNotes.length; i++) {
        dbNotes[i].id = i + 1;
    }
}
module.exports = generateID;