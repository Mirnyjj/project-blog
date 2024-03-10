import { styled } from "styled-components";
import { Icon } from "../../../icon/icon";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../../../button/button";
import {ROLE} from "../../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { selectUserLogin, selectUserRole } from "../../../../selectors";
import { logout } from "../../../../actions";
import { checkAccess } from "../../../../utils";

const RightAligned = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

`;

const UserName = styled.div`
    font-size: 18px;
    font-weight: bold;
`;


const ControlPanelConteiner = ({className}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const roleId = useSelector(selectUserRole);
    const login = useSelector(selectUserLogin);

    const onLogout = () => {
        dispatch(logout())
        sessionStorage.removeItem('userData');
    };

    const isAdmin = checkAccess([ROLE.ADMIN], roleId);

    return (
        <div className={className}>
            <RightAligned>
                {roleId === ROLE.GUEST ? (
                        <Button>
                            <NavLink to="/login">Войти</NavLink>
                        </Button>
                    ) : 
                    <>
                        <UserName>
                            {login}
                        </UserName>
                            <Icon id="fa-sign-out" 
                                margin="0 0 0 10px" 
                                onClick={() => onLogout(session)}
                            />

                    </>

                    }
                
            </RightAligned>
            <RightAligned>
                    <Icon id="fa-backward" margin="10px 0 0 0" onClick={() => navigate(-1)}/>
                {isAdmin &&
                    <>
                    <NavLink to="/post"><Icon id="fa-file-text-o" margin="10px 0 0 15px"/></NavLink>
                    <NavLink to="/users"><Icon id="fa-users" margin="10px 0 0 15px"/></NavLink>
                    </>
                }
            </RightAligned>
        </div>
    );
}

export const ControlPanel = styled(ControlPanelConteiner)`

`