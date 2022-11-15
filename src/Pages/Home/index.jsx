import { Container } from '../../components/Container';
import { Characters } from '../../components/Characters/index';
import { useDisneyContext } from '../../contexts/context';
import { useEffect } from 'react';
import * as S from './styles';
import { disneyApi } from '../../services/api';

export const Home = () => {
  const {
    charactersUrl,
    searchValue,
    setParam,
    setUrl,
    setDisabled,
    url,
    setCharactersUrl,
    setCharacters,
    page,
    setPage,
  } = useDisneyContext();

  useEffect(() => {
    setDisabled(false);
    setParam('');
    disneyApi(url, setCharacters, searchValue, setCharactersUrl);
  }, [
    setParam,
    setDisabled,
    setCharactersUrl,
    setCharacters,
    searchValue,
    url,
  ]);

  const nextPage = () => {
    if (charactersUrl.nextPage) {
      setUrl(charactersUrl.nextPage);
      setPage((p) => p + 1);
    } else {
      setUrl('https://api.disneyapi.dev/characters?page=1');
      setPage(1);
    }
  };

  const prevPage = () => {
    if (charactersUrl.previousPage) {
      setUrl(charactersUrl.previousPage);
      setPage((p) => p - 1);
    } else {
      setUrl('https://api.disneyapi.dev/characters?page=149');
      setPage(187);
    }
  };

  return (
    <S.Section>
      <Container>
        <S.SectionTitle>Characters:</S.SectionTitle>
        <Characters />
        {searchValue === '' && (
          <S.ButtonsArea>
            <S.Button onClick={() => prevPage()}>next</S.Button>
            <S.Page>{page}</S.Page>
            <S.Button onClick={() => nextPage()}>prev</S.Button>
          </S.ButtonsArea>
        )}

        {searchValue.length > 0 && null}
      </Container>
    </S.Section>
  );
};
