import propTypes from "prop-types"
import { StyledForm } from "./StyledForm"

// Component
import { Checkbox } from "../../components/Checkbox/Checkbox"
import { Task } from "../../components/Task/Task"
import {LabelButton} from "../../components/LabelButton/LabelButton"
import {AddButton} from "../../components/AddButton/AddButton"

export const Form = ({example, size}) =>{

    const notes = [
        {
          id: 1,
          content: "Do the homework",
          value: "inProgress"
        },
        {
          id: 2,
          content: "Clean the room",
          value: ""
        }
    ]

    return(
        <>
            {example ? 
            <StyledForm className={["-exmaple", `-${size}`].join(" ")}>
                {notes.map((note) =>(
                        <>
                        <Checkbox />
                        <p>{note.content}</p>
                        <LabelButton value={note.value}/>
                        </>
                    ))
                }
            </StyledForm>
            : 
            <StyledForm className={[`-${size}`]}>
                <Checkbox />
                <Task />
                <LabelButton />
                <AddButton />
            </StyledForm>}
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