import { useState } from 'react';

interface NoteFormProps {
  onAdd: (text: string) => void;
}

function NoteForm({ onAdd }: NoteFormProps) {
  const [text, setText] = useState('');

  // 👇 1. แยกฟังก์ชันออกมา เพื่อระบุ Type ให้ชัดเจนตามโจทย์ (Strict Event Typing)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 👇 2. เช็คว่ามีข้อความจริงไหม (ห้ามส่งค่าว่าง)
    if (text.trim().length === 0) {
      return; 
    }
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter note..."
        value={text}
        onChange={handleChange} // 👈 เรียกใช้ฟังก์ชันที่ประกาศไว้
        style={{ marginRight: '10px', padding: '5px' }}
      />
      <button type="submit" style={{ padding: '5px 10px' }}>Add Note</button>
    </form>
  );
}

export default NoteForm;