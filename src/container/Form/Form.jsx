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

export const Prueba = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
      <div className="checkbox-wrapper">
        <label>

          <input type="checkbox"checked={isChecked} onChange={() => setIsChecked((prev) => !prev)}/>
          <input type="checkbox"checked={isChecked} onChange={() => setIsChecked((prev) => !prev)}/>
          <input type="checkbox"checked={!isChecked} onChange={() => setIsChecked((prev) => !prev)}/>

          <span>aaaaaa----</span>

        </label>

        <p>{isChecked ? "Selected" : "Unchecked"}</p>
      </div>
    );
  };

export const Form = ({example, size}) =>{

    const notes = [
        {
          id: 1,
          content: "Do the homework",
          value: "inProgress",
          description: "Do the homework for my JavaScript review class."          
        },
        {
          id: 2,
          content: "Clean the room",
          value: "",
          description: "Clean up the room and put all the notes in order."
        }
    ]

    const [note, setNote] = useState(notes)
    const [newNote, setNewNote] = useState()

    const handleWriteNewNote= (event)=>{
        const writeNote = event.target.value
        console.log("writeNote", writeNote)
        setNewNote(writeNote)
    }

    const handleAddNewNote = (event) =>{
        event.preventDefault()

        const addNote = {
            id: note.length + 1,
            content: newNote
        }
        console.log("bbb", addNote)

        // setNote([...note, addNote])
        setNote(note.concat(addNote))
        console.log("ccc", note)
    }

    return(
        <>
            {example ? 
                notes.map(note =>(
                     <StyledForm key={note.id} className={["-example", `-${size}`].join(" ")}>
                        <Checkbox />
                        <p>{note.content}</p>
                        <LabelButton value={note.value}/>
                    </StyledForm>
                ))
            : 
            <StyledForm className={[`-${size}`]} onSubmit={handleAddNewNote}>
                <h2>Añadir tarea</h2>
                <Task handleWriteNewNote={handleWriteNewNote}/>
                <LabelButton/>
                <AddButton />
                <EmotionLabel />
                <DescriptionTask />

                <br/><br/><br/>
                <Prueba></Prueba>
            </StyledForm>}
        </>
    )
}

// Form.propTypes = {
//     size: propTypes.oneOf(["small", "medium", "large"]),
//     onClick: propTypes.func
// }

// Form.defaultProps = {
//     size: "small",
//     // todo
//     // onClick: undefined
// }