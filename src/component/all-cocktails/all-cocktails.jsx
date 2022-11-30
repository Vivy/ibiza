import { Cocktail } from '../cocktail';
import Search from '../search/search';
import * as S from './all-cocktails.style';

const AllCocktails = () => {
  return (
    <S.AllCocktails>
      <Search />
      {/* <Cocktail /> */}
    </S.AllCocktails>
  );
};

export default AllCocktails;
