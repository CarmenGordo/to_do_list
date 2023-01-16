import propTypes from "prop-types"
import { StyledTask } from "./StyledTask"

export const Task = ({size, title, handleWriteNewNote}) => {

    return(
        <>
            <StyledTask
                type="text"
                className={[`-${size}`]}
                onChange={handleWriteNewNote}
                placeholder="Título tarea"
            >
                {title}
            </StyledTask>
        </>
    )
}

Task.propTypes = {
    size: propTypes.oneOf(["small", "medium", "large"]),
    title: propTypes.string,
    onChange: propTypes.func
}

Task.defaultProps = {
    size: "small",
}