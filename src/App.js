import logo from './logo.svg';
import './App.css';
import AddPersonForm from './components/AddPersonForm'
import AddRoundForm from './components/AddRoundForm'
import NavBar from './components/NavBar'
import PersonList from './components/PersonList'
import PersonCard from './components/PersonCard'
import {Switch, Route} from 'react-router-dom'
import styled from 'styled-components'



function App() {


 


  return (
    <div className="App">
        <NavBar />
        <div>
          <PersonList persons={['p1', 'p2']}/>
          <AddPersonForm/>
        </div>
        <div>
          <PersonCard/>
          <AddRoundForm persons={['p1','p2']}/>
        </div>
    </div>
  );
}

export default App;
