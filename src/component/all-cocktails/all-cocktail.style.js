import styled from 'styled-components';

export const AllCocktails = styled.dl`
  display: grid;
  align-items: center;
  background-color: lightblue;
  font-size: small;
  color: red;
  
  dt,dd{
    grid-column: 2/3;
  }

  img {
    height: 100px;
    width: 100px;
    grid-column: 1/2;
  }
`
