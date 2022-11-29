import { Field, Form, Formik } from 'formik';
import { useSearch } from './search.hook';
import * as S from './search.style';

const Search = () => {
  const [list, setTerm] = useSearch('');

  const onSubmit = (values) => {
    setTerm(values.term);
  };

  return (
    <S.Search>
      <Formik
        initialValues={{
          term: '',
        }}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <Field name='term' />
            <button type='submit'> Cocktail</button>
          </Form>
        )}
      </Formik>

      {list.map((drink) => {
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
          </div>
        );
      })}
    </S.Search>
  );
};
export default Search;
