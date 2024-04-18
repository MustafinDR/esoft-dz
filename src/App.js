import photo from './components/photo.jpg';
import MyName from './components/BigCard.jsx';
import './App.css';

const compet = [1,2,3,4]
const compet2 = [1,2,3,4,5,6,7,8,9,0]

function Competenc (props){
  const listItems = compet.map( (elem) => <li>{elem}</li>)
  const listItems2 = compet2.map( (elem) => <li>{elem}</li>)
  return (
    <>
      <div className='competenc'> Компетенции
        <ul>{listItems}</ul>
      </div>
      <div className='competenc'> Изучить
        <ul>{listItems2}</ul>
      </div>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} className="App-photo" alt="photo" />
        <p>
          {MyName}
        </p>
      </header>
      <Competenc></Competenc>
    </div>
  );
}

export default App;
