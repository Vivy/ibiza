import * as S from './nav.style';

const Nav = ({ onClick, children }) => {
  return <S.Nav onClick={onClick}>{children}</S.Nav>;
};

export default Nav;
