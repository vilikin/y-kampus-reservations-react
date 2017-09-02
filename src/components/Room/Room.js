import React from 'react';
import './Room.css';
import RoomIdentifier from "../RoomIdentifier/RoomIdentifier";
import moment from 'moment';

export const Room = ({code, name, reservations}) => (
    <div className="room">
        <RoomIdentifier code={code} name={name}/>

        <div className="reservations">
            {
                reservations.map(reservation => {
                    const startTime = moment(reservation.startDate).format("hh:mm");
                    const endTime = moment(reservation.endDate).format("hh:mm");

                    return <div className="reservation"
                        key={reservation.id}>{startTime}-{endTime}&nbsp;{reservation.subject}</div>
                })
            }
        </div>
    </div>
);

export default Room;