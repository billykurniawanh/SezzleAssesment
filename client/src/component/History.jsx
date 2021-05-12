import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  table: {
    width: '40vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '2vw',
  },
  header: {
    textAlign: 'center',
  },
});

const History = ({ data }) => {
  const classes = useStyles();
  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell className={classes.header}>Calculation History</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(row => (
          <TableRow>
            <TableCell component="th" scope="row">
              {row}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default History;
