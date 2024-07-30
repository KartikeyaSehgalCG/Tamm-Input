import React, { useState, useEffect } from 'react';
import NoteInput from './Components/NoteInput';
import NoteList from './Components/NoteList';
import Header from './Components/Header';
import axios from 'axios';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/get-note');
        setNotes(response.data);
      } catch (error) {
        console.error('There was an error fetching the notes!', error);
      }
    };

    fetchNotes();
  }, []);

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div>
      <Header/>
    <div className="App">
      <NoteInput onAddNote={handleAddNote} />
      <NoteList notes={notes} />
    </div>
    </div>
    
  );
};

export default App;
