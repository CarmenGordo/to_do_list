import propTypes from "prop-types"
import { StyledAddButton } from "./StyledAddButton";
import { Modal } from "../../container/Modal/Modal";

export const AddButton = ({ openModal, handleOpenModal, size}) =>{
    return(
        <>
            <StyledAddButton 
                className={`-${size}`}
                onClick={handleOpenModal} 
            >Add</StyledAddButton>

            <Modal primary openModal={openModal}/>
        </>
    )
}

AddButton.propTypes = {
    size: propTypes.oneOf(["small", "medium"]),
    onClick: propTypes.func
}

AddButton.defaultProps = {
    size: "small",
    // todo
    // onClick: undefined
}