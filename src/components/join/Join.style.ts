import styled from 'styled-components';
import Button from '../button/Button';
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';
import upArrow from '../../assets/icons/icon-up-arrow.svg';
import downArrow from '../../assets/icons/icon-down-arrow.svg';

export const Section = styled.section`
    max-width: 550px;
    margin: 0 auto;
`;

export const StyledLogo = styled(Logo)`
    display: block;
    margin: 70px auto;
    cursor: pointer;
`;

export const H2 = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    border: 1px solid #c4c4c4;
    border-radius: 10px 10px 0 0;
    text-align: center;
    padding: 19px 0;
    width: 50%;
    display: inline-block;
    box-sizing: border-box;
    cursor: pointer;
    /* border-bottom: none; */
`;

export const Wrapper = styled.div`
    padding: 40px 35px 36px;
    border: 1px solid #c4c4c4;
    border-radius: 0 0 10px 10px;
    border-top: none;
`;

interface LabelProps {
    marginTop?: number;
}

export const Label = styled.label`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #767676;
    margin-bottom: 10px;
    display: block;
    margin-top: ${(props: LabelProps) => props.marginTop}px;
`;

export const Input = styled.input`
    width: 100%;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    padding: 16px 15px;
    line-height: 20px;
    box-sizing: border-box;
    &:focus {
        outline: none;
        border-color: #21bf48;
    }
    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export const IdCheckButton = styled(Button)`
    width: 28%;
    max-width: 122px;
    float: right;
`;

export const IdInput = styled(Input)`
    width: 72%;
    max-width: 346px;
`;

interface PwInputProps {
    background?: string;
}

export const PwInput = styled(Input)`
    background-image: url(${(props: PwInputProps) => props.background});
    background-repeat: no-repeat;
    background-position: center right 16px;
`;

interface StrongProps {
    type?: string;
}

export const Strong = styled.strong`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${(props: StrongProps) => {
        if (props.type === 'positive') {
            return '#21bf48';
        } else if (props.type === 'negative') {
            return '#EB5757';
        }
    }};
    display: inline-block;
    margin-top: 10px;
`;

export const Select = styled.select`
    width: 100%;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    padding: 16px 15px;
    line-height: 20px;
    box-sizing: border-box;
    background-image: url(${downArrow});
    background-repeat: no-repeat;
    background-position: center right 10px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    &::-ms-expand {
        display: none;
    }
    &:focus {
        outline: none;
        border-color: #21bf48;
        background-image: url(${upArrow});
    }
`;

export const Fieldset = styled.fieldset`
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    ${Input} {
        width: 32%;
    }
    ${Select} {
        width: 32%;
    }
`;

export const Legend = styled.legend`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #767676;
    margin-bottom: 10px;
    display: block;
`;

export const EmailFieldset = styled(Fieldset)`
    margin-bottom: 0;
    ${Input} {
        width: 46%;
    }
`;

export const At = styled.span`
    line-height: 54px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #767676;
`;

export const Footer = styled.footer`
    max-width: 480px;
    margin: 34px auto 110px auto;
`;

export const FooterWrapper = styled.div`
    display: flex;
`;

export const CheckBox = styled.input`
    margin: 2px 10px 0 0;
    width: 16px;
    height: 16px;
`;

export const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #767676;
`;

export const JoinButton = styled(Button)`
    margin-top: 34px;
    padding: 19px;
    width: 100%;
    &:disabled {
        background-color: #c4c4c4;
        cursor: default;
    }
`;
