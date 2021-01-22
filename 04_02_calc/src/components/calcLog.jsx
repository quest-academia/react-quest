import React from 'react';
import css from '../styles/layout.module.css';

class CalcLog extends React.Component {
  render() {
    return (
      <div className={css.l_calcLog}>
        <div>
          {
            this.props.calcParams.map(function(item) {
              return (
                <p>{item}</p>
              );
            }
          )}
        </div>
        <div>
          {
            this.props.answerParams.map(function(item) {
              return (
                <p>{item}</p>
              );
            }
          )}
        </div>
      </div>
    )
  }
}
export default CalcLog;