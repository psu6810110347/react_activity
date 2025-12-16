import React, { useState } from 'react';

// 1. กำหนด Interface สำหรับ Props
interface NoteFormProps {
  onAdd: (text: string) => void;
}

// 2. รับ Props เข้ามาโดยระบุ Type เป็น NoteFormProps
function NoteForm({ onAdd }: NoteFormProps) {
  const [text, setText] = useState('');

  // 3. จัดการ onSubmit โดยระบุ Event Type คือ React.FormEvent
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // ป้องกันหน้าเว็บรีโหลด
    
    if (text.trim().length === 0) return; // กันไม่ให้ส่งค่าว่าง

    onAdd(text);
    setText(''); // เคลียร์ช่องกรอกหลังจากกดปุ่ม
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="เขียนโน้ตใหม่..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;