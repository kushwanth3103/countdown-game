import React from'react';
export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = React.useState('');
  const playerName=React.useRef();
  function handleSubmit(){
    setEnteredPlayerName(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ??'Unknown Entity'}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
