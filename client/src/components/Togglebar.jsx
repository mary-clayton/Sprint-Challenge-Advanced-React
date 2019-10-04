import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import styled from 'styled-components'

const TogglebarStyle = styled.div `

.togglebar {
    border: none;
  }

  .toggle {
    background: #f68819;
    border-radius: 50px;
    height: 18px;
    left: 0;
    position: absolute;
    transition: 0.2s;
    width: 20px;
  }
  
  .toggled {
    left: 18px;
  }
  
  .dark-mode-toggle {
    background: papayawhip;
    border-radius: 50px;
    border: 1px solid black;
    height: 20px;
    position: relative;
    width: 40px;
    margin: 0 90%;
  }

`

const Togglebar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <TogglebarStyle className="togglebar">
      <h1>Women's World Cup</h1>
      <div className="dark-mode-toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </TogglebarStyle>
  );
}
export default Togglebar;