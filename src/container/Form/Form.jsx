import { useState } from "react"
import propTypes from "prop-types"
import { StyledForm } from "./StyledForm"

// Component
import { Checkbox } from "../../components/Checkbox/Checkbox"
import { Task } from "../../components/Task/Task"
import {LabelButton} from "../../components/LabelButton/LabelButton"
import {AddButton} from "../../components/AddButton/AddButton"
import { DescriptionTask } from "../../components/DescriptionTask/DescriptionTask"
import { EmotionLabel } from "../../components/EmotionLabel/EmotionLabel"

// todo: trasladar las exampleNotes
// const exampleNotes = [
//     {
//       id: 1,
//       title: "Do the homework",
//       value: "inProgress",
//       description: "Do the homework for my JavaScript review class."          
//     },
//     {
//       id: 2,
//       title: "Clean the room",
//       value: "",
//       description: "Clean up the room and put all the notes in order."
//     }
// ]

export const Form = ({handleWriteNewNote,handleAddNewNote, size}) =>{

    // const [notes, setNotes] = useState(exampleNotes)
    // const [newNote, setNewNote] = useState("")

    // const handleWriteNewNote= (event)=>{
    //     const writeNote = event.target.value
    //     console.log("writeNote", writeNote)
    //     setNewNote(writeNote)
    // }

    // const handleAddNewNote = (event) =>{
    //     event.preventDefault()

    //     const addNote = {
    //         id: notes.length + 1,
    //         title: newNote
    //     }
    //     console.log("bbb", addNote)

    //     setNotes([...notes, addNote])
    //     // setNote(note.concat(addNote))
    //     console.log("ccc", notes)
    // }

    return(
        <>
            
            {/* {notes.map(note =>(
                <>
                    <Checkbox />
                    <p key={note.id}>{note.title}</p>
                    <LabelButton label={note.value}/>
                </>
            ))} */}
            
            <StyledForm className={[`-${size}`]} onSubmit={handleAddNewNote}>
         
                <h2>Añadir tarea</h2>
                <Task handleWriteNewNote={handleWriteNewNote}/>
                <LabelButton/>
                <AddButton />
                <EmotionLabel />
                <DescriptionTask />

            </StyledForm>
        </>
    )
}

Form.propTypes = {
    size: propTypes.oneOf(["small", "medium", "large"]),
    onClick: propTypes.func
}

Form.defaultProps = {
    size: "small",
    // todo
    // onClick: undefined
}