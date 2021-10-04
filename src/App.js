import React, {useState} from 'react';
import './App.css';
import CardComponent from './components/Card-Component/Card';
import faker from 'faker';

function App() {
    const [showCard, setShowCard] = useState(true);


    const generateRandomData = (quantityRecord) => {
        if (localStorage.getItem('data')) {
            return JSON.parse(localStorage.getItem('data'));
        } else {
            const data = new Array(quantityRecord).fill({}).map(record => ({
                id: faker.datatype.uuid(),
                avatar: faker.image.avatar(),
                fullname: faker.name.findName(),
                email: faker.internet.email(),
                gender: faker.name.gender,
                phone: faker.phone.phoneNumber()
            }));

            localStorage.setItem('data', JSON.stringify(data));
            return data;
        }
    }

    const [listCard, setListCard] = useState(generateRandomData(3));

    const toggleShowCard = () => setShowCard(!showCard);
    const deleteHandler = (index) => {
        const copyListCard = [...listCard];
        copyListCard.splice(index, 1);
        setListCard(copyListCard);
    }

    const cardMarkup = showCard && listCard.map((record, index) => (<CardComponent
        key={record.id}
        fullname={record.fullname}
        avatar={record.avatar}
        email={record.email}
        gender={record.gender}
        phone={record.phone}
        onDelete={() => deleteHandler(index)}
    />))

    return (
        <div className="App">
            <div className="container">
                <button className="button" onClick={toggleShowCard}>Toggle show card</button>
                {cardMarkup}
            </div>
        </div>
    );
}

export default App;
