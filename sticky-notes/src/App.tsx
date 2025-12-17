import { useState, useEffect } from 'react';
import type { Note } from './types';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

function App() {
  // 👇 1. Lazy Initialization: อ่านจากเครื่องทันที! (ไม่ต้องใช้ useEffect โหลดแล้ว)
  const [notes, setNotes] = useState<Note[]>(() => {
    const saved = localStorage.getItem('notes');
    if (saved) {
      return JSON.parse(saved) as Note[];
    }
    return []; // ถ้าไม่มีให้เริ่มเป็นอาเรย์ว่าง
  });

  // 👇 2. Save: ยังคงเซฟทุกครั้งที่ notes เปลี่ยนเหมือนเดิม
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now().toString(),
      text: text,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Sticky Notes (Challenge)</h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}

export default App;