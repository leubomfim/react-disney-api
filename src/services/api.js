import axios from 'axios';

export const disneyApi = (
  url,
  setCharacters,
  paramId,
  searchValue,
  setCharactersUrl,
) => {
  if (paramId === '') {
    axios
      .get(url)
      .then((resp) => {
        const filteredCharacter = resp.data.data.filter((character) => {
          return character.name.toLowerCase().includes(searchValue);
        });
        setCharactersUrl(resp.data);
        setCharacters(searchValue === '' ? resp.data.data : filteredCharacter);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    return;
  }
};

export const detailCharacterApi = (paramId, setDetailCharacters) => {
  if (paramId === '') {
    return;
  } else {
    axios
      .get(`https://api.disneyapi.dev/characters/${paramId}`)
      .then((resp) => setDetailCharacters(resp.data))
      .catch((err) => console.log(err));
  }
};
