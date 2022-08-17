import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css';
import Translater from "./components/translater";
import LevelPicker from "./components/languageLevel";
import Options from "./components/translateOPtions";
import Todos from "./components/todos";


function App() {
  return (
    <div className="App">
        {/*<Translater/>*/}
        {/*<Options/>*/}
        {/*<LevelPicker/>*/}
        <Todos/>
        <hr/>

    </div>
  );
}

export default App;
