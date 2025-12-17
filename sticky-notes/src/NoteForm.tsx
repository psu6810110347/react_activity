import { useState } from 'react';

// 👇 1. สร้าง Interface สำหรับ Props (ตามโจทย์)
interface NoteFormProps {
  onAdd: (text: string) => void;
}

// 👇 2. รับ Props เข้ามาและระบุ Type เป็น NoteFormProps
function NoteForm({ onAdd }: NoteFormProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => { // 👈 ระบุ Type ของ Event
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;