import { useState } from 'react';
import AllCocktails from '../all-cocktails/all-cocktails';
import { Menu, GlobalStyle } from '../index';
import MyCocktail from '../my-cocktails/mycocktails';

const Ibiza = () => {
  const [meniu, schimbaMeniu] = useState('');

  const handleMenu = (sectiune) => {
    schimbaMeniu(sectiune);
  };

  return (
    <div>
      <GlobalStyle />
      <Menu schimba={handleMenu} />
      {meniu === 'my-cocktail' ? <MyCocktail /> : 'null'}
      {meniu === 'all-cocktails' ? <AllCocktails /> : 'null'}
      {meniu === 'favorite-cocktail' ? <FavoriteCocktail /> : 'null'}
      <h1>Hello drinkers and welcome to Ibiza</h1>
    </div>
  );
};

export default Ibiza;
