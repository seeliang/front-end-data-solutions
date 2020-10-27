import React, {useEffect, useState} from 'react';

function App() {
  const {store} = window;
  const [text, setText] = useState('')
  const update = () => {
    const text = store.getState().message.text
    setText(() => text )
  }
  useEffect(() => {
    store.subscribe(update)
  },[store])
  const send = (e) => {
    e.preventDefault();
    store.dispatch({ type: "MESSAGE_UPDATE", text})
  }

  const add = () => {
    store.dispatch({ type: 'COUNT_INCREMENT' })
  }

  const minus = () => {
    store.dispatch({ type: 'COUNT_DECREMENT' })
  }

  return (
    <div className="App">
      <h2> react app </h2>
      <h4>pub count</h4>
      <button onClick={add}> add </button>
      <button onClick={minus}> minus </button>
      <h4>pub message</h4>
      <p> the message we have: {text} </p>
    </div>
  );
}

export default App;
