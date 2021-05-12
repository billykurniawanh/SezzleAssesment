import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { evaluate } from 'mathjs';

const useStyles = makeStyles({
  resultBox: {
    width: '40vw',
    marginTop: '2vw',
    marginBottom: '1vw',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'right',
    color: 'black',
  },
  buttonGroup: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '40vw',
  },
  button: {
    height: '3vw',
    width: '8vw',
    margin: '1vw 1vw 1vw 1vw',
  },
});

const Calculator = ({ socket }) => {
  const classes = useStyles();
  const [expression, setExpression] = useState('');

  const evaluateExpression = () => {
    try {
      const result = evaluate(expression);
      socket.emit('newExpression', expression + '=' + result);
      setExpression(result);
    } catch (err) {
      setExpression('ERROR');
      setTimeout(() => setExpression(''), 1500);
    }
  };

  return (
    <div>
      <TextField
        label="Result"
        variant="outlined"
        disabled
        value={expression}
        className={classes.resultBox}
      />
      <ButtonGroup
        size="large"
        className={classes.buttonGroup}
        variant="contained"
      >
        <Button
          className={classes.button}
          onClick={() => setExpression(expression + '(')}
        >
          (
        </Button>
        <Button
          className={classes.button}
          onClick={() => setExpression(expression + ')')}
        >
          )
        </Button>
        <Button
          className={classes.button}
          onClick={() => setExpression(expression + '%')}
        >
          %
        </Button>
        <Button className={classes.button} onClick={() => setExpression('')}>
          AC
        </Button>
      </ButtonGroup>
      <ButtonGroup
        size="large"
        className={classes.buttonGroup}
        variant="contained"
      >
        <Button
          className={classes.button}
          onClick={() => setExpression(expression + '7')}
        >
          7
        </Button>
        <Button
          className={classes.button}
          onClick={() => setExpression(expression + '8')}
        >
          8
        </Button>
        <Button
          className={classes.button}
          onClick={() => setExpression(expression + '9')}
        >
          9
        </Button>
        <Button
          className={classes.button}
          onClick={() => setExpression(expression + '/')}
        >
          /
        </Button>
      </ButtonGroup>
      <ButtonGroup
        size="large"
        className={classes.buttonGroup}
        variant="contained"
      >
        <Button
          className={classes.button}
          onClick={() => setExpression(expression + '4')}
        >
          4
        </Button>
        <Button
          className={classes.button}
          onClick={() => setExpression(expression + '5')}
        >
          5
        </Button>
        <Button
          className={classes.button}
          onClick={() => setExpression(expression + '6')}
        >
          6
        </Button>
        <Button
          className={classes.button}
          onClick={() => setExpression(expression + '*')}
        >
          x
        </Button>
      </ButtonGroup>
      <ButtonGroup
        size="large"
        className={classes.buttonGroup}
        variant="contained"
      >
        <Button
          className={classes.button}
          onClick={() => setExpression(expression + '1')}
        >
          1
        </Button>
        <Button
          className={classes.button}
          onClick={() => setExpression(expression + '2')}
        >
          2
        </Button>
        <Button
          className={classes.button}
          onClick={() => setExpression(expression + '3')}
        >
          3
        </Button>
        <Button
          className={classes.button}
          onClick={() => setExpression(expression + '-')}
        >
          -
        </Button>
      </ButtonGroup>
      <ButtonGroup
        size="large"
        className={classes.buttonGroup}
        variant="contained"
      >
        <Button
          className={classes.button}
          onClick={() => setExpression(expression + '0')}
        >
          0
        </Button>
        <Button
          className={classes.button}
          onClick={() => setExpression(expression + '.')}
        >
          .
        </Button>
        <Button className={classes.button} onClick={evaluateExpression}>
          =
        </Button>
        <Button
          className={classes.button}
          onClick={() => setExpression(expression + '+')}
        >
          +
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Calculator;
