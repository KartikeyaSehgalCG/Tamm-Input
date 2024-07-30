import React, { useState } from 'react';
import axios from 'axios';

const NoteInput = ({ onAddNote }) => {
  const [heading, setHeading] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');

  const validateInput = () => {
    if (heading.length > 100) {
      setError('Heading should not exceed 100 characters.');
      return false;
    }
    if (body.length > 500) {
      setError('Body should not exceed 500 characters.');
      return false;
    }
    if (!heading || !body) {
      setError('Both fields are required.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInput()) return;

    try {
      const response = await axios.post('http://localhost:5000/save-note', { heading, body });
      onAddNote(response.data);
      setHeading('');
      setBody('');
    } catch (error) {
      console.error('There was an error saving the note!', error);
    }
  };

  return (
    <div>
      <h2>Add a Note</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>
        <div>
          <textarea
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default NoteInput;
