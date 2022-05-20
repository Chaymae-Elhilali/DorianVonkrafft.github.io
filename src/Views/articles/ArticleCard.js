import { Grid } from '@material-ui/core';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { getCurrentDate } from '../accueil/composants/dateToString.js';
import { StyledCard, StyledButton } from "../styles/styles.js";

function ArticleCard({ element, onClickShow }) {
  return (
    <StyledCard sx={{ p: 2 }}>
      <Grid container direction="row" spacing={1}>
        <Grid item xs={12} sm={4}>
          <CardMedia
            component="img"
            height="200"
            image={element.image}
            alt={element.name}
          />
        </Grid>
        <Grid item xs={12} sm={8} container direction="column">
          <Grid item>
            <CardContent>
              <Typography variant="h5" component="div">
                {element.name}
              </Typography>
              <Typography gutterBottom variant="subtitle1" color="text.secondary">
                {getCurrentDate(element)}
              </Typography>
              <Typography variant="body1" paragraph>
                {element.corpus}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item>
            <CardActions style={{
              justifyContent: 'flex-end'
            }}>
              <StyledButton onClick={onClickShow}>
                Afficher l'article
              </StyledButton>
            </CardActions>
          </Grid>
        </Grid>
      </Grid>
    </StyledCard>
  );
}

export default ArticleCard;