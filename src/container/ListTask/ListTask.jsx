import { StyledListNotes } from "./StyledListTask"
import { Checkbox } from "../../components/Checkbox/Checkbox"
import { LabelButton } from "../../components/LabelButton/LabelButton"
import { EmotionLabel } from "../../components/EmotionLabel/EmotionLabel"
import { EmotionCircle } from "../../components/EmotionLabel/EmotionCircle"

export const ListTask = ({notes, emotionalOptions}) =>{
    return(
        <>
            {notes.map(note =>(
                <StyledListNotes>
                    <Checkbox />
                    <p key={note.id}>{note.title}</p>
                    <LabelButton label={note.label}/>

                    
                    <EmotionCircle emotion={note.emotionalLabel} />
              
                </StyledListNotes>
            ))}
        </>
    )
}