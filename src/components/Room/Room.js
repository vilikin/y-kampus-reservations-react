import React from 'react';
import './Room.css';

export const Room = ({code, name, reservations}) => (
    <div className="room">
        {code} | {name}
    </div>
);

export default Room;