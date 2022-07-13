import './App.css';
import Emi from './component/Emi';


function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='span'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className='subtext'>EMI Calculator</span>
        <i className="fa-solid fa-clock-rotate-left" style={{color:'white'}}></i>
      </div>
     <Emi />
    </div>
  );
}

export default App;
