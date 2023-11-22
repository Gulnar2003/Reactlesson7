import React from 'react';
import Form from './Form';
import './App.css'; 

const App = () => {
  return (
    <div className="form-container"> {/* Stil qaynaqlarını form container div-ə əlavə edirik */}
      <h1>Qeydiyyat Formu:</h1>
      <Form />
    </div>
  );
};

export default App;
