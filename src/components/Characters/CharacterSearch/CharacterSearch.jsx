import React from 'react';
import ProrTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    minWidth: 300,
  },
}));

export const CharacterSearch = ({ getStateSelect }) => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <FormControl variant="outlined" className={classes.root}>
        <InputLabel htmlFor="outlined-status-native-simple">Status</InputLabel>
        <Select
          native
          onChange={getStateSelect}
          label="Status"
          inputProps={{
            name: 'status',
            id: 'outlined-status-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value="all">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.root}>
        <InputLabel
          htmlFor="outlined-species-native-simple"
        >
          Species
        </InputLabel>
        <Select
          native
          onChange={getStateSelect}
          label="Species"
          inputProps={{
            name: 'species',
            id: 'outlined-species-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value="all">All</option>
          <option value="human">Human</option>
          <option value="animal">Animal</option>
          <option value="alien">Alien</option>
          <option value="disease">Disease</option>
          <option value="robot">Robot</option>
          <option value="cronenberg">Cronenberg</option>
          <option value="humanoid">Humanoid</option>
          <option value="poopybutthole">Poopybutthole</option>
          <option value="unknown">Unknown</option>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.root}>
        <InputLabel htmlFor="outlined-gender-native-simple">Gender</InputLabel>
        <Select
          native
          onChange={getStateSelect}
          label="Gender"
          inputProps={{
            name: 'gender',
            id: 'outlined-gender-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value="all">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </Select>
      </FormControl>
    </Grid>
  );
};

CharacterSearch.propTypes = {
  getStateSelect: ProrTypes.func.isRequired,
};
