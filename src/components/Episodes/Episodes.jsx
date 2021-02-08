import React, { useEffect, useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { getEpisodes } from '../../api/episodes';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  table: {
    minWidth: 10,
  },
});

export const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [countPages, setCountPages] = useState(1);
  const [selectedPage, setSelectedPage] = useState(1);

  const handleChange = (event, newValue) => {
    setSelectedPage(newValue);
  };

  useEffect(() => {
    loadEpisodes();
  }, [selectedPage]);

  const loadEpisodes = async() => {
    const loadedEpisodes = await getEpisodes(`page=${selectedPage}`);

    setEpisodes(loadedEpisodes.results);
    setCountPages(Math.ceil(loadedEpisodes.info.count / 20));
  };

  const classes = useStyles();

  return (
    <Container>
      <Pagination
        className={classes.root}
        count={countPages}
        size="large"
        onChange={handleChange}
      />
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="large"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="center">Episode</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {episodes.map(episod => (
              <TableRow key={episod.id}>
                <TableCell align="left">{episod.name}</TableCell>
                <TableCell align="center">{episod.episode}</TableCell>
                <TableCell align="right">{episod.air_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
