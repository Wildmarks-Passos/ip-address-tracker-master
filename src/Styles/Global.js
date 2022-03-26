import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, input, button {
        font: 14px Rubik, sans-serif;
    }

    button {
        cursor: pointer;
    }
`;