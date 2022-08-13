import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        /* background-color:rgba(20, 20,20, 1); */
        color:white;
        
    }

    .container{
        // 임시height
        height:100vh;
        
        max-width:100%;
        background:black;
        padding: 68px 40px 20px 40px;
        margin:0 auto;
        background:#DAE0E6;
    }
`;

export default GlobalStyles;
