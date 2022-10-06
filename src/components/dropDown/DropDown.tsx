import { Wrapper } from './DropDown.style';

import { removeUser } from '../../localStorage/index';

interface IDropDown {
    dropDown: boolean;
}

const DropDown = (props: IDropDown) => {
    const { dropDown } = props;

    return (
        <>
            <Wrapper dropDown={dropDown}>
                <ul>
                    <li>
                        <button type="button">마이 페이지</button>
                    </li>
                    <li>
                        <button type="button" onClick={removeUser}>
                            로그아웃
                        </button>
                    </li>
                </ul>
            </Wrapper>
        </>
    );
};

export default DropDown;
