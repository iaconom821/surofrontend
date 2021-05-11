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
  console.log(currentP, peopleArr);
  useEffect(() => {
    fetch("http://localhost:9393/people")
      .then((res) => res.json())
      .then((people) => setPeopleArr(people));
  }, [reload]);

  function forceReload() {
    console.log("reloaded");
    setReload(!reload);
  }
  function handleCurrentP(id) {
    setCurrentP(id);
  }
  return (
    <div className="App">
      <NavBar />
      <div>
        <PersonList onCurrentP={handleCurrentP} people={peopleArr} />
        <AddPersonForm />
      </div>
      <div>
        <PersonCard
          onForceReload={forceReload}
          person={currentP}
          people={peopleArr}
        />
      </div>
    </div>
  );
}

export default App;
