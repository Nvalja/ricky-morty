import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 200,
    height: 350,
    textAlign: 'center',
    position: 'relative',
  },
  image: {
    height: 200,
  },
  link: {
    position: 'absolute',
    display: 'block',
    overflow: 'hidden',
    width: 200,
    height: 200,
    top: '200px',
    left: 0,
    zIndex: 1,
    border: '1px solid',
    backgroundColor: 'green',
  },

});

export const CharacterCard = ({ name, image, status, species }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Card className={classes.root}>
        <CardActionArea onClick={handleClick}>
          {open ? (
            <div className={classes.link}>
              Click me, I will stay visible until you click outside.
            </div>
          ) : null}
          <CardMedia
            className={classes.image}
            image={image}
            title="characters picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {species}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    </ClickAwayListener>
  );
};

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

CharacterCard.defaultProps = {
  image: '',
};
