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
        
        color:white;
        background:#DAE0E6;
    }

    .container{
        max-width:100%;
        height:100vh;    
        padding: 68px 40px 20px 40px;
        margin:0 auto;
    }
`;

export default GlobalStyles;
