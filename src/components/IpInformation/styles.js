import styled from "styled-components";

export const Container = styled.div`

    @media (max-width: 1440px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
        width: 90%;
        position: absolute;
        top: 0px;
        left: 0;
        right: 0;
        z-index: 9999;
    }

    @media (max-width: 767px) {

        top: 10px;
    }
`

export const Title = styled.h1`

    @media (max-width: 1440px) {
        font-size: 20px;
        font-weight: 500;
        color: #fff;
        margin: 20px 0;
    }

    @media (max-width: 767px) {

        margin: 32px 0;
    }
`

export const SearchBar = styled.div`

    @media (max-width: 1440px) {
        
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    
        margin-bottom: 35px;
    
        input {
            font-size: 18px;
            max-width: 500px;
            width: 100%;
            height: 50px;
            padding-left: 25px;
            border: none;
            border-radius: 15px 0 0 15px;
        }
    
        button {
    
            padding: 16.8px;
            background-color: black;
            border-radius: 0 15px 15px 0;
    
            border: none;
            text-align: center;
        }
    }

    @media (max-width: 767px) {
    
        input {

            height: 58px;
        }
    
        button {
    
            padding: 20.5px;
        }
    }

`

export const Information = styled.div`

    @media (max-width: 1440px) {
        

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        max-width: 1111px;
        width: 100%;
        height: 100%;
        text-align: left;
        
        border-radius: 15px;
        
        padding: 30px 0;
        overflow: hidden;
        background-color: #fff;

        div {

            display: flex;
            flex-direction: column;
            padding: 0 30px;
            border-left: solid 1px #d9d9d9;

            &:first-of-type{

                border: none;
            }
        }
    
        h2 {
    
            font-size: 8px;
            letter-spacing: 1.2px;
            color: #949494;
            text-transform: uppercase;
            font-weight: 700;
    
            margin-bottom: 12px;
        }
    
        p {
    
            font-size: 16px;
            font-weight: 700;
        }
    
        svg {
            
            display: none;
        }
    }

    @media (max-width: 767px) {
        
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: ${props => props.display === true ? "330px" : "50px"};
        transition: 300ms;
        text-align: center;
        
        border-radius: 15px;
        
        padding: 30px 0 0 0;
        overflow: hidden;
        background-color: #fff;
    
        p {
    
            font-size: 20px;    
            margin-bottom: 30px;
        }
    
        svg {
            
            display: initial;
            position: absolute;
            top: 20px;
            right: 20px;
    
            transform: ${props => props.display === true ? "rotate(90deg)" : "rotate(0deg)"};
            transition: 300ms;
    
            border: none;
    
            &:hover {
    
                cursor: pointer;
            }
    
            path {
                stroke: #949494;
            }
        }
    }
`