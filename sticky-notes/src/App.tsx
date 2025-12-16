import NoteForm from './NoteForm';
import NoteList from './NoteList'; 

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>My Notes App</h1>
      <NoteForm /> 
      <NoteList />
    </div>
  );
};

export default App;