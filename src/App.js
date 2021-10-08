import React, {Component} from 'react';
import './App.css';
import CardComponent from './components/Card-Class-Component/Card';
import faker from 'faker';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listCard: this.generateRandomData(4),
            showCard: true
        }
    }

    generateRandomData = (quantityRecord = 3) => {
        if (!quantityRecord) {
            return [];
        }
        if (localStorage.getItem('data')) {
            const data = JSON.parse(localStorage.getItem('data'))
            if (data.length === quantityRecord) {
                return data;
            }
        }
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

    toggleShowCard = () => this.setState({showCard: !this.state.showCard});

    deleteHandler = (index) => {
        const copyListCard = [...this.state.listCard];
        copyListCard.splice(index, 1);
        this.setState({listCard: copyListCard});
    }

    static getDerivedStateFromProps(props, state) {
        console.log('App js getDerivedStateFromProps', props);
        return state;
    }

    changeHandler = (event, id) => {
        const index = this.state.listCard.findIndex(card => card.id === id);
        const copyListCard = [...this.state.listCard];
        copyListCard[index].fullname = event.target.value;
        this.setState({listCard: copyListCard});
    }

    componentDidMount() {
        console.log('App js componentDidMount');
    }

    render() {
        console.log('App js rendered');
        const styleToggleButton = {
            backgroundColor: this.state.listCard.length < 3 ? 'lightgreen' : 'green',
            cursor: this.state.listCard.length < 3 ? 'not-allowed' : 'grab',
        }

        const cardMarkup = this.state.showCard && this.state.listCard.map((record, index) => (<CardComponent
            key={record.id}
            fullname={record.fullname}
            avatar={record.avatar}
            email={record.email}
            gender={record.gender}
            phone={record.phone}
            onDelete={() => this.deleteHandler(index)}
            onInputChange={(event) => this.changeHandler(event, record.id)}
        />));

        return (
            <div className="App">
                <div className="container">
                    <button className="button"
                            disabled={this.state.listCard.length < 3}
                            style={styleToggleButton}
                            onClick={this.toggleShowCard}>
                        Toggle show card
                    </button>
                    {cardMarkup}
                </div>
            </div>
        );
    }
}

export default App;
