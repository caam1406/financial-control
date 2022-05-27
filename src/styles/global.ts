import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background-primary: #E1E2E1;
    --background-secundary: #F5F5F6;
    --color-primary: #004d40;
    --green-light: #39796b;
    --green-dark: #01251A;
    --text-tile: #ffffff;
}
html {
    @media (max-width: 1080px){
        font-size: 93.75%; // 93.75% = 15px
    }
    @media(max-width: 720px){
        font-size: 87.5%; // 87.5% = 14px
    }
}
button {
    cursor: pointer;
}
[disable]{
    opacity: 0.6;
    cursor: not-allowed;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    background: var(--background-primary);
    -webkit-font-smoothing: antialiased; //Fix font details in chrome browser baseds
}
body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}
h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}
`;
