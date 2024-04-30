import { css  } from 'lit-element';

export default css `
  .card-pokemon { 
    background-color: #f61851;
    margin: 0 auto;
    margin-top: 2em;    
    border-radius: 2rem;
    box-shadow: 8px 8px 24px black;
    padding: .5rem;
    color: #fff;
    font-size: .8rem;
  }

  .card-title {    
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .card-title .card-title-text {
    text-align: center;
    border: 2px solid black;
    padding: .5rem 2rem;
    border-radius: .5rem;
    background: rgb(255,255,255);
    background: linear-gradient(120deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%);
  }

  .image-container {    
    width: 90%;    
    margin: 0 auto;
    overflow: hidden;
    border-radius: 1rem;
    background: rgb(190,240,244);
    background: linear-gradient(120deg, rgba(190,240,244,1) 0%, rgba(28,167,188,1) 67%);    
  }

  .image-container img {
    display: block;
    width: 100%;
  }

  .card-arrow {
    width: 40px;
    height: 40px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: #f9ed62;
  }

  .card-arrow:hover {
    background-color: #f7f2be;
  }

  .card-arrow img {
    width: 100%;
  }

  @media (min-width: 668px) {
    .card-pokemon { 
      max-width: 16rem;
    }
  }
`;