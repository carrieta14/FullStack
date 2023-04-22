import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button';

function App() {
  const [cardColor, setCardColor] = useState("secondary");

  const handleButtonClick = (buttonColor) => {
    setCardColor(buttonColor);
  }

  return (
    <div className='text-center mt-5' id='container'>
      <i><h1 style={{fontFamily: 'Lucida Sans', color: '#6347CA'}}>Rubrica 2 Corte React</h1></i>
    <div className={`card bg-${cardColor} mt-5`} style={{ maxWidth: "60rem", margin: "auto", padding: "10rem" }}>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <Button label="Button 1" onClick={() => handleButtonClick("primary")} />
          </div>
          <div className="col">
            <Button label="Button 2" onClick={() => handleButtonClick("success")} />
          </div>
          <div className="col">
            <Button label="Button 3" onClick={() => handleButtonClick("danger")} />
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default App;




