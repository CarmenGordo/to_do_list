import propTypes from "prop-types"
import { StyledForm } from "./StyledForm"

// Component
import { Checkbox } from "../../components/Checkbox/Checkbox"
import { Task } from "../../components/Task/Task"
import {LabelButton} from "../../components/LabelButton/LabelButton"

export const Form = () =>{
    return(
        <>
            <StyledForm>
                <Checkbox />
                <Task size="medium" />
                <LabelButton />
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