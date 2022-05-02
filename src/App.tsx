// import { Component } from 'react';
import { useState, useEffect, ChangeEvent } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
import { getData } from './utils/data.utils';

// never use any keyword, typescript
export type Monster = {
  id: string,
  name: string,
  email: string
};

const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField)
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1> Monster Rolodex </h1>
      <SearchBox
        className='search'
        placeholder='Type Monster'
        onChangeHandler={onSearchChange}
      />
      <CardList
        monsters={filteredMonsters}
      />
    </div>
  );
}

// Class component
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => this.setState({monsters: json}))
//   }
//   // Performance: Move anonymous func out of the render.
//   onSearchChange = e => {
//     const searchField = e.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField }
//     })
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter(monster =>
//       monster.name.toLowerCase().includes(searchField)
//     );

//     return (
//       <div className='App'>
//         <h1> Monster Rolodex </h1>
//         <SearchBox
//           placeholder='Type Monster'
//           handleChange={onSearchChange}
//         />
//         <CardList
//           monsters={filteredMonsters}
//         />
//       </div>
//     );
//   }
// }

export default App;
