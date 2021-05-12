import logo from "./logo.svg";
import "./App.css";
import AddPersonForm from "./components/AddPersonForm";
import AddRoundForm from "./components/AddRoundForm";
import NavBar from "./components/NavBar";
import PersonList from "./components/PersonList";
import PersonCard from "./components/PersonCard";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { render, unstable_renderSubtreeIntoContainer } from "react-dom";

function App() {
  const [reload, setReload] = useState(true);
  const [peopleArr, setPeopleArr] = useState([]);
  const [currentP, setCurrentP] = useState(0);
  const [roundsArr, setRoundsArr] = useState([]);
  const [personRoundsArr, setPersonRoundsArr] = useState([]);
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

  function handleClickPerson() {
    console.log("hello");
    setReload(!reload);
  }
  function forceReload() {
    console.log("reloaded");
    setReload(!reload);
  }
  function handleCurrentP(id) {
    setCurrentP(id);
  }

  function handleDeleteRound(e) {
    fetch(`http://localhost:9393/rounds/${e.target.value}`, {
      method: "DELETE",
    }).then(() => {
      setRoundsArr(
        roundsArr.filter((round) => round.id !== parseInt(e.target.value))
      );
      setReload(!reload);
    });
  }
  return (
    <div className="App">
      <NavBar />
      <div>
        <PersonList
          onCurrentP={handleCurrentP}
          people={peopleArr}
          onClickPerson={handleClickPerson}
        />
        <AddPersonForm onForceReload={forceReload} />
      </div>
      <div>
        <PersonCard
          onForceReload={forceReload}
          person={currentP}
          people={peopleArr}
          roundsArr={roundsArr}
          onDeleteRound={handleDeleteRound}
          personRounds={personRoundsArr}
        />
      </div>
    </div>
  );
}

export default App;
