import logo from './logo.svg';
import './App.css';
import RedButton from './components/training/RedButton';
import BigButton from './components/training/BigButton';
import FlexibleButton from './components/training/FlexibleButton';
import DifficultButton from './components/training/DifficultButton';

function App() {
  const domArray =[];
  for(let i = 1; i <= 10; i++){
      domArray.push(<RedButton buttonParam={i}/>)
  }

  const flexibleButtonArray = [];
  for(let i = 1; i <= 4; i++){
    domArray.push(<FlexibleButton width={50 + i * 20}px/>)
  }

  const difficultButtonArray = [];
  for(let i = 1; i <= 13; i++){
    domArray.push(<DifficultButton width={50 + i * 20}px param={i} />)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        {domArray}
        <BigButton color='#DF0101' width='50px' param='test'/>
        <BigButton color='#FFFF00' width='60px' param='test'/>
        <BigButton color='#0101DF' width='70px' param='test'/>
        <BigButton color='#848484' width='80px' param='test'/>
        <BigButton color='#A901DB' width='90px' param='test'/>
        {flexibleButtonArray}
        {difficultButtonArray}
      </header>
    </div>
  );
}

export default App;
