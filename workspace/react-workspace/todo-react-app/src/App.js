import './App.css';
import Todo from './Todo';
import React,{useState, useEffect} from 'react';
import {Container, List, Paper} from "@mui/material"
import AddTodo from './AddTodo';
import {call} from "./service/ApiService"

function App() {
  const [items, setItems] = useState([]);

  useEffect(() =>{
    call("/todo", "GET", null)
    .then((response) => setItems(response.data));
  },[]);
  
  

  const addItem = (item) => {
    call("/todo", "POST", item)
    .then((response) => setItems(response.data));
  }

  const editItem = () =>{
    setItems([...items]);
  }

  const deleteItem = (item) => {
    call("/todo", "DELETE", item)
    .then((response) => setItems(response.data));
  }

  // JSX 결과를 변수에 저장
  let todoItems = items.length > 0 && (
    <Paper style={{margin:16}}>
      <List>
        {items.map((item)=> (
          <Todo item={item} key={item.id} editItem = {editItem} deleteItem={deleteItem}/>
        ))}
      </List>
    </Paper>
  )
// 변수를 반환
  return (
    <div className='App'>
      <Container maxWidth="md">
        <AddTodo addItem = {addItem}/>
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
