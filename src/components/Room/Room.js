import React from 'react';
import './Room.css';
import RoomIdentifier from "../RoomIdentifier/RoomIdentifier";

export const Room = ({code, name, reservations}) => (
    <div className="room">
        <RoomIdentifier code={code} name={name}/>
    </div>
);

export default Room;