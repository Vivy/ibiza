import { Nav } from '../nav';
import * as S from './menu.style';

const Menu = () => {
  return (
    <S.Menu>
      <Nav>My Cocktails</Nav>
      <Nav>All Cocktails</Nav>
      <Nav>Favorite Cocktails</Nav>
    </S.Menu>
  );
};

export default Menu;
