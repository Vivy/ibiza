import { Field, Form, Formik, setIn } from 'formik';
import { useEffect, useState } from 'react';
import { Cocktail } from '../cocktail';
import * as S from './favorite-cocktails.style';
import { useSearch } from './search-ingredient-hook';

const FavoriteCocktails = () => {
  const [lista, setIngred] = useSearch('');

  const onSubmit = (valori) => {
    setIngred(valori.ingred);
  };

  //Trebuie sa fac un search ingredient si pentru componentul favorite-cocktail
  return (
    <S.FavoriteCocktails>
      <Formik
        initialValues={{
          ingred: '',
        }}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <Field name='ingred' />
            <button type='submit'> Search Ingredient </button>
          </Form>
        )}
      </Formik>

      {lista.map((ing) => {
        const {
          idDrink,
          strDrink,
          strCategory,
          strDrinkThumb,
          strInstructions,
        } = ing;
        return (
          <div key={idDrink}>
            <h2>{strDrink}</h2>
            <img src={strDrinkThumb} alt='#' />
            <h3>{strCategory}</h3>
            <p>{strInstructions}</p>
          </div>
        );
      })}
      {/* <Cocktail /> */}
    </S.FavoriteCocktails>
  );
};

export default FavoriteCocktails;
