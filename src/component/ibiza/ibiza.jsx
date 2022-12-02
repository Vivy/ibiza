import { useState } from 'react';
import { AllCocktails, MyCocktail, FavoriteCocktails } from '..';
import { Menu, GlobalStyle } from '../index';

const Ibiza = () => {
  const [meniu, schimbaMeniu] = useState('');

  const handleMenu = (sectiune) => {
    schimbaMeniu(sectiune);
  };

  return (
    <div>
      <GlobalStyle />
      <Menu schimba={handleMenu} />
      {meniu === 'my-cocktail' ? <MyCocktail /> : null}
      {meniu === 'all-cocktails' ? <AllCocktails /> : null}
      {meniu === 'favorite-cocktail' ? <FavoriteCocktails /> : null}
    </div>
  );
};

export default Ibiza;
