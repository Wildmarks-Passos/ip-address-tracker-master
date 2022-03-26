import styled from "styled-components";

export const Container = styled.div`

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
        width: 90%;
        position: absolute;
        top: 10px;
        left: 0;
        right: 0;
        z-index: 9999;
    }
`

export const Title = styled.h1`

    font-size: 20px;
    font-weight: 700;
    color: #fff;
    margin: 32px 0;
`

export const SearchBar = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 25px;

    input {
        font-size: 18px;
        width: 100%;
        height: 58px;
        padding-left: 25px;
        border: none;
        border-radius: 10px 0 0 10px;
    }

    button {

        padding: 20.5px;
        background-color: black;
        border-radius: 0 10px 10px 0;

        border: none;
        text-align: center;
    }
`

export const Information = styled.div`

    display: none;
    width: 100%;
    text-align: center;

    border-radius: 10px;

    padding: 30px 0;

    background-color: #fff;

    h2 {

        font-size: 8px;
        letter-spacing: 1.2px;
        color: #949494;
        text-transform: uppercase;
        font-weight: 700;

        margin-bottom: 12px;
    }

    p {

        font-size: 20px;
        font-weight: 700;

        margin-bottom: 30px;
    }

`