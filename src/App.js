import Person from "./Person.js";
import Header from "./Header.js";
import List from "./List.js";
import Button from "./Button.js";

// items array :---
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4' , 'Item-5'];

// handling click events :---
const handleClick = () => {
  alert('Button clicked!');
};

const App = () => {
  return (
    <>
    <Header title="This is title"/>
    <Person name="Araham Abeddin" age="23" />
    <List items={items}/>
    <Button text="Click Me" onClick={handleClick} />
    </>
  )
}



export default App;