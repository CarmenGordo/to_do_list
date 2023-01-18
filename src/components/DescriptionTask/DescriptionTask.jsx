import propTypes from "prop-types"
import { StyledDescriptionTask } from "./StyledDescriptionTask"

export const DescriptionTask = ({size, title, handleDescriptionNote}) => {
    // todo: cambiar para escribir la descripcion de la nota
    return(
        <>
            <StyledDescriptionTask
                type="text"
                className={`-${size}`}
                onChange={handleDescriptionNote}
                placeholder="Write the task description"
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