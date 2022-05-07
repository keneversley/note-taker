const generateID = require("../scripts/id_gen");
const writeMyFile = require("../scripts/file_write");
var dbNotes = require("../db/db.json");
module.exports = function(app) {
app.get("/api/notes", function(req, res) {
    res.json(dbNotes);
});

app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    dbNotes.push(newNote);
    generateID(dbNotes);
    writeMyFile('./db/db.json', dbNotes);
    res.json(true);
  });

app.delete("/api/notes/:id", function(req, res) {
      var note = parseInt(req.params.id);
      dbNotes.splice((note - 1), 1);
      generateID(dbNotes);
      writeMyFile('./db/db.json', dbNotes);
      res.json(true);
  });
};
