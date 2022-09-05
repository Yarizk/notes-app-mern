import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate()
  const [input, setInput] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    console.log(input);
    const newNote = {
      name: input.name.toUpperCase() ,
      desc: input.desc,
    };
  if(newNote.name === undefined || newNote.desc === undefined){
    alert("Message cannot be empty")
  } else{
    axios.post("/create", newNote);
    navigate("/notes")

  }

  }

  //JSX

  return (
    <div className="container">
      <h1>Create note</h1>

      <form>
        <div className="form-group">
          <label htmlFor="Title">Title</label>
          <input
          autoComplete="off"
            onChange={handleChange}
            value={input.title}
            name="name"
            type="text"
            className="form-control"
            id="Title"
            placeholder="Enter Title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <textarea
          autoComplete="off"
            name="desc"
            cols="10"
              rows="10"
            value={input.body}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your description"
          />
        </div>
        <button onClick={handleClick} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default App;
