import React from 'react';
import css from '../styles/layout.module.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class CalcLog extends React.Component {
  render() {
    return (
      <Grid container className={css.l_calcLog}>
        <Grid item xs={5} className={css.l_calcLog_left}>
          {
            this.props.calcParams.map(function(item) {
              return (
                <div className={css.l_calcLog_card}>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary" gutterBottom>
                        {item}
                      </Typography>
                      </CardContent>
                  </Card>
                </div>
              );
            }
          )}
        </Grid>
      </Grid>
    )
  }
}

export default CalcLog;