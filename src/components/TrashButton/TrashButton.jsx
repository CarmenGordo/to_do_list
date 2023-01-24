import { StyledTrashButton } from "./StyledTrashButton";

export const TrashButton = ({id, handleRemoveTask, size})=>{

    return(
        <>
            <StyledTrashButton 
                id={id}
                onClick={()=>handleRemoveTask(id)}
            >
                <p>X</p>
            </StyledTrashButton>
        </>
    )
}