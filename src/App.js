import { useState } from 'react';
import { Form } from './container/Form/Form';
import { Checkbox } from './components/Checkbox/Checkbox';
import { LabelButton } from './components/LabelButton/LabelButton';
import { ListTask } from './container/ListTask/ListTask';

// todo: trasladar las exampleNotes

const exampleNotes = [
  {
    id: 1,
    title: "Do the homework",
    label: "inProgress",
    description: "Do the homework for my JavaScript review class.",
    emotionalLabel: "focus1"          
  },
  {
    id: 2,
    title: "Clean the room",
    label: "done",
    description: "Clean up the room and put all the notes in order.",
    emotionalLabel: "focus3"
  }
]

const emotionalOptions =[
  {
      label: "focus1",
      value: "focus1",
      id: 1
  }, {
      label: "focus2",
      value: "focus2",
      id: 2
  }, {
      label: "focus3",
      value: "focus3",
      id: 3
  }, {
      label: "focus4",
      value: "focus4",
      id: 4
  }, {
      label: "focus5",
      value: "focus5",
      id: 5
  }
]


function App() {
  // All the notes and the example notes 
  const [notes, setNotes] = useState(exampleNotes)
  // To write the title of the Task (Task Component)
  const [newNote, setNewNote] = useState()
  // To write the description of the Task (DescriptionTask Component)
  const [descriptionNote, setDescriptionNote] = useState()
  // To the label ot the Task (LabelButton Component)
  const [labelNote, setLabelNote] = useState(emotionalOptions)
  // To the emotional label ot the Task (EmotionalLabel Component)
  const [emotionalLabelNote, setEmotionalLabelNote] = useState(emotionalOptions)

  // To write the New Note
  const handleWriteNewNote= (event)=>{
      const writeNote = event.target.value
      console.log("writeNote---", writeNote)
      setNewNote(writeNote)
  }

  // To write the Description of the Task
  const handleWriteDescription= (event)=>{
    const writeDescription = event.target.value
    console.log("writeDescription---", writeDescription)
    setDescriptionNote(writeDescription)
  }

  // To the label notes (LabelButton) of the Task
  const handleChooseLabel = (event)=>{
    const chooseLabel = event.target.value
    console.log("chooseLabel---", chooseLabel)
    setLabelNote(chooseLabel)
  }

  // To the emocional notes of the Task
  const handleChooseEmotionalLabel = (event)=>{
    const chooseEmotion = event.target.value
    console.log("chooseEmotion---", chooseEmotion)
    setEmotionalLabelNote(chooseEmotion)
  }

  // To write to the new note: title, description, label as label button, emotional label
  const handleAddNewNote = (event) =>{
      event.preventDefault()

      const addNote = {
          id: notes.length + 1,
          title: newNote,
          description: descriptionNote,
          label: labelNote,
          emotionalLabel: emotionalLabelNote
      }
      console.log("bbb", addNote)

      setNotes([...notes, addNote])
      // setNote(note.concat(addNote))
      // todo: reset the input
      setNewNote("")
  }


  return (
    <>
    
      <Form handleWriteNewNote={handleWriteNewNote} handleAddNewNote={handleAddNewNote} handleWriteDescription={handleWriteDescription} handleChooseLabel={handleChooseLabel} emotionalOptions={emotionalOptions} handleChooseEmotionalLabel={handleChooseEmotionalLabel} />

      <ListTask notes={notes} emotionalOptions={emotionalOptions} />
      
    </>
  );
}

export default App;
