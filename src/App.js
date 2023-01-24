import { useState } from 'react';
import { Form } from './container/Form/Form';
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

const optionsLabel =[
  {
      label: "To Do",
      value: "toDo",
      id: 1
  }, {
      label: "In Progress",
      value: "inProgress",
      id: 2
  }, {
      label: "Done",
      value: "done",
      id: 3
  }, {
      label: "Hold",
      value: "hold",
      id: 4
  }, {
      label: "Dropped",
      value: "dropped",
      id: 5
  }
]

// todo: the emotional options
    // enfocado, feliz/contento, triste, confundido, agobiado/anxioso, confiado, 
    // focus, happy, afraid, confident, confused, 
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
  const [labelNote, setLabelNote] = useState()
  // To the emotional label ot the Task (EmotionalLabel Component)
  const [emotionalLabelNote, setEmotionalLabelNote] = useState()
  // To change the LabelButton depend on the checkbox
  const [checked, setChecked] = useState(false)



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

  // To the choose the label notes (LabelButton) of the Task
  const handleChooseLabel = (event)=>{
    const chooseLabel = event.target.value
    console.log("chooseLabel---", chooseLabel)
    setLabelNote(chooseLabel)
  }

  // To the emocional notes of the Task
  const handleChooseEmotionalLabel = (event)=>{
    const chooseEmotion = event.target.value
    console.log("chooseEmotion>>---", chooseEmotion)
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
      setEmotionalLabelNote()
  }

  // To change the value when the LabelButton've changed
  const handleChangeLabel = (event, id)=>{

    const label = event.target.value

    for(let i = 0; i < notes.length; i++){

      if(id === notes[i].id){
        const change = notes[i].label = label
        setNotes([...notes])
        
        if(label === "done"){
          setChecked(checked === true)
          setNotes([...notes])
         
        }else{
          setChecked(checked === false)
          setNotes([...notes])
        }

        if(checked === true){
          const change = notes[i].label === "done"
        }
      }
    }
    console.log("notes---", notes)
  }

  // To remove a Task
  const handleRemoveTask =(id)=>{
    const remove = [...notes]
    const newList = remove.filter((note) => note.id !== id);
    setNotes(newList);
  }

  // To change the LabelButton to done if the checkbox is checked
  const checkedTask = (id, labelNote)=>{

    for(let i = 0; i < notes.length; i++){

      if(id === notes[i].id && checked === false){
        notes[i].label = optionsLabel[2].value

        setNotes([...notes])
        setChecked(!checked)
      }

      // if is unchecked the labe is To Do
      if(id === notes[i].id && checked === true){        
        const change = notes[i].label = optionsLabel[0].value

        setNotes([...notes])
        setChecked(!checked)
      }
    }
  }

  return (
    <>
    
      <Form 
        handleWriteNewNote={handleWriteNewNote}
        handleAddNewNote={handleAddNewNote}
        handleWriteDescription={handleWriteDescription}
        // labelButton
        optionsLabel={optionsLabel} labelNote={labelNote} handleChooseLabel={handleChooseLabel} handleChangeLabel={handleChangeLabel}
        // emotionalLabel
        emotionalOptions={emotionalOptions} emotionalLabelNote={emotionalLabelNote} handleChooseEmotionalLabel={handleChooseEmotionalLabel} 
      />

      <ListTask 
        notes={notes} 
        emotionalOptions={emotionalOptions} 
        checkedTask={checkedTask}
        optionsLabel={optionsLabel} labelNote={labelNote} handleChangeLabel={handleChangeLabel}
        handleRemoveTask={handleRemoveTask}
      />
      
    </>
  );
}

export default App;
