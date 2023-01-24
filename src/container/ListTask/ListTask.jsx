import { StyledListNotes } from "./StyledListTask"
import { Checkbox } from "../../components/Checkbox/Checkbox"
import { StyledLabelButton, StyledOptionsSelect } from "../../components/LabelButton/StyledLabelButton"
import { EmotionCircle } from "../../components/EmotionLabel/EmotionCircle"
import { TrashButton } from "../../components/TrashButton/TrashButton"

export const ListTask = ({notes, checked, checkedTask, optionsLabel, handleChangeLabel, handleRemoveTask, size}) =>{
    
    return(
        <>
            {notes.length > 0 ?
            notes.map((note) =>(

                <StyledListNotes id={note.id}>
                    <Checkbox 
                        labelNote={note.label}
                        checkedTask={checkedTask} 
                        id={note.id} />
                    <p className="" id={note.id}>{note.title}</p>                    

                    <StyledLabelButton id={note.id} onChange={(event)=>handleChangeLabel(event,note.id)}  >
                        {optionsLabel?.map((option) => (                   
                            <StyledOptionsSelect 
                                key={option.id}
                                value={option.value}
                                className={`-${option.value}`}
                                selected={note.label === option.value}
                            >{option.label}</StyledOptionsSelect>
                        ))}    
                    </StyledLabelButton>

                    <EmotionCircle emotion={note.emotionalLabel} />

                    <TrashButton 
                        id={note.id}
                        handleRemoveTask={handleRemoveTask}
                    />
              
                </StyledListNotes>
                
            )) : <p>Don´t have any task</p>

            }
        </>
    )
}