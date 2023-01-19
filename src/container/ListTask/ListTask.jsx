import { useState } from "react"
import { StyledListNotes } from "./StyledListTask"
import { Checkbox } from "../../components/Checkbox/Checkbox"
import { LabelButton } from "../../components/LabelButton/LabelButton"
import { StyledLabelButton, StyledOptionsSelect } from "../../components/LabelButton/StyledLabelButton"
import { EmotionCircle } from "../../components/EmotionLabel/EmotionCircle"
import { TrashButton } from "../../components/TrashButton/TrashButton"

export const ListTask = ({notes, optionsLabel, handleChangeLabel, handleRemoveTask, size}) =>{

    return(
        <>
            {notes.map((note) =>(
                <StyledListNotes >
                    <Checkbox />
                    <p>{note.title}</p>                    

                    {/* todo: poner estilos al select */}
                    <StyledLabelButton onChange={handleChangeLabel}>
                    {optionsLabel?.map((option) => 
                    (                   
                    <StyledOptionsSelect 
                        key={option.id}
                        value={option.value}
                        className={`-${option.value}`}
                        selected={note.label === option.value}
                    >{option.label}</StyledOptionsSelect>
                    ))}    
                    </StyledLabelButton>

                    {/* todo: poner el emotionLabel */}
                    {/* <EmotionCircle emotion={note.emotionalLabel} /> */}

                    <TrashButton 
                        notes={notes}
                        handleRemoveTask={handleRemoveTask}
                    />
              
                </StyledListNotes>
            ))}
        </>
    )
}