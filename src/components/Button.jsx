import React, { useState } from 'react';

function Button(props) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
    alert(`Se hizo clic en el botón ${props.label} ${clicks + 1} veces`);
    props.onClick();
  };

  return (
    <button className="btn btn-light" onClick={handleClick}>
      {props.label} Has been clicked: ({clicks}) times
    </button>
  );
}

export default Button;
