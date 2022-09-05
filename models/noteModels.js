const mongoose = require("mongoose")

const Schema = mongoose.Schema; 

const notesSchema = new Schema({
    name : String,
    desc : String
})

const Note  = mongoose.model("Note", notesSchema)

module.exports = Note;