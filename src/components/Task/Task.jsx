import propTypes from "prop-types"
import { StyledTask } from "./StyledTask"
// todo: 
// import './Task.css'


export const Task = ({size, title}) => {
    return(
        <>
        <StyledTask
            type="text"
            className={[`-${size}`]}
        >
            {title}
        </StyledTask>
        </>
    )
}

Task.propTypes = {
    size: propTypes.oneOf(["small", "medium", "large"]),
    title: propTypes.string,
    onClick: propTypes.func
}

Task.defaultProps = {
    size: "small",
    // todo:
    // onClick: undefined
}