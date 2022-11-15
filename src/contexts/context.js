import { createContext, useContext, useEffect, useState } from 'react';
import P from 'prop-types';
import { detailCharacterApi } from '../services/api';

export const DisneyContext = createContext();

export const DisneyProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');
  const [url, setUrl] = useState('https://api.disneyapi.dev/characters?page=1');
  const [characters, setCharacters] = useState([]);
  const [charactersUrl, setCharactersUrl] = useState([]);
  const [detailCharacters, setDetailCharacters] = useState(null);
  const [param, setParam] = useState('');
  const [page, setPage] = useState(1);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    detailCharacterApi(param, setDetailCharacters);
  }, [url, param, searchValue, charactersUrl]);

  const disneyObject = {
    searchValue,
    setSearchValue,
    characters,
    setUrl,
    setParam,
    detailCharacters,
    setDisabled,
    disabled,
    charactersUrl,
    url,
    setCharactersUrl,
    setCharacters,
    page,
    setPage,
  };

  return (
    <DisneyContext.Provider value={disneyObject}>
      {children}
    </DisneyContext.Provider>
  );
};

export const useDisneyContext = () => {
  const context = useContext(DisneyContext);
  if (context === undefined) {
    throw new Error(
      'useCheckoutContext must be used within a CheckoutProvider',
    );
  }
  return context;
};

DisneyProvider.propTypes = {
  children: P.node.isRequired,
};
