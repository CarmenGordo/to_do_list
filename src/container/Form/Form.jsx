import propTypes from "prop-types"
import { StyledForm } from "./StyledForm"

// Component
import { Task } from "../../components/Task/Task"
import {LabelButton} from "../../components/LabelButton/LabelButton"
import { DescriptionTask } from "../../components/DescriptionTask/DescriptionTask"
import { EmotionLabel } from "../../components/EmotionLabel/EmotionLabel"


export const Form = ({handleWriteNewNote,handleAddNewNote, handleWriteDescription, optionsLabel, labelNote, emotionalLabelNote, handleChooseLabel, emotionalOptions, handleChooseEmotionalLabel, size}) =>{

    return(
        <>           
            <StyledForm className={`-${size}`} onSubmit={handleAddNewNote}>
                
                <h3>Add a task</h3>
                <Task required handleWriteNewNote={handleWriteNewNote}/>
                <LabelButton required optionsLabel={optionsLabel} labelNote={labelNote} handleChooseLabel={handleChooseLabel} />
                <button>Add</button>
                <EmotionLabel emotionalOptions={emotionalOptions} emotionalLabelNote={emotionalLabelNote} handleChooseEmotionalLabel={handleChooseEmotionalLabel} />
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