import {getDatabase, ref, set} from "firebase/database";
import {app} from "./firebase";
import logo from './logo.svg';
import React  from 'react';
import './App.css';

const db = getDatabase(app);

function App() {
  const putData = () => {
    set(ref(db, "users/prem"),{
      id: 1,
      name: "Prem",
      age: 21,
    });
  };
  return (
    <div className="App">
     <h1>React Firebase App</h1>
     <button onClick={putData}>Put Data</button>
    </div>
  );
}

export default App;
