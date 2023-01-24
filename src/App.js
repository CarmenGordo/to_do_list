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
  const [emotionalLabelNote, setEmotionalLabelNote] = useState(emotionalOptions)
  // To reset the task or change somethimg
  // const [resetLabel, setResetLabel] = useState(optionsLabel)




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

  // todo: To change the value when the LabelButton've changed
  const handleChangeLabel = (event)=>{

  //   const changesTask = event.target.value
  //   const selection = ""
  //   console.log("changesTask---", changesTask)

  //   const resetTask = {
  //     // title: newNote,
  //     // description: descriptionNote,
  //     label: labelNote,
  //     // emotionalLabel: emotionalLabelNote
  // }
  //   console.log("resetTask--", resetTask)
  //   for (let i = 0; i < resetLabel.length; i++) {
  //     if (changesTask[i].selected) {
  //       selection.push(changesTask[i].value)
  //       console.log("if--", selection)
  //     }      
  //   }    
  
  //   setResetLabel(selection)
  //   setNotes([...notes, resetTask])
  //   console.log("notes---", notes)
  }

  // To remove a Task
  const handleRemoveTask =(id)=>{
    const remove = [...notes]
    const newList = remove.filter((note) => note.id !== id);
    setNotes(newList);
  }

  // To change the labelButton to done if the checkbox is checked
  const checkedTask = (id)=>{
    console.log("checkedTask---",id)
    for(let i = 0; i < notes.length; i++){
      if(id === notes[i].id){
        console.log("aaa----", id, notes[i])
        const change = notes[i].label 
        const change2 = optionsLabel[2].value
        // const sum = change = change2
        console.log("bbb----", change)
        console.log("ccc----", change2)
        console.log("ddd----", notes[i].label = "done")
        // console.log("ddd----", sum)
        
        setNotes([...notes, notes[i].label = optionsLabel[2].value])
        console.log("notas---", ...notes)
      }
    }
  }

  return (
    <>
    
      <Form 
        handleWriteNewNote={handleWriteNewNote}
        handleAddNewNote={handleAddNewNote}
        handleWriteDescription={handleWriteDescription}
        principal optionsLabel={optionsLabel} labelNote={labelNote} handleChooseLabel={handleChooseLabel} handleChangeLabel={handleChangeLabel}
        emotionalOptions={emotionalOptions} handleChooseEmotionalLabel={handleChooseEmotionalLabel} 
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
