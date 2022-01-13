import React from 'react';
import ReactDOM from 'react-dom';
import UseRef from './UseRef';
import ControlledComponents from './ControlledComponents'
import UseContext from './UseContext';

ReactDOM.render(
  <React.StrictMode>

    {/* <UseRef /> */}
    {/* <ControlledComponents /> */}
    <UseContext />
    
  </React.StrictMode>,
  document.getElementById('root')
);