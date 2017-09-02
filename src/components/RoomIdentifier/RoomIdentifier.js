import React from 'react';
import './RoomIdentifier.css';

export const RoomIdentifier = ({code, name, available}) => (
    <div className="room-identifier">
        <div className="code">
            {code}
        </div>
        <span className="name">
            {name}
        </span>
    </div>
);

export default RoomIdentifier;