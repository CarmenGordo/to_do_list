import { StyledListNotes } from "./StyledListTask"
import { Checkbox } from "../../components/Checkbox/Checkbox"
import { StyledLabelButton, StyledOptionsSelect } from "../../components/LabelButton/StyledLabelButton"
import { EmotionCircle } from "../../components/EmotionLabel/EmotionCircle"
import { TrashButton } from "../../components/TrashButton/TrashButton"

export const ListTask = ({notes, checkedTask, optionsLabel, handleChangeLabel, openModal, handleOpenModal,handleShowTaskByLabel, handleRemoveTask, size}) =>{
    
    return(
        <>
            {notes.length > 0 ?
            // todo: poner el handleShowTaskByLabel para preguntar
            // notes.filter((option)=>(option.label === "done"))
            //    handleShowTaskByLabel ? <h1>aaaaaa</h1> : '',

            notes.map((note) =>(

                <StyledListNotes key={note.id}>
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

                    <EmotionCircle 
                        emotion={note.emotionalLabel} 
                        notes={notes}
                        id={note.id} 
                        // title={note.title} description={note.description} label={note.label}
                        handleOpenModal={handleOpenModal} 
                        openModal={openModal}
                    />

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