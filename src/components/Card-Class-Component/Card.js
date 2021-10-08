import '../../App.css';
import React, {Component} from 'react';
import faker from 'faker';

class Card extends Component {


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('Card js shouldComponentUpdate');
        return false;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Card js componentDidUpdate');
    }

    render() {
        return (
            <div className={'card'}>
                <img src={this.props.avatar} alt=""/>
                <h2>Hello, {this.props.fullname}</h2>
                <p>{this.props.email}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.phone}</p>
                <input type="text" style={{'width': '95%'}} onChange={this.props.onInputChange} value={this.props.fullname}/>
                <p>
                    <button className="button button-red" onClick={this.props.onDelete}>Delete</button>
                </p>
                <div>{this.props.children}</div>
            </div>
        )

    }
}

// default properties
Card.defaultProps = {
    avatar: faker.image.avatar(),
    fullname: faker.name.findName(),
    email: faker.internet.email(),
    gender: faker.name.gender,
    phone: faker.phone.phoneNumber(),
    onInputChange: () => {

    },
    onDelete: () => {
    }
}


export default Card;