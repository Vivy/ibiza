import { useEffect, useState } from 'react';

export const useSearch = (initialTerm = '') => {

  const [term, setTerm] = useState(initialTerm);
  const [list, updateList] = useState([]);

  const searchDrink = (drink) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
      .then((results) => results.json())
      .then((data) => {
        updateList(data.drinks);
        console.log(data.drinks)
      });
  };

  useEffect(() => {
    searchDrink(term);
  }, [term]);

  return [list, setTerm]
}
