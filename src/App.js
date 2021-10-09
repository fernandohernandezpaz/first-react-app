import React, {useState, useEffect} from 'react';
import './App.css';
import CardComponent from './components/Card-Component/Card';
import faker from 'faker';
import axios from 'axios';

function App() {
    const [showCard, setShowCard] = useState(true);
    // Example to useEffect
    // useEffect(() => {
    //     alert('App use Effect');
    // }, [showCard]);
    const generateRandomData = (quantityRecord = 3) => {
        if (localStorage.getItem('data')) {
            if (localStorage.getItem('data').length === quantityRecord) {
                return JSON.parse(localStorage.getItem('data'));
            }
        }
        const data = new Array(quantityRecord).fill({}).map(record => ({
            id: faker.datatype.uuid(),
            avatar: null,
            fullname: faker.name.findName(),
            email: faker.internet.email(),
            gender: faker.name.gender,
            phone: faker.phone.phoneNumber()
        }));

        localStorage.setItem('data', JSON.stringify(data));
        return data;

    }

    const [listCard, setListCard] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setListCard(response.data);
                console.log(response.data);
            })
    }, []);

    const toggleShowCard = () => setShowCard(!showCard);
    const deleteHandler = (index) => {
        const copyListCard = [...listCard];
        copyListCard.splice(index, 1);
        setListCard(copyListCard);
    }

    const changeHandler = (event, id) => {
        const index = listCard.findIndex(card => card.id === id);
        const copyListCard = [...listCard];
        copyListCard[index].fullname = event.target.value;

        setListCard(copyListCard);
    }

    const styleToggleButton = {
        backgroundColor: listCard.length < 3 ? 'lightgreen' : 'green',
        cursor: listCard.length < 3 ? 'not-allowed' : 'grab',
    }

    const cardMarkup = showCard && listCard.map((record, index) => (<CardComponent
        key={record.id}
        fullname={record.name}
        email={record.email}
        phone={record.phone}
        onDelete={() => deleteHandler(index)}
        onInputChange={(event) => changeHandler(event, record.id)}
    />))

    return (
        <div className="App">
            <div className="container">
                <button className="button"
                        disabled={listCard.length < 3}
                        style={styleToggleButton}
                        onClick={toggleShowCard}>
                    Toggle {showCard ? 'show' : 'hide'} card
                </button>
                {cardMarkup}
            </div>
        </div>
    );
}

export default App;
