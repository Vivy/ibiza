import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import * as S from './search.style';

const Search = ({ children }) => {
  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  // const cocktail = (parametri) => {
  //   setData(parametri);
  // };
  // const url =
  //   'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

  // const fetchCocktail = useCallback(() => {
  //   setLoading(true);

  //   axios
  //     .get(url)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((e) => console.log(e))
  //     .finally(() => setLoading(false));
  // }, []);

  // useEffect(() => {
  //   fetchCocktail();
  // }, [fetchCocktail]);
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    const anotherOne = (iar) => {
      setCocktail(iar);
    };

    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((results) => results.json())
      .then((data) => {
        setCocktail(data.drinks);
      });
  }, []);

  return (
    <S.Search>
      {cocktail.map((drink) => {
        const {
          idDrink,
          strDrink,
          strCategory,
          strDrinkThumb,
          strInstructions,
        } = drink;
        return (
          <div key={idDrink}>
            <h2>{strDrink}</h2>
            <img
              src={strDrinkThumb}
              alt='strDrink'
              style={{ width: '200px' }}
            />
            <h3>{strCategory}</h3>
            <p>{strInstructions}</p>
            {/* <button onClick={refresh()}>New Random Cocktail</button> */}
          </div>
        );
      })}
      {/* <input type='text' placeholder='Type a cocktail name...' id='user-inp' /> */}
      {/* <button onClick={fetchCocktail}>Search</button> */}
      {/* <div>{cocktail(() => [])}</div> */}
    </S.Search>
  );
};
export default Search;
