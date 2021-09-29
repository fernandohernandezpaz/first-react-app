import React, {useState} from 'react';
import './App.css';
import CardComponent from './components/Card-Component/Card';
import faker from 'faker';

function App() {
    const [name, setName] = useState(faker.name.findName());
    const [showCard, setShowCard] = useState(true);

    const btns = (
        <div>
            <button className="button button1">Yes</button>
            <button className="button button2">No</button>
        </div>
    )

    const changeNameHandler = () => setName(faker.name.findName());

    const changeInputHandler = event => setName(event.target.value);

    const toggleShowCard = () => setShowCard(!showCard);

    const cardMarkup =  showCard && <CardComponent
        fullname={name}
        onChangeName={() => changeNameHandler()}
        onInputName={changeInputHandler}
    >{btns}</CardComponent>

    return (
        <div className="App">
            <div className="container">
                <button className="button" onClick={toggleShowCard}>Toggle show card</button>
                { cardMarkup }
            </div>
        </div>
    );
}

export default App;
