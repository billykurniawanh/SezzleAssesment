import React, { useState, useEffect } from 'react';
import Calculator from './component/Calculator';
import History from './component/History';
import socketIOClient from 'socket.io-client';

// const socket = socketIOClient('http://localhost:5000');
const socket = socketIOClient(
  'https://sezzleassesmentbillyhalim.herokuapp.com',
);

const App = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    socket.on('updateHistory', result => {
      setHistory(result);
    });
  }, []);

  return (
    <div>
      <Calculator socket={socket} />
      <History data={history} />
    </div>
  );
};

export default App;
