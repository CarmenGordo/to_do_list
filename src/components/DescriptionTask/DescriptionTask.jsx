import propTypes from "prop-types"
import { StyledDescriptionTask } from "./StyledDescriptionTask"

export const DescriptionTask = ({size, title, handleWriteNewNote}) => {

    return(
        <>
            <StyledDescriptionTask
                type="text"
                className={[`-${size}`]}
                onChange={handleWriteNewNote}
                placeholder="Descripcion tarea"
            >
                {title}
            </StyledDescriptionTask>
        </>
    )
}

DescriptionTask.propTypes = {
    size: propTypes.oneOf(["small", "medium", "large"]),
    title: propTypes.string,
    onChange: propTypes.func
}

DescriptionTask.defaultProps = {
    size: "small",
}