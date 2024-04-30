import { css } from 'lit-element';

export default css `
  cells-template-paper-drawer-panel {
    background-color: #5472d3;
    text-align: center;
  }
  
  .nav-pokemon {
    display: flex;
    align-items: center;
    justify-content: space-evenly;    
    margin-top: 2rem;
  }

  .nav-pokemon button {
    width: 80px;
    background-color: #00074e;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 1rem;
    border-radius: 1rem;
  }  
`;