import styled from 'styled-components';


export const Menu = styled.ul`
  display: grid;
  align-content: end;
  grid-template-columns: auto auto auto;
  justify-content: space-around;
  background-color: blue;
  color: white;
  width: 100vw;
  height: 100px;
  div.container {
    padding: 1rem;
    grid-column: 1/4;
    left: 50%;
    top: 50%;
    width: 90vw;
    background-color: pink;
    border-radius: 1rem;
    box-shadow: 0 1rem 2rem rgba(2, 9, 38, 0.25);
  }
  input {
    font-size: 1rem;
  }
`
