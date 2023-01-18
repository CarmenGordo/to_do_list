import { useState } from 'react';
import { Form } from './container/Form/Form';
import { Checkbox } from './components/Checkbox/Checkbox';
import { LabelButton } from './components/LabelButton/LabelButton';
import Prueba from './container/Form/Prueba';

const exampleNotes = [
  {
    id: 1,
    title: "Do the homework",
    value: "inProgress",
    description: "Do the homework for my JavaScript review class."          
  },
  {
    id: 2,
    title: "Clean the room",
    value: "",
    description: "Clean up the room and put all the notes in order."
  }
]
function App() {


  const [notes, setNotes] = useState(exampleNotes)
  const [newNote, setNewNote] = useState("")

  const handleWriteNewNote= (event)=>{
      const writeNote = event.target.value
      console.log("writeNote", writeNote)
      setNewNote(writeNote)
  }

  const handleAddNewNote = (event) =>{
      event.preventDefault()

      const addNote = {
          id: notes.length + 1,
          title: newNote
      }
      console.log("bbb", addNote)

      setNotes([...notes, addNote])
      // setNote(note.concat(addNote))
      console.log("ccc", notes)
  }

  
  return (
    <>
    
      <Form notes handleWriteNewNote={handleWriteNewNote} handleAddNewNote={handleAddNewNote} />
      {notes.map(note =>(
                <>
                    <Checkbox />
                    <p key={note.id}>{note.title}</p>
                    <LabelButton label={note.value}/>
                </>
            ))}
      {/* <Form example/> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Prueba />
    </>
  );
}

export default App;
