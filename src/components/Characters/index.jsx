import { useNavigate } from 'react-router-dom';
import { useDisneyContext } from '../../contexts/context';
import * as S from './styles';

export const Characters = () => {
  const { characters } = useDisneyContext();
  const navigate = useNavigate();

  const goToDetails = (e) => {
    navigate(`/${e.target.id}`);
  };
  return (
    <>
      {characters === undefined && <S.Loading>Loading...</S.Loading>}
      {characters.length === 0 && <S.Loading>No Characters.</S.Loading>}
      {characters && (
        <S.CharactersArea>
          {characters.map((el) => (
            <S.CharacterCard key={el._id}>
              <S.ImageArea>
                <S.CharacterImage src={el.imageUrl} />
              </S.ImageArea>
              <S.CharacterName>
                {' '}
                {el.name.length > 19
                  ? el.name.substring(0, 19) + '...'
                  : el.name}
              </S.CharacterName>
              <S.Details id={el._id} onClick={(e) => goToDetails(e)}>
                Details
              </S.Details>
            </S.CharacterCard>
          ))}
        </S.CharactersArea>
      )}
    </>
  );
};
