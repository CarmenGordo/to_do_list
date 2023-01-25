import propTypes from "prop-types"
import { StyledEmotionalLabel, StyledEmotionalLabelText } from "./StyledEmotionLabel"
import { Modal } from "../../container/Modal/Modal"

export const EmotionCircle = ({emotion, id, notes, title, label, description,  openModal, handleOpenModal, size}) => {
    return(
        <> 
            <StyledEmotionalLabel key={id}
                className={`-${emotion}`}
                onClick={()=>handleOpenModal(id)}
            >
                {
                console.log("emotion---id----",id)

                }
                <StyledEmotionalLabelText>{emotion}</StyledEmotionalLabelText>

            </StyledEmotionalLabel>

            <Modal id={id} 
                notes={notes}
                // title={title} label={label} description={description} emotion={emotion} 
                openModal={openModal}/>
        </>
    )
}

EmotionCircle.propTypes = {
    size: propTypes.oneOf(["small", "medium", "large"]),
    // value: propTypes.oneOf(["toDo", "inProgress", "done", "hold", "dropped"]),
    onClick: propTypes.func
}

EmotionCircle.defaultProps = {
    size: "small",
    // value: "toDo"
    // todo:
    // onChange: undefined
}