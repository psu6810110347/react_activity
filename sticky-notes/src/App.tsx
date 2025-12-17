import { useState, useEffect } from 'react';
import type { Note } from './types';
import NoteList from './NoteList';
import NoteForm from './NoteForm';


function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('notes');
    if (saved) {
      setNotes(JSON.parse(saved) as Note[]);
    }
  }, []);

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }, [notes]);

  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now().toString(),
      text: text,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id: string) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes)); // อัปเดต Save ทันที
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Sticky Notes App</h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}

export default App;