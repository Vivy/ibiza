import { useState } from 'react';
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
      {meniu === 'favorite-cocktail' ? <FavoriteCocktail /> : 'null'}
      {meniu === 'all-cocktails' ? <AllCocktails /> : 'null'}
      <h1>Hello drinkers and welcome to Ibiza</h1>
    </div>
  );
};

export default Ibiza;
