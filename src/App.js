import './App.css';
import {Competenc} from './components/competenc.jsx';
import { listStudiet, listStudy } from './components/data.jsx';
import {BigCard} from './components/BigCard.jsx'

function App() {
  return (
    <div className="App">
      <BigCard></BigCard>
      <Competenc list = {listStudiet} name = {'Изучено'}></Competenc>
      <Competenc list = {listStudy} name = {'Изучить'}></Competenc>
    </div>
  );
}

export default App;
