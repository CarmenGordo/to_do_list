import propTypes from "prop-types"
import { StyledDescriptionTask } from "./StyledDescriptionTask"

export const DescriptionTask = ({size, description, handleWriteDescription}) => {
    return(
        <>
            <StyledDescriptionTask
                // rows="1" cols="20"
                className={`-${size}`}
                onChange={handleWriteDescription}
                placeholder="Write the task description"
            >
                {description}
            </StyledDescriptionTask>
        </>
    )
}

DescriptionTask.propTypes = {
    size: propTypes.oneOf(["small", "medium", "large"]),
    description: propTypes.string,
    onChange: propTypes.func
}

DescriptionTask.defaultProps = {
    size: "small",
}