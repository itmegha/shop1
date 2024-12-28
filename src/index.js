import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import Hello1 from './Hello1';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <Hello1 />
    
// );

const root = document.getElementById("root");
const root1 = ReactDOM.createRoot(document.getElementById("root1"));

setInterval(()=>{
root.innerHTML = `
   <div>
      <h1>Using Vanilla JS</h1>
      <input type = "text"/>
      <p>${new Date().toLocaleTimeString()}</p>
   </div>
`;

root1.render(
  <div>
      <h1>Using React</h1>
      <input type = "text"/>
      <p>{new Date().toLocaleTimeString()}</p>
   </div>
)},1000);
