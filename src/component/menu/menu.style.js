import styled from 'styled-components';


export const Menu = styled.ul`
  display: grid;
  align-content: end;
  grid-template-columns: auto auto auto;
  justify-content: space-around;
  background-color: blue;
  color: white;
  font-size: 5px;
  /* width: 100vw;
  height: 100px; */


  @media screen  and (min-width: 768px){
  grid-template-columns: 2fr 2fr 2fr;
  font-size: 200px;
}

@media screen and (min-width: 1240px){
  font-size: small;
}
`
