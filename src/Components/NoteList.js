import React from 'react';

const NoteList = ({ notes }) => {
  return (
    <div>
      <h2>My Notes</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <h3>{note.heading}</h3>
            <p>{note.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
