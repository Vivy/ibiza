import { useEffect, useState } from 'react'

export const useSearch = (initialIngred = '') => {

  const [ingred, setIngred] = useState(initialIngred);
  const [lista, updateLista] = useState([]);


  const searchIngred = (ingredient) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`)
      .then((rezult) => rezult.json())
      .then((data) => {
        updateLista(data.drinks);
        console.log(data.drinks)
      }
      )
  }

  useEffect(() => {
    searchIngred(ingred);
  }, [ingred]);

  return [lista, setIngred]
}
