import { useState } from 'react';
import './App.css';
//Vi definerar en funktion (en react-komponent) som 
//pratar med index.js som renderar App
//React kör funktionen App som jämför med index.js id'root'
//som då uppdaterar DOM (index.html)
function App() {
  const [value, setValue] = useState('');
  //skapar en State som från början är en tom sträng, värdet hamnar i
  //value och setValue ändrar State (nedan vid input)
  //value={value} ändras

  const [items, setItems] = useState([
    //useState returnerar arryen "state" där "item" är värdet och "setItem" är en funktion för att ändra "state" inom return (  ) nedan
    {
      completed: true,
      label: 'Learn HTML',
    },
    {
      completed: true,
      label: 'Learn Javascript',
    },
    {
      completed: false,
      label: 'Learn React',
    },
  ]);
  console.log('Rendering', value);

//första gången useState körs så skapar den värdet items (arrayen) ovan.
//andra gången useState körs skapar den arrayen updatedItems nedan med funktionen setItems som uppdaterar värdet
  

  return (
    <div className="app">
      <h1 className="app__title">My ToDo</h1>
    <p className="todoCounter">
      2 completed
    </p>
    <form className="todoForm" onSubmit={(ev) => {
      ev.preventDefault();

      const updatedItems = [
        ...items,
        {
          completed: false,
          label: value, //value gör att jag lägger till nytt item i listan när jag trycker på ok-knappen
        }
      ];

      setItems(updatedItems);
    }}>
      <input className="todoForm__input" type="text" value={value} onChange={(ev) => {
        setValue(ev.target.value);
      }}/>
      <button className="todoForm__submitButton" type="submit">OK</button>
    </form>
    <ul className="todoList">
      {/* Man skapar en React-komponent genom att skapa en funktion som returnerar React-element */}
      {/* Här skriver vi Javascript som ska utvärderas med item.map (Array) */}
      {
        items.map((item, index) => {
          const className = item.completed
          ? 'todoList__item todoList__Item--completed'
          : 'todoList__item';
          return(
            <li key={index} className={className}>
              <span className="todoList__itemLabel">{item.label}</span>
              <button className="todoList__deleteButton">Delete</button>
            </li>
          );
        })
      }
    </ul>
    </div>
  );
}

export default App;
