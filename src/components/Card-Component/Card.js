import '../../App.css';
import React from 'react';
import faker from 'faker';

const Card = (props) => {
    return (
        <div className={'card'}>
            {/*<img src={props.avatar} alt=""/>*/}
            <h2>Hello, {props.fullname}</h2>
            <p>{props.email}</p>
            <p>{props.gender}</p>
            <p>{props.phone}</p>
            <input type="teyt" style={{'width': '95%'}} onChange={props.onInputChange} value={props.fullname}/>
            <p><button className="button button-red" onClick={props.onDelete}>Delete</button></p>
            <div>{props.children}</div>
        </div>
    )
}

// default properties
Card.defaultProps = {
    // avatar: faker.image.avatar(),
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