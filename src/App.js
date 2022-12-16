import './App.css';
import { useEffect } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Center from './Center/Center';


function App() {
  
  useEffect(()=>{
    // fetch()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className='side-center'> 
      <div className='sideBar'>
        <Sidebar/>
      </div>
        <div className='centerDiv'>
          <Center/>
        </div>
      
      </div>
    </div>
  );
}

export default App;
