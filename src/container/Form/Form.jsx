import propTypes from "prop-types"
import { StyledForm } from "./StyledForm"

// Component
import { Task } from "../../components/Task/Task"
import {LabelButton} from "../../components/LabelButton/LabelButton"
import {AddButton} from "../../components/AddButton/AddButton"
import { DescriptionTask } from "../../components/DescriptionTask/DescriptionTask"
import { EmotionLabel } from "../../components/EmotionLabel/EmotionLabel"


export const Form = ({handleWriteNewNote,handleAddNewNote, handleWriteDescription, optionsLabel, labelNote, handleChooseLabel,handleResetLabel, emotionalOptions,handleChooseEmotionalLabel, size}) =>{

    return(
        <>           
            <StyledForm className={`-${size}`} onSubmit={handleAddNewNote}>
         
                <h2>Add a task</h2>
                <Task required handleWriteNewNote={handleWriteNewNote}/>
                <LabelButton optionsLabel={optionsLabel} labelNote={labelNote} handleChooseLabel={handleChooseLabel}  />
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