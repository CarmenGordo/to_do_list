import propTypes from "prop-types"
import { useState } from "react"
import { StyledEmotionalContainer,StyledEmotionalInput, StyledEmotionalLabel, StyledEmotionalLabelText} from "./StyledEmotionLabel"

export const EmotionLabel = ({size}) => {

    // todo: the emotional options
    // enfocado, feliz/contento, triste, confundido, agobiado/anxioso, confiado, 
    // focus, happy, afraid, confident, confused, 
    const emotionalOptions =[
        {
            label: "Focus",
            value: "focus",
            id: 1
        }, {
            label: "In Progress",
            value: "inProgress",
            id: 2
        }, {
            label: "Done",
            value: "done",
            id: 3
        }, {
            label: "Hold",
            value: "hold",
            id: 4
        }, {
            label: "Dropped",
            value: "dropped",
            id: 5
        }
    ]
    const [isChecked, setIsChecked] = useState(false)

    return(
        <>
            <StyledEmotionalContainer
                className={`-${size}`}
            > 
                <p>How do I feel about this task?</p>

                {emotionalOptions.map((option)=> (    
                    
                    <StyledEmotionalLabel>
                        {/* todo: poner img y/o cambiar el color de la bola para cada una de las emociones */}
                        <StyledEmotionalInput 
                            type='checkbox'
                            value={option.value}
                            id={option.id}
                            className={`-${option.value}`}
                            checked={isChecked === option.value}
                            onChange={()=> setIsChecked(option.value)}
                        />

                        <StyledEmotionalLabelText>{option.label}</StyledEmotionalLabelText>

                    </StyledEmotionalLabel>
                    
                ))}
            
            </StyledEmotionalContainer>
            
        </>
    )
}

EmotionLabel.propTypes = {
    size: propTypes.oneOf(["small", "medium", "large"]),
    value: propTypes.oneOf(["toDo", "inProgress", "done", "hold", "dropped"]),
    onClick: propTypes.func
}

EmotionLabel.defaultProps = {
    size: "small",
    value: "toDo"
    // todo:
    // onClick: undefined
}