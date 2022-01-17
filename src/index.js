import React from 'react';
import ReactDOM from 'react-dom';
import UseRef from './UseRef';
import ControlledComponents from './ControlledComponents'
import UseContextHook from './UseContextHook';
import UseEffectHook from './UseEffectHook'

ReactDOM.render(
  <React.StrictMode>

    {/* <UseRef /> */}
    {/* <ControlledComponents /> */}
    {/* <UseContextHook /> */}
    <UseEffectHook />
    
  </React.StrictMode>,
  document.getElementById('root')
);