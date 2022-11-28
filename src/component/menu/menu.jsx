import { Nav } from '../nav';
import * as S from './menu.style';

const Menu = ({ schimba }) => {
  return (
    <S.Menu>
      <div className='container'>
        <input
          type='text'
          placeholder='Type a cocktail name...'
          id='user-inp'
        />
        <button id='search-btn'>Search</button>
        <div id='result'></div>
      </div>
      <Nav onClick={() => schimba('my-cocktail')}>My Cocktails</Nav>
      <Nav onClick={() => schimba('all-cocktails')}> All Cocktails</Nav>
      <Nav onClick={() => schimba('favorite-cocktail')}>Favorite Cocktails</Nav>
      <script src='script.js'></script>
    </S.Menu>
  );
};

export default Menu;
