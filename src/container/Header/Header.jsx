import propTypes from "prop-types"
import { StyledHeader, StyleTitle } from "./StyledHeader"
import { Logo } from "../../components/Logo/Logo"

export const Header = ()=>{
    return(
        <StyledHeader>

            {/* todo: poner logo */}
            <Logo />


        </StyledHeader>
    )
}

Header.propTypes = {
    size: propTypes.oneOf(["small", "medium", "large"]),
    onClick: propTypes.func
}

Header.defaultProps = {
    size: "small",
    // todo
    // onClick: undefined
}