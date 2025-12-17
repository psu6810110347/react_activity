import type { Note } from './types';

// 👇 ประกาศ Interface แค่รอบเดียวพอครับ (และต้องมี onDelete)
interface NoteListProps {
  notes: Note[];
  onDelete: (id: string) => void;
}

function NoteList({ notes, onDelete }: NoteListProps) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id} style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '10px' }}>{note.text}</span>
          
          {/* 👇 ปุ่มลบ */}
          <button 
            onClick={() => onDelete(note.id)}
            style={{ 
              backgroundColor: '#ff4444', 
              color: 'white', 
              border: 'none', 
              padding: '5px 10px', 
              cursor: 'pointer',
              borderRadius: '4px'
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;