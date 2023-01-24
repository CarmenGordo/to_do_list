import { useState } from "react"
import { StyledListNotes } from "./StyledListTask"
import { Checkbox } from "../../components/Checkbox/Checkbox"
import { LabelButton } from "../../components/LabelButton/LabelButton"
import { StyledLabelButton, StyledOptionsSelect } from "../../components/LabelButton/StyledLabelButton"
import { EmotionCircle } from "../../components/EmotionLabel/EmotionCircle"
import { TrashButton } from "../../components/TrashButton/TrashButton"

export const ListTask = ({notes, checkedTask, optionsLabel, handleChangeLabel, handleRemoveTask, size}) =>{
    
   
    return(
        <>
            {notes.length > 0 ?
            notes.map((note) =>(
                <StyledListNotes >
                    <Checkbox 
                        checkedTask={checkedTask} 
                        id={note.id} />
                    <p className="">{note.title}</p>                    

                    <StyledLabelButton onChange={handleChangeLabel}>
                        {optionsLabel?.map((option) => (                   
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
                        id={note.id}
                        handleRemoveTask={handleRemoveTask}
                    />
              
                </StyledListNotes>
            )) : <p>Don´t have any task</p>

            }
        </>
    )
}