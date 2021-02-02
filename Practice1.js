import React from 'react';
import './App.css';
import Todos from './Components/Todos';






function App() {
  return (
    <div className="container-fluid vw-100 vh-100">
   

      <h1 className="d-flex justify-content-center align-items-center">Ayan Todo Application</h1>
<div className="d-flex justify-content-center align-items-center vh-100">

   
    <Todos/>
</div>

  
    </div>
  );
}

export default App;
