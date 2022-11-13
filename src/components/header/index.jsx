import { useDisneyContext } from '../../contexts/context';
import { Container } from '../Container';
import * as S from './styles';

export const Header = () => {
  const { searchValue, setSearchValue, disabled } = useDisneyContext();

  return (
    <S.Header>
      <Container>
        <S.HeaderWrapper>
          <S.HeaderTitle>DisneyApi</S.HeaderTitle>

          <S.InputSearch
            placeholder="Search a character..."
            name="search_input"
            value={searchValue}
            disabled={disabled}
            onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
          />
        </S.HeaderWrapper>
      </Container>
    </S.Header>
  );
};
