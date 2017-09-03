import React from 'react';
import './Room.css';
import RoomIdentifier from "../RoomIdentifier/RoomIdentifier";
import moment from 'moment';
import classNames from 'classnames';


export const Room = ({code, name, reservations}) => {
    const now = moment();
    let isReserved = false;

    reservations = reservations.map(reservation => {
         reservation.current = now.isBetween(moment(reservation.startDate), moment(reservation.endDate));
         reservation.startDate = moment(reservation.startDate).format("HH:mm");
         reservation.endDate = moment(reservation.endDate).format("HH:mm");

         if (reservation.current) isReserved = true;

         return reservation;
    });

    return <div className={classNames('room', {reserved: isReserved})}>

        <RoomIdentifier code={code} name={name} reserved={isReserved}/>

        <div className="reservations">
            {
                reservations.map((reservation, index) => {
                    if (index <= 3) {
                        return <div className={classNames("reservation", {current: reservation.current})}
                                    key={reservation.id}>
                            {reservation.startDate}&nbsp;-&nbsp;{reservation.endDate}&nbsp;{reservation.subject}
                        </div>;
                    }
                })
            }
        </div>
    </div>
};

export default Room;