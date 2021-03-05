import './App.css';
import Basiccomp from './components/basiccomp';
import Basiccomp2 from './components/basiccomp2';
import Basiccomp3 from './components/basiccomp3';
import Basiccomp4 from './components/basiccomp4';
import Basicprop from './components/basicpropexample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Basiccomp/>
       <Basiccomp2/>
       <Basiccomp3/>
       <Basiccomp4/>
       <Basicprop name = "sameer"/>
      </header>

    </div>
  );
}

export default App;
