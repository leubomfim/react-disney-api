import * as S from './styles';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from '../../components/Container/index';
import { useDisneyContext } from '../../contexts/context';

export const Details = () => {
  const { setParam, detailCharacters, setUrl, setDisabled, setPage } =
    useDisneyContext();
  const navigate = useNavigate();
  const param = useParams();
  useEffect(() => {
    setDisabled(true);
    setParam(param.id);
  }, [setParam, param.id, setDisabled]);
  return (
    <section>
      <Container>
        {detailCharacters === null && <S.Loading>Loading...</S.Loading>}
        <S.Back
          onClick={() => {
            setPage(1);
            setUrl('https://api.disneyapi.dev/characters?page=1');
            navigate('/');
          }}
        >
          Back
        </S.Back>
        {detailCharacters && (
          <S.DetailsArea>
            <S.CharacterPhoto src={detailCharacters.imageUrl} />
            <S.Name>{detailCharacters.name}</S.Name>

            <S.Column>
              <S.P>
                <S.Span>Id:</S.Span> {detailCharacters._id}
              </S.P>
              <S.P>
                <S.Span>Allies:</S.Span>{' '}
                {detailCharacters.allies.length > 1 &&
                  detailCharacters.allies.map((allie) => (
                    <span key={allie}>{allie},</span>
                  ))}
                {detailCharacters.allies.length === 1 &&
                  detailCharacters.allies.map((allie) => (
                    <span key={allie}>{allie}.</span>
                  ))}
                {detailCharacters.allies.length === 0 && 'No Allies.'}
              </S.P>
              <S.P>
                <S.Span>Enemies:</S.Span>{' '}
                {detailCharacters.enemies.length > 1 &&
                  detailCharacters.enemies.map((enemies) => (
                    <span key={enemies}>{enemies},</span>
                  ))}
                {detailCharacters.enemies.length === 1 &&
                  detailCharacters.enemies.map((enemies) => (
                    <span key={enemies}>{enemies}.</span>
                  ))}
                {detailCharacters.enemies.length === 0 && 'No Enemies.'}
              </S.P>
              <S.P>
                <S.Span>Films:</S.Span>{' '}
                {detailCharacters.films.length > 1 &&
                  detailCharacters.films.map((film) => (
                    <span key={film}>{film},</span>
                  ))}
                {detailCharacters.films.length === 1 &&
                  detailCharacters.films.map((film) => (
                    <span key={film}>{film}.</span>
                  ))}
                {detailCharacters.films.length === 0 && 'No Films.'}
              </S.P>
              <S.P>
                <S.Span>TV Shows:</S.Span>{' '}
                {detailCharacters.tvShows.length > 1 &&
                  detailCharacters.tvShows.map((show) => (
                    <span key={show}>{show},</span>
                  ))}
                {detailCharacters.tvShows.length === 1 &&
                  detailCharacters.tvShows.map((show) => (
                    <span key={show}>{show}.</span>
                  ))}
                {detailCharacters.tvShows.length === 0 && 'No Tv Shows.'}
              </S.P>
              <S.P>
                <S.Span>Games:</S.Span>{' '}
                {detailCharacters.videoGames.length > 1 &&
                  detailCharacters.videoGames.map((games) => (
                    <span key={games}>{games},</span>
                  ))}
                {detailCharacters.videoGames.length === 1 &&
                  detailCharacters.videoGames.map((game) => (
                    <span key={game}>{game}.</span>
                  ))}
                {detailCharacters.videoGames.length === 0 && 'No Games.'}
              </S.P>
              <S.P>
                <S.Span>Short Films:</S.Span>{' '}
                {detailCharacters.shortFilms.length > 1 &&
                  detailCharacters.shortFilms.map((short) => (
                    <span key={short}>{short},</span>
                  ))}
                {detailCharacters.shortFilms.length === 1 &&
                  detailCharacters.shortFilms.map((short) => (
                    <span key={short}>{short}.</span>
                  ))}
                {detailCharacters.shortFilms.length === 0 && 'No Short Films.'}
              </S.P>
              <S.P>
                <S.Span>Parks Attractions:</S.Span>{' '}
                {detailCharacters.parkAttractions.length > 1 &&
                  detailCharacters.parkAttractions.map((parks) => (
                    <span key={parks}>{parks},</span>
                  ))}
                {detailCharacters.parkAttractions.length === 1 &&
                  detailCharacters.parkAttractions.map((park) => (
                    <span key={park}>{park}.</span>
                  ))}
                {detailCharacters.parkAttractions.length === 0 && 'No Parks.'}
              </S.P>
            </S.Column>
          </S.DetailsArea>
        )}
      </Container>
    </section>
  );
};
