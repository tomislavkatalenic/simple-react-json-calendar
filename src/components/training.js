import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

function Training() {
    const history = useHistory();

    function handleClick() {
        history.push(`/calendar`);
    }
    return (
        <div className="training">
            <h2>SPREMNI ZA</h2>
            <h2>TRENING?</h2>
            <Button onClick={handleClick}>Učitaj kalendar</Button>
        </div>
    )
}

export default Training;