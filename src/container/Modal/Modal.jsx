import propTypes from "prop-types"
import { StyledModalContainer, StyledModal, StyledModalPrimary } from "./StyledModal"
import { Form } from "../Form/Form"

export const Modal = ({primary, emotion, id, title, label, description, openModal, size})=>{

    if(!openModal){
        return false
    }
    // todo: arreglar modal
    return(
        <>  
            {primary ?
                <StyledModalContainer id={id}>
                    <StyledModalPrimary>
                        <p>{id}</p>
                    </StyledModalPrimary>
                </StyledModalContainer>
            :
                <StyledModalContainer>
                    <StyledModal>
                        <Form />
                    </StyledModal>
                </StyledModalContainer>
            }
        </>
    )
}

Modal.propTypes = {
    size: propTypes.oneOf(["small", "medium"]),
    onClick: propTypes.func,
    primary: propTypes.bool,
}

Modal.defaultProps = {
    size: "small",
    // todo
    // onClick: undefined
    primary: false,
}