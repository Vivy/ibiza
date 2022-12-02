import { Nav } from '../nav';
import Search from '../search/search';
import * as S from './menu.style';

const Menu = ({ schimba }) => {
  return (
    <S.Menu>
      <Nav onClick={() => schimba('my-cocktail')}>My Cocktails</Nav>
      <Nav onClick={() => schimba('all-cocktails')}> All Cocktails</Nav>
      <Nav onClick={() => schimba('favorite-cocktail')}>Favorite Cocktails</Nav>
    </S.Menu>
  );
};

export default Menu;
