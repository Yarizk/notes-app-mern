import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

function Notes() {
  const [notes, setNotes] = useState([{}]);

  const updateTitle = (id) => {
    const newTitle = prompt("Ubah Judul");
    axios.put("/notes/edit", {
      name: newTitle.toUpperCase() ,
      desc: notes.desc,
      id: id,
    });
  };

  const updateDesc = (id) => {
    const newDesc = prompt("Ubah Deskripsi");
    axios.put("/notes/edit", { desc: newDesc, id: id });
  };

  const deleteNote = (id) => {
    axios.delete(`/notes/delete/${id}`).then(() => {
      setNotes(
        notes.filter((value) => {
          return value._id !== id;
        })
      );
    });
    console.log(id);
  };

  useEffect(() => {
    fetch("/notes")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setNotes(jsonRes))
      .catch((err) => console.log(err));
  });

  return (
    <div className="container">
      <h1>Notes page</h1>
      {Array.isArray(notes)
        ? notes.map((note) => (
            <div
              key={note._id}
              className={`blog-post__display ${note._id} p-3`}
            >
              <h3 className="d-flex justify-content-between pe-3 mb-3">
                <div className="d-flex mt-1">
                  {note.name}
                  <span className="ms-2" onClick={() => updateTitle(note._id)}>
                    <i className="fa-solid fa-pencil" edit/>
                  </span>
                </div>
                <span className="text" onClick={() => deleteNote(note._id)} >
                  <i className="fa-solid fa-trash-can"></i>
                </span>
              </h3>

              <p className="d-flex  mt-1">
                {note.desc}
                <span className="ms-2" onClick={() => updateDesc(note._id)}>
                  <i className="fa-solid fa-pencil" />
                </span>
              </p>
            </div>
          ))
        : null}
    </div>
  );
}
export default Notes;
