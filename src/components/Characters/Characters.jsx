import React, { useEffect, useState } from 'react';
import { Grid, Container } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import { getCharacters } from '../../api/characters';
import { CharacterCard } from './CharacterCard/CharacterCard';
import { CharacterSearch } from './CharacterSearch/CharacterSearch';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);
  const [countPages, setCountPages] = useState(1);
  const [selectedState, setSelectedState] = useState('');
  const [loadingError, setLoadingError] = useState(false);

  const handleChange = (event, newValue) => {
    setSelectedPage(newValue);
  };

  const handleStateSelect = ({ target }) => {
    let { value } = target;
    const { name } = target;

    if (value === 'all') {
      value = '';
    }

    setSelectedState({
      ...selectedState,
      [name]: value,
    });
  };

  useEffect(() => {
    loadCharacters();
  }, [selectedPage, selectedState]);

  const loadCharacters = async() => {
    setLoadingError(false);
    try {
      const { status, species, gender } = selectedState;
      const loadedCharacters = await getCharacters(
        `page=${selectedPage}`,
        status || '',
        species || '',
        gender || '',
      );

      setCharacters(loadedCharacters.results);
      setCountPages(Math.ceil(loadedCharacters.info.count / 20));
    } catch (error) {
      setLoadingError(true);
    }
  };

  const classes = useStyles();

  return (

    <Container>
      <CharacterSearch getStateSelect={handleStateSelect} />
      <Pagination
        className={classes.root}
        count={countPages}
        size="large"
        onChange={handleChange}
      />
      <Grid container justify="center" spacing={3}>
        {characters.map(character => (
          <Grid item key={character.id}>
            {!loadingError
              ? <CharacterCard {...character} />
              : <p>Character is unfounded</p>
            }
          </Grid>
        ))}
      </Grid>

    </Container>
  );
};
