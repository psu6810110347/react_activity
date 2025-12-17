import type { Note } from './types'; // อย่าลืม import type Note

// 👇 1. สร้าง Interface สำหรับ Props (ตามโจทย์)
interface NoteListProps {
  notes: Note[];
}

// 👇 2. รับ Props เข้ามาและระบุ Type เป็น NoteListProps
function NoteList({ notes }: NoteListProps) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id} style={{ margin: '5px 0' }}>
          {note.text}
        </li>
      ))}
    </ul>
  );
}

export default NoteList;