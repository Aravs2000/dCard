import './App.css';
import pic from './rocket-ship.png'
import Info from './components/Info'
import About from './components/About'
import Footer from './components/Footer'
function App() {
  return (
    <div >
      <div className="App">
        <Info/>
        
        <About/>
        <Footer/>
        
      </div>
      <div className='apic'>
        <img  src={pic} alt="rpic" />
      </div>
    </div>
  );
}

export default App;
