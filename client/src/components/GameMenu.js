import React from 'react';
import { useHistory } from 'react-router-dom';

const GameMenu = props => {
    let history = useHistory();
    return (
        <div className="text-center">
            <h1>Welcome to TypeRacer</h1>
            <button type="button" onClick={() => history.push('/game/create')}>Create game</button>
            <button type="button" onClick={() => history.push('/game/join')}>Join game</button>
        </div>
    )
}

export default GameMenu;