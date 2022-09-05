const express = require("express");
const Note = require("../models/noteModels");
const router = express.Router();

router.route("/create").post((req, res) => {
  const name = req.body.name;
  const desc = req.body.desc;
  const newNote = new Note({
    name,
    desc,
  });
  newNote.save();
});

router.route("/notes").get((req, res) => {
  Note.find()
    .then((foundNotes) => res.json(foundNotes))
    .catch((err) => console.log("error" + err));
});



router.route("/notes/edit").put((req, res) => {
    const newTitle = req.body.name;
    const newDesc = req.body.desc;
    const id = req.body.id;
    try {
        Note.findById(id, (err, titleUpdate) =>{
            if(newTitle != undefined){
                titleUpdate.name = newTitle;
                titleUpdate.save()
            } else {
                titleUpdate.desc = newDesc;
                titleUpdate.save()
            }
             
        })
    } catch (error) {
        console.log(error)
    }
});

router.route("/notes/delete/:id").delete((req,res)=>{
    const id = req.params.id;
    Note.findByIdAndRemove(id).exec();
    res.send("item deleted")
})
module.exports = router;
