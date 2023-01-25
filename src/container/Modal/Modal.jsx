import { StyledModalContainer, StyledModal } from "./StyledModal"
import { Form } from "../Form/Form"

export const Modal=({primary, emotion, id, title, label, description, openModal, size})=>{

    if(!openModal){
        return false
    }
    // todo: arreglar modal
    return(
        <>  
            {primary ?
                <StyledModalContainer id={id}>
                    <StyledModal>
                        <p>{id}</p>
                    </StyledModal>
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