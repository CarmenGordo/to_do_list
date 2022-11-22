import propTypes from "prop-types"
import { StyledAddButton } from "./StyledAddButton";

export const AddButton = ({size}) =>{
    return(
        <>
            <StyledAddButton 
                className={[`-${size}`]}
            >Add</StyledAddButton>
        </>
    )
}

AddButton.propTypes = {
    size: propTypes.oneOf(["small", "medium", "large"]),
    onClick: propTypes.func
}

AddButton.defaultProps = {
    size: "small",
    // todo
    // onClick: undefined
}