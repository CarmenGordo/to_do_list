import { useState } from "react";
import propTypes from "prop-types"
import { StyledBody } from "./StyledBody"

// components
// import { SidebarFilters } from './container/SidebarFilters/SidebarFilters';
import { Form } from "../Form/Form";
import { ListTask } from "../ListTask/ListTask";
import { AddButton } from '../../components/AddButton/AddButton';

export const Body = ({exampleNotes, optionsLabel, emotionalOptions})=>{

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
  // To open and close the Modal
  const [openModal, setOpenModal] = useState(false)
  const [filterNotes, setFilterNotes] = useState([notes])



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
  const checkedTask = (id)=>{

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

  // todo: arreglar modal   To open and close the Modal
  const handleOpenModal =(id)=>{
    console.log("id---",id)

    setOpenModal(!openModal)
  }

  // To show the task depend on the label (LabelButton)
  const handleShowTaskByLabel=(value)=>{
    console.log("eleccion---", value)

    if(value === "all"){
      console.log("notas", notes)
      setFilterNotes(notes)

    }else{
      const filter = notes.filter((note)=> (note.label === value))
      console.log("filtertodo----", filter)
      console.log("notas", notes)

      setFilterNotes({filter})
      // return notes.label === value
    }
    
  }

  return(
    <StyledBody>

      {/* <SidebarFilters 
        // labelButton
        optionsLabel={optionsLabel}
        // handleShowAllTask={handleShowAllTask}
        // emotionalLabel
        emotionalOptions={emotionalOptions}
        handleShowTaskByLabel={handleShowTaskByLabel}
      /> */}

      <Form 
        handleWriteNewNote={handleWriteNewNote}
        handleAddNewNote={handleAddNewNote}
        handleWriteDescription={handleWriteDescription}
        // labelButton
        optionsLabel={optionsLabel} 
        labelNote={labelNote} handleChooseLabel={handleChooseLabel} handleChangeLabel={handleChangeLabel}
        // emotionalLabel
        emotionalOptions={emotionalOptions} emotionalLabelNote={emotionalLabelNote} handleChooseEmotionalLabel={handleChooseEmotionalLabel} 
      />

      <ListTask 
        notes={notes} 
        filterNotes={filterNotes}
        checkedTask={checkedTask}
        // emotionalLabel
        emotionalOptions={emotionalOptions} 
        // modal
        primary={true}
        handleOpenModal={handleOpenModal} 
        openModal={openModal}
        // labelButton
        optionsLabel={optionsLabel} labelNote={labelNote} handleChangeLabel={handleChangeLabel}
        // trashButton
        handleRemoveTask={handleRemoveTask}
      />

      <AddButton handleOpenModal={handleOpenModal} />


    </StyledBody>
  )
}

Body.propTypes = {
    size: propTypes.oneOf(["small", "medium", "large"]),
    onClick: propTypes.func
}

Body.defaultProps = {
    size: "small",
    // todo
    // onClick: undefined
}