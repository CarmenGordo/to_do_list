import propTypes from "prop-types"
import { StyledForm } from "./StyledForm"

// Component
import { Task } from "../../components/Task/Task"
import {LabelButton} from "../../components/LabelButton/LabelButton"
import {AddButton} from "../../components/AddButton/AddButton"
import { DescriptionTask } from "../../components/DescriptionTask/DescriptionTask"
import { EmotionLabel } from "../../components/EmotionLabel/EmotionLabel"


export const Form = ({handleWriteNewNote,handleAddNewNote, handleWriteDescription,emotionalOptions,handleChooseEmotionalLabel, size}) =>{

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
                <Task required handleWriteNewNote={handleWriteNewNote}/>
                <LabelButton/>
                <AddButton />
                <EmotionLabel emotionalOptions={emotionalOptions} handleChooseEmotionalLabel={handleChooseEmotionalLabel} />
                <DescriptionTask handleWriteDescription={handleWriteDescription} />

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