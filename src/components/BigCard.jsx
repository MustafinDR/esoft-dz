import photo from './photo.jpg';
import {MyName} from './data.jsx';

export function BigCard () {
    return (
    <header className="App-header">
        <img src={photo} className="App-photo"/>
        <p>
          {MyName}
        </p>
    </header>
    )
}