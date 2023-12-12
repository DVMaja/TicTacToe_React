import './App.css';
import Jatekter from './komponensek/Jatekter';
import { useState } from 'react';
import Modell from './model/Model.js';
const tmodel = new Modell();


function App() {
  const [list, setList] = useState(tmodel.getList()); //Ez volt["X", "O", "", "", "", "", "", "", "",]

  function katt(index) {
    //egyenlőre írja be a X et
    //és írja be a state  et
    /**Miért fontosak, ha az értke megváltozik, akkor fog az oldalon csak az a dolog változik meg */
    console.log(index);
    tmodel.setAll1apot(index);
    setList(tmodel.getList()) // [...lista] tényleges új másolat


  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe</h1>
      </header>
      <article>
        <Jatekter lista={list} katt={katt} />
      </article>

    </div>
  );
}

export default App;
