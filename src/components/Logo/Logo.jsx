import propTypes from "prop-types"
import { StyledLogoContainer } from "./StyledLogo"

export const Logo = () =>{
    return(
        <>
           <StyledLogoContainer>
            <img src="" alt="" 
                // todo: poner al hacer onClick que recargue la pag como si fuera f5
                // onClick={}
            />
           </StyledLogoContainer>
        </>
    )
}

Logo.propTypes = {
    size: propTypes.oneOf(["small", "medium", "large"]),
    onClick: propTypes.func
}

Logo.defaultProps = {
    size: "small",
    // todo
    // onClick: undefined
}