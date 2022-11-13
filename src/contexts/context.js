import { createContext, useContext, useEffect, useState } from 'react';
import P from 'prop-types';
import { disneyApi, detailCharacterApi } from '../services/api';

export const DisneyContext = createContext();

export const DisneyProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');
  const [url, setUrl] = useState('');
  const [characters, setCharacters] = useState([]);
  const [charactersUrl, setCharactersUrl] = useState([]);
  const [detailCharacters, setDetailCharacters] = useState(null);
  const [param, setParam] = useState('');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    disneyApi(url, setCharacters, param, searchValue, setCharactersUrl);

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
