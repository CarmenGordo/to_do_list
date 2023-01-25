import { StyledSidebarFiltersContainer } from "./StyledSidebarFilters";

export const SidebarFilters = ({optionsLabel,emotionalOptions, handleShowAllTask, handleShowTaskByLabel, size})=>{

    return(
        <>
            <StyledSidebarFiltersContainer>
                <h3>Label:</h3>
                <p id="0" select 
                    onClick={handleShowAllTask}
                >All the task</p>

                {optionsLabel.map((option)=>(
                    <p id={option.id}
                        onClick={()=>handleShowTaskByLabel(option.id, option.label)}  
                    >{option.label}</p>
                ))}

                <h3>Emotion:</h3>
                <p id="0" select>All the emotion</p>

                {emotionalOptions.map((option)=>(
                    <p id={option.id}>{option.label}</p>
                ))}
                
            </StyledSidebarFiltersContainer>
        </>
    )
}