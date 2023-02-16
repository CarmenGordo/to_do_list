import propTypes from "prop-types"
import { StyledEmotionalContainer,StyledEmotionalInput, StyledEmotionalLabel, StyledEmotionalLabelText} from "./StyledEmotionLabel"

export const EmotionLabel = ({emotionalOptions, emotionalLabelNote,handleChooseEmotionalLabel, size}) => {   
    return(
        <>
            <StyledEmotionalContainer
                className={`-${size}`}
            > 
                <h5>How do I feel about this task?</h5>

                {emotionalOptions?.map((option, index)=> (    
                    
                    <StyledEmotionalLabel key={index} className={`-${option.value}`}>
                        {/* todo: poner img y/o cambiar el color de la bola para cada una de las emociones */}
                        <StyledEmotionalInput 
                            type='checkbox'
                            value={option.value}
                            id={option.id}
                            key={option.id}
                            checked={emotionalLabelNote === option.value}
                            onClick={handleChooseEmotionalLabel}

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