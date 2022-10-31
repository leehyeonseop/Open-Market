import { useNavigate } from 'react-router-dom';
import { removeUser } from '../../localStorage/index';
import { IDropDown } from '../../types';
import { Wrapper } from './DropDown.style';

const DropDown = (props: IDropDown) => {
    const { dropDown } = props;

    const navigate = useNavigate();

    const logOut = () => {
        removeUser();
        navigate('/');
    };

    return (
        <>
            <Wrapper dropDown={dropDown}>
                <ul>
                    <li>
                        <button type="button">마이 페이지</button>
                    </li>
                    <li>
                        <button type="button" onClick={logOut}>
                            로그아웃
                        </button>
                    </li>
                </ul>
            </Wrapper>
        </>
    );
};

export default DropDown;
