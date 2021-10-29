import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Navbar from './component/navbar/Navbar';
import ListCard from './component/listcard/ListCard'
import {recipes} from './data'
function App() {
  const handleClick=(title)=>{
console.log(`recipe title:${title}`)
  }
  return (
    <div className="App">
     <Navbar/>
     <ListCard recipes={recipes} handleClick={handleClick}/>
    </div>
  );
}

export default App;
