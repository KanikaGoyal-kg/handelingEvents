import React, { useState } from 'react';

const HandelingEvents = () => {
    const purple = "#8e44ad";

    const [colorBg, setColorBg] = useState(purple);

    const [name, setName] = useState('Click me')

    const clickMeButton = () => {
        let newBg = "#34495e"
        setColorBg(newBg)
        setName('Hello 😃')
    }

    const bgBack = () => {
        setColorBg(purple);
        setName('how r u 🤩' )
    }

    return (
        <div className="main-div" style={{backgroundColor: colorBg}}>
            <button className="button" onClick={clickMeButton} onDoubleClick={bgBack}>{name}</button>
        </div>
    )
}

export default HandelingEvents;