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
      id: 1,
      completed: true,
      label: 'Learn HTML',
    },
    {
      id: 2,
      completed: true,
      label: 'Learn Javascript',
    },
    {
      id: 3,
      completed: false,
      label: 'Learn React',
    },
  ]);
  const deleteItem = (itemId) => {
    const updatedItems = items.filter(item => item.id !== itemId);
    setItems(updatedItems);
  };
  const completed = items.filter(item => item.completed == true).length;

//första gången useState körs så skapar den värdet items (arrayen) ovan.
//andra gången useState körs skapar den arrayen updatedItems nedan med funktionen setItems som uppdaterar värdet
  

const toggleCompleted = (itemId) => {
  const updatedItems = items.map(item => {
    if (item.id === itemId) {
      return {
        ...item,
        completed: !item.completed
      };
    }
    return item;
  });

  setItems(updatedItems);
};

  return (
    <div className="app">
      <h1 className="app__title">My ToDo</h1>
    <p className="todoCounter">
      {`${completed} completed`}
    </p>
    <form className="todoForm" onSubmit={(ev) => {
      ev.preventDefault();

      const nextId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;

      const updatedItems = [
        ...items,
        {
          id: nextId,
          completed: false,
          label: value, //value gör att jag lägger till nytt item i listan när jag trycker på ok-knappen
        }
      ];

      setItems(updatedItems);
      setValue('');
    }}>
      <input className="todoForm__input" type="text" value={value} onChange={(ev) => {
        setValue(ev.target.value);
      }}/>
      <button className="todoForm__submitButton" type="submit">OK</button>
    </form>
    <ul className="todoList">
  {
    items.map((item) => {
      const className = item.completed
        ? 'todoList__item todoList__item--completed'
        : 'todoList__item';

      return (
        <li key={item.id} className={className} onClick={() => toggleCompleted(item.id)}>
          <span className="todoList__itemLabel">{item.label}</span>
          <button className="todoList__deleteButton" onClick={(ev) => {
            ev.stopPropagation(); // Förhindrar att item-klickhändelsen utlöses
            deleteItem(item.id);
          }}>Delete</button>
        </li>
      );
    })
  }
</ul>

    </div>
  );
}

export default App;
