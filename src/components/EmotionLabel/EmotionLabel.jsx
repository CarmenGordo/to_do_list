import propTypes from "prop-types"
import { useState } from "react"
import { StyledEmotionalContainer,StyledEmotionalInput, StyledEmotionalLabel, StyledEmotionalLabelText} from "./StyledEmotionLabel"

export const EmotionLabel = ({emotionalOptions,handleChooseEmotionalLabel, size}) => {

    // todo: the emotional options
    // enfocado, feliz/contento, triste, confundido, agobiado/anxioso, confiado, 
    // focus, happy, afraid, confident, confused, 
    const [isChecked, setIsChecked] = useState()

    
   
    return(
        <>
            <StyledEmotionalContainer
                className={`-${size}`}
            > 
                <p>How do I feel about this task?</p>

                {emotionalOptions.map((option)=> (    
                    
                    <StyledEmotionalLabel className={`-${option.value}`}>
                        {/* todo: poner img y/o cambiar el color de la bola para cada una de las emociones */}
                        <StyledEmotionalInput 
                            type='checkbox'
                            value={option.value}
                            id={option.id}
                            key={option.id}         
                            checked={isChecked === option.value}
                            onChange={()=> [setIsChecked(option.value), console.log("checked---",option.value)]}
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
    // value: propTypes.oneOf(["toDo", "inProgress", "done", "hold", "dropped"]),
    onChange: propTypes.func
}

EmotionLabel.defaultProps = {
    size: "small",
    // value: "toDo"
    // todo:
    // onChange: undefined
}