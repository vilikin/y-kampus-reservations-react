import React from 'react';
import './RoomIdentifier.css';

export const RoomIdentifier = ({code, name, reserved}) => (
    <div className="room-identifier">
        <div className={reserved ? "code reserved" : "code"}>
            {code}
        </div>
        <span className="name">
            {name}
        </span>
    </div>
);

export default RoomIdentifier;