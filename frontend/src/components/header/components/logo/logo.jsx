import { styled } from "styled-components"
import { Icon } from "../../../icon/icon";
import { NavLink } from "react-router-dom";
// import { Icon } from "../../components";


const LargeText = styled.div`
    font-size: 48px;
    font-weight: 600;
    line-height: 63px;
    margin-top: 5px;
    
`;

const SmallText = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

const LogoContainer = ({className}) => (
    <NavLink className={className} to="/">
        <Icon id="fa-code" size="72px" margin="0 10px 0 0"/>
        <div>
            <LargeText>Blog</LargeText>
            <SmallText>Web developer</SmallText>
        </div>
    </NavLink>
)

export const Logo = styled(LogoContainer)`
    display: flex;
    margin-top: -20px;
`