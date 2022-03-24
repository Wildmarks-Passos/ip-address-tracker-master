import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');
    
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