const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NotesSchema = new Schema({
    body: {
        type: String,
        required: true
    }
});

const Notes = mongoose.model("notes", NotesSchema);

module.exports = Notes