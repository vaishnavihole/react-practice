import './App.css';
import Chocolate from './Chocolate';

function App() {
  return (
    <>
    <h1 className='app-header'>Chocolate App</h1>

      <Chocolate title="Kharbuj" description="Khabuj is fruit" price="10"/>
      <Chocolate title="Dairy Milk" description="dairy milk is sweet" price="10"/>
      <Chocolate title="Perk" description="perk is chocolate" price="10"/>
    </>
  )
}

export default App;

