import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  border: none;
}

body {
  background-color: aliceblue;
}

h2, h3,p{
  font-size: 5px;
}


`

export default GlobalStyle
