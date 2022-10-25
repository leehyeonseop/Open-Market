import styled from 'styled-components';
import inputImage from '../../assets/icons/icon-img.svg';

export const Wrapper = styled.div`
    padding: 44px 5.208333333333333% 136px;

    h2 {
        font-weight: 700;
        font-size: 2.25rem;
        line-height: 2.75rem;

        & + div {
            display: flex;
            margin-top: 42px;
        }
    }
`;

export const Main = styled.main`
    width: 76.74418604651163%;
    margin-left: auto;

    form {
        display: flex;
        flex-flow: row wrap;
    }
`;

interface IImageLabel {
    imgURL: string;
}

export const ImageLabel = styled.label`
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
    color: #767676;
    width: 34.39393939393939%;
    margin-bottom: 0;

    &::after {
        display: flex;
        content: '';
        background-color: #c4c4c4;
        width: 100%;
        align-self: stretch;
        height: calc(100% - 28px);
        box-sizing: border-box;
        background-image: url(${(props: IImageLabel) => props.imgURL || inputImage});
        background-repeat: no-repeat;
        background-position: center;
        background-size: ${(props: IImageLabel) =>
            props.imgURL !== '' ? 'cover' : 'auto'};
        cursor: pointer;
        margin-top: 10px;
    }

    & + input {
        display: none;
    }
`;

export const ProductDetail = styled.div`
    width: 62.57575757575758%;
    margin-left: auto;

    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;

    label,
    legend {
        display: block;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.25rem;
        color: #767676;
        margin-bottom: 10px;
    }

    input {
        width: 100%;
        box-sizing: border-box;
        padding: 16px 15px;
        border: 1px solid #c4c4c4;
        border-radius: 5px;
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.25rem;

        &:focus {
            outline: 1px solid #21bf48;
        }
    }
`;

export const Container = styled.div`
    margin-bottom: 16px;
    &:last-child {
        margin-bottom: 0;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    width: 26.63438256658596%;

    input {
        width: 75.45454545454545%;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        &:focus + span {
            outline: 1px solid #21bf48;
        }
    }

    span {
        display: flex;
        width: 24.54545454545455%;
        background-color: #c4c4c4;
        align-items: center;
        justify-content: center;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.25rem;
        color: white;
    }
`;

export const ButtonWrapper = styled.div`
    width: 54.47941888619855%;
    display: flex;
    justify-content: space-between;

    label {
        width: 48.88888888888889%;
        padding: 17px 0;
        box-sizing: border-box;
        border: 1px solid #c4c4c4;
        background-color: white;
        border-radius: 5px;
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.25rem;
        color: #767676;
        text-align: center;
        cursor: pointer;
        margin-bottom: 0;
    }

    input[type='radio'] {
        display: none;
        &:checked + label {
            background-color: #21bf48;
            color: white;
            border: 0;
        }
    }
`;

export const ProductDescription = styled.div`
    width: 100%;
    margin-top: 40px;
    label {
        display: block;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.25rem;
        color: #767676;
        margin-bottom: 10px;
    }

    textarea {
        width: 100%;
        padding: 16px;
        box-sizing: border-box;
        min-height: 300px;
        border: 1px solid #c4c4c4;
        border-radius: 5px;
        background-color: #f2f2f2;
        resize: none;
        font-size: 1rem;
        font-family: 'Spoqa Han Sans Neo';

        &:focus {
            outline: 1px solid #21bf48;
        }
    }
`;

export const CancleButton = styled.button`
    width: 15.15151515151515%;
    padding: 18px 0;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    background-color: #fff;
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: #767676;
    cursor: pointer;
    margin-left: auto;
    margin-top: 50px;
`;

export const SaveButton = styled(CancleButton)`
    background: #21bf48;
    color: white;
    margin-left: 1.060606060606061%;
`;
