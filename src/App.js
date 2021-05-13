
import "./App.css";
import AddPersonForm from "./components/AddPersonForm";
import NavBar from "./components/NavBar";
import PersonList from "./components/PersonList";
import PersonCard from "./components/PersonCard";
// import { Switch, Route } from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {useDarkMode} from './components/useDarkMode'
import { GlobalStyles } from './components/Globalstyles'
import { lightTheme, darkTheme } from './components/DarkModeTheme'
import { useState, useEffect } from "react";
import Toggle from './components/ToggleDarkMode'
// import { render } from "react-dom";

function App() {
  const [reload, setReload] = useState(true);
  const [peopleArr, setPeopleArr] = useState([]);
  const [currentP, setCurrentP] = useState(null);
  const [roundsArr, setRoundsArr] = useState([]);
  const [personRoundsArr, setPersonRoundsArr] = useState([]);
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  useEffect(() => {
    fetch("http://localhost:9393/people")
      .then((res) => res.json())
      .then((people) => setPeopleArr(people));
    fetch("http://localhost:9393/rounds")
      .then((res) => res.json())
      .then((rounds) => setRoundsArr(rounds));
    fetch("http://localhost:9393/person_rounds")
      .then((res) => res.json())
      .then((personRounds) => setPersonRoundsArr(personRounds));
  }, [reload]);

  // function handleClickPerson() {
  //   console.log("hello");
  //   setReload(!reload);
  // }
  function forceReload(data) {
    setRoundsArr([...roundsArr, data[0].newRound]);
    setPeopleArr(peopleArr.map(pep => {
      if(pep.id === data[1].person.id){
        return data[1].person
      } else{
        return pep
      }
    }));
    setCurrentP(data[1].person)
    setPersonRoundsArr([...personRoundsArr, ...data[2]])
  }
  function handleCurrentP(id) {
    const thisP = peopleArr.find(person => person.id === parseInt(id))
    setCurrentP(thisP);
  }
  

  function handleDeleteRound(e) {
    fetch(`http://localhost:9393/rounds/${e.target.value}`, {
      method: "DELETE",
    }).then(() => {
      // let newCurrentP = currentP
      // newCurrentP.total = newCurrentP.total - roundsArr.find(round => round.id === e.target.value).price 
      // newCurrentP.balance = 
      setRoundsArr(
        roundsArr.filter((round) => round.id !== parseInt(e.target.value))
      );
      setPersonRoundsArr(
        personRoundsArr.filter((personRound) => personRound.round_id !== parseInt(e.target.value))
      )
      
      setReload(!reload);
    });
  }

  function handleAddPerson(data) {
    setPeopleArr([...peopleArr, data])
  }

  if(!mountedComponent) return <div/> 
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles/>
          <div className="App">
            <Toggle theme={theme} toggleTheme={themeToggler}/>
            <NavBar />
            <div>
              <PersonList
                onCurrentP={handleCurrentP}
                people={peopleArr}
              />
              <AddPersonForm onAddPerson={handleAddPerson} />
            </div>
              <PersonCard
                onForceReload={forceReload}
                person={currentP}
                people={peopleArr}
                roundsArr={roundsArr}
                onDeleteRound={handleDeleteRound}
                personRounds={personRoundsArr}
              />
          </div>
      </>
    </ThemeProvider>
  );
}

export default App;
