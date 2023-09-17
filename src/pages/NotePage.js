import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  let [note, setNote] = useState(null);

  let getNote = async () => {
    if (id === "new") {
      return;
    }
    let response = await fetch(`http://localhost:8000/notes/${id}`);
    const data = await response.json();
    setNote(data);
  };

  let createNote = async () => {
    await fetch(`http://localhost:8000/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
  };

  let updateNote = async () => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
  };

  let deleteNote = async () => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });

    navigate("/");
  };

  let handleSubmit = () => {
    console.log("id", id);
    if (id !== "new" && !note.body) {
      deleteNote();
    } else if (id !== "new") {
      updateNote();
    } else if (id === "new" && note.body !== null) {
      createNote();
    }
    navigate("/");
  };

  useEffect(() => {
    getNote();
  }, [id]);

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to={"/"}>
            <ArrowLeft onClick={handleSubmit} />
          </Link>
        </h3>
        {id != "new" ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        value={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
