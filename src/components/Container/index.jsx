import * as S from './styles';
import P from 'prop-types';

export const Container = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

Container.propTypes = {
  children: P.node.isRequired,
};
