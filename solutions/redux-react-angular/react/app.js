import React, {useEffect, useState} from 'react';

function App() {
  const {store} = window;
  const [count, setCount] = useState('0')
  const [text, setText] = useState('')
  const update = () => {
    const count = store.getState().counter.count.toString();
    setCount(() => count )
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
  const typing = (e) => {
    const text = e.target.value;
    setText(text)
  }
  return (
    <div className="App">
      <h2> react app </h2>
      <h4>pub count</h4>
      <button onClick={add}> add </button>
      <button onClick={minus}> minus </button>
      <h4>pub message</h4>
      <form>
        <input value={text} onChange={typing}></input>
        <button onClick={send}>send</button>
      </form>
    </div>
  );
}

export default App;
