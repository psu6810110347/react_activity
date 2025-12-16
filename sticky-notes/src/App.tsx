import { useState } from 'react';
import type { Note } from './types';
import NoteList from './NoteList';
import NoteForm from './NoteForm';


function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now().toString(),
      text: text,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Sticky Notes App</h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;