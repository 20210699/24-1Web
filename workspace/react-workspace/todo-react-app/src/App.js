import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import React,{useState} from 'react';
import {Container, List, Paper} from "@mui/material"
import AddTodo from './AddTodo';

function App() {
  const [items, setItem] = useState([{
    id: "0",
    title: "Hello World 1",
    done: true
  },
  {
    id: "1",
    title: "Hello World 2",
    done: false
  },
  {
    id: "2",
    title: "Hello World 3",
    done: false
  },
  {
    id: "3",
    title: "Hello World 4",
    done: false
  },
]);

const addItem = (item) => {
  item.id = "ID-" + items.length;
  item.done = false;
  setItem([...items, item]);// items 배열에 item 원소 추가
  console.log("items: ", items)
}

// JSX 결과를 변수에 저장
let todoItems = items.length >0 && (
  <Paper style={{margin:16}}>
    <List>
      {items.map((item)=> (
        <Todo item={item} key={item.id}/>
      ))}
    </List>
  </Paper>
)
// 변수를 반환
  return (
    <div className='App'>
      <Container maxWidth="md">
        <AddTodo/>
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
