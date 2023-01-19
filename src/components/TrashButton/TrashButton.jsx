import { StyledTrashButton } from "./StyledTrashButton";

export const TrashButton = ({notes, handleRemoveTask})=>{

    return(
        <>
            <StyledTrashButton 
                id={notes.id}
                onClick={()=>handleRemoveTask(notes.id)}
            >
                <p>X</p>
            </StyledTrashButton>
        </>
    )
}