import propTypes from "prop-types"
import { StyledLabelButton } from "./StyledLabelButton"

export const LabelButton = ({size}) => {
    return(
        <>
            <StyledLabelButton
                type="select"
                className={[`-${size}`]}
            >
                {/* todo: */}
                <option >To Do</option>
            </StyledLabelButton>
        </>
    )
}

LabelButton.propTypes = {
    size: propTypes.oneOf(["small", "medium", "large"]),
    onClick: propTypes.func
}

LabelButton.defaultProps = {
    size: "small",
    // todo
    // onClick: undefined
}