import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo';
import { db } from './firebase';
import firebase from 'firebase/compat/app';


function App() {
  //fetching list from database

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState(['']);
  
  useEffect(() => {
   db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
    //  console.log(snapshot.docs.map(doc => doc.data()));
     setTodos(snapshot.docs.map(doc => ({id:doc.id,todo:doc.data().todo})))
   }) 
  },[]);

  const addTodo = (event) =>{
    //Click evemt action
    event.preventDefault();  //stops the refreshing of page

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos, input]);
    setInput('');  //clear's the input after button click
  }

  return (
    <div className="App">
      <h1>Notes App¯\_(ツ)_/¯ </h1>
      
      <form>
       {/* <input value = {input} onChange={event => setInput(event.target.value)}/> */}
       <FormControl>
         <InputLabel>write here...</InputLabel>
         <Input value = {input} onChange={event => setInput(event.target.value)}/>
       </FormControl>
       <Button disabled={!input} type='submit' onClick={addTodo} variant='contained' color="primary" >Add Note</Button>
       {/* <button type='submit' onClick={addTodo}>Add To-Do</button> */}
      </form>
     

      <ul>
        {todos.map(todo => (
          <Todo todo ={todo}/>
          //<li>{todo}</li>
        ))}
        
      </ul>
    </div>
  );
}

export default App;
