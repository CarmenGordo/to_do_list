import propTypes from "prop-types"
import { StyledTask } from "./StyledTask"

export const Task = ({size, title, handleWriteNewNote}) => {

    return(
        <>
            <StyledTask
                required
                type="text"
                className={[`-${size}`]}
                onChange={handleWriteNewNote}
                placeholder="Name of the task"
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
    // size: "small",
    // todo: tl Title is Required
}