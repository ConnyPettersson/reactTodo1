import './App.css';

//Vi definerar en funktion (en react-komponent) som 
//pratar med index.js som renderar App
//React kör funktionen App som jämför med index.js id'root'
//som då uppdaterar DOM (index.html)
function App() {
  return (
    <div className="app">
      <h1 class="app__title">My ToDo</h1>
    <p class="todoCounter">
      0 completed
    </p>
    <form class="todoForm">
      <input class="todoForm__input" type="text"/>
      <button class="todoForm__submitButton" type="submit">OK</button>
    </form>
    <ul class="todoList">
    </ul>
    </div>
  );
}

export default App;
