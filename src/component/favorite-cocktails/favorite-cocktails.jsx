import { Field, Form, Formik } from 'formik';
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
      {lista &&
        lista.map((ing) => {
          const { idIngredient, strIngredient, strType, strDescription } = ing;
          return (
            <div key={idIngredient}>
              {/* <h2>{strIngredient}</h2> */}
              <h3>{strType}</h3>
              <p>{strDescription}</p>
            </div>
          );
        })}
      {/* <Cocktail /> */}
    </S.FavoriteCocktails>
  );
};

export default FavoriteCocktails;
