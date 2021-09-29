import '../../App.css';
import React from 'react';
import faker from 'faker';

const Card = (props) => {
    return (
        <div className={'card'}>
            <img src={props.avatar} alt=""/>
            <h2>Hello, {props.fullname}</h2>
            <p>{props.email}</p>
            <p>{props.gender}</p>
            <p>{props.phone}</p>
            <input type="text" onInput={props.onInputName} value={props.fullname}/>
            <p><button className="button" onClick={props.onChangeName}>Change name</button></p>
            <div>{props.children}</div>
        </div>
    )
}

// default properties
Card.defaultProps = {
    avatar: faker.image.avatar(),
    fullname: faker.name.findName(),
    email: faker.internet.email(),
    gender: faker.name.gender,
    phone: faker.phone.phoneNumber(),
    onChangeName: () => {

    },
    onInputName: () => {

    }
}


export default Card;