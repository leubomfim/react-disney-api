import axios from 'axios';

export const disneyApi = (
  url,
  setCharacters,
  searchValue,
  setCharactersUrl,
) => {
  axios
    .get(url)
    .then((resp) => {
      setCharactersUrl(resp.data);

      const data = resp.data.data;
      const filteredCharacter = data.filter((character) => {
        return character.name.toLowerCase().includes(searchValue);
      });

      setCharacters(searchValue === '' ? resp.data.data : filteredCharacter);
    })
    .catch((err) => {
      console.log(err);
    });
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
