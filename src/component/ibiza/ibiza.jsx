import { useState } from 'react';
import { AllCocktails, MyCocktail, FavoriteCocktails } from '..';
import { Menu, GlobalStyle } from '../index';
import Search from '../search/search';

const Ibiza = () => {
  const [meniu, schimbaMeniu] = useState('');

  const handleMenu = (sectiune) => {
    schimbaMeniu(sectiune);
  };

  return (
    <div>
      <GlobalStyle />
      <Menu schimba={handleMenu} />
      <h1>Hello drinkers and welcome to Ibiza</h1>
      {meniu === 'my-cocktail' ? <MyCocktail /> : null}
      {meniu === 'all-cocktails' ? <AllCocktails /> : null}
      {meniu === 'favorite-cocktail' ? <FavoriteCocktails /> : null}
      {/* <Search /> */}
    </div>
  );
};

export default Ibiza;
