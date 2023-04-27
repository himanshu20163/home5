import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className='left'>
          <h4 style={{fontSize:"42px"}}>Logo</h4>
        </div>
        <div className='right'>
          <navbar>
            <span id="home">HOME</span>
            <span id="other">ABOUT</span>
            <span id="other">MENU</span>
            <span id="other">ORDER</span>
            <span id="other">CONTACT</span>
          </navbar>
        </div>
      </div>
      <div className="bottom">
         <h3>HOME PAGE</h3>
      </div>
      {/* <Hootsuite /> */}
    </div>
  );
}

export default App;
