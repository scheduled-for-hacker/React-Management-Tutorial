import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Customer from './components/Customer';
import { Table } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Paper } from '@material-ui/core';
import { Component } from 'react';


const styles = theme => ({
  root: {
    width: '100%',
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customer = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '홍길동',
    'birthday' : '919281',
    'gender' : '남자',
    'job' : '대학생'
  },

  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '김바보',
    'birthday' : '912333',
    'gender' : '여자',
    'job' : '대학생'
  },

  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '김똥개',
    'birthday' : '912333',
    'gender' : '여자',
    'job' : '바보'
  },
]


class App extends Component
{
  render() 
  {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
          <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
            customer.map(c => {
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              )
            })
          }
          </TableBody>
          </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
