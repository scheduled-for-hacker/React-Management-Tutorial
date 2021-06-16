import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Customer from './components/Customer';


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


function App() 
{
  render() 
  {
    return (
      <div>
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
      </div>
    );
  }
}

export default App;
