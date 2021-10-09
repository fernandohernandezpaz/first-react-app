import '../../App.css';
import React, { useState, useEffect } from 'react';
import faker from 'faker';

const Card = (props) => {
    const [x, setX] =useState(0);
    const [y, setY] =useState(0);

    const recordMouse = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        window.addEventListener('mousemove', recordMouse)
    }, []);

    return (
        <div className={'card'}>
            <p>x position: {x}, y position: {y}</p>
            <img src={props.avatar} alt=""/>
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