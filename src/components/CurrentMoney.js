import React from 'react';
import Typography from '@material-ui/core/Typography';

function CurrentMoney(props) {
  const moneyArr = [100, 200, 300, 500, 1000,
    2000, 4000, 8000, 16000, 32000,
    64000, 125000, 250000, 500000, 1000000]

  return (
        <Typography variant="headline" component="h2" style={{textAlign: 'center', color: 'white', paddingTop: '1rem'}}>
            Answer for ${moneyArr[props.questionNum]}
        </Typography>
  );
}

export default CurrentMoney;