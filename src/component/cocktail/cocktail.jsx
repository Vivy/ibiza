import { useEffect, useState } from 'react';
import * as S from './cocktail.style';

const Cocktail = () => {
  const [data, setData] = useState([]);

  const randomCocktail = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((res) => res.json())
      .then((data) => {
        setData(data.drinks);
        console.log(data.drinks);
      });
  };

  useEffect(() => {
    randomCocktail();
  }, []);

  return (
    <S.Cocktail>
      {data.map((cocktail) => {
        const {
          idDrink,
          strDrink,
          strCategory,
          strDrinkThumb,
          strInstructions,
        } = cocktail;
        return (
          <div className='asta' key={idDrink}>
            <h2>{strDrink}</h2>
            <img src={strDrinkThumb} alt='#' />
            <h3>{strCategory}</h3>
            <p>{strInstructions}</p>
            <button onClick={randomCocktail}>Random Cocktail</button>
          </div>
        );
      })}
    </S.Cocktail>
  );
};

export default Cocktail;
