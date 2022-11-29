import { Cocktail } from '../cocktail';
import * as S from './all-cocktails.style';

const AllCocktails = () => {
  return (
    <S.AllCocktails>
      <input
        id='search-cocktail'
        type='text'
        placeholder='Search for a cocktail'
      />
      <button id='search-cocktail'>Search for a cocktail</button>
      <div id='cocktail-resul'></div>
      {/* <li src='https://thecocktaildb.com/api/json/v1/1/search.php?f=' /> */}
      <Cocktail />
    </S.AllCocktails>
  );
};

export default AllCocktails;
