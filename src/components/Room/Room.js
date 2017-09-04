import React from 'react';
import './Room.css';
import RoomIdentifier from "../RoomIdentifier/RoomIdentifier";
import moment from 'moment';
import classNames from 'classnames';

export class Room extends React.Component {
    componentWillMount() {
        setInterval(() => {
            this.forceUpdate();
        }, 10000)
    }

    render() {
        const now = moment();
        let isReserved = false;

        let reservations = this.props.reservations.map(reservation => {
            reservation.current = now.isBetween(moment(reservation.startDate), moment(reservation.endDate));
            reservation.start = moment(reservation.startDate).format("HH:mm");
            reservation.end = moment(reservation.endDate).format("HH:mm");

            if (reservation.current) isReserved = true;

            return reservation;
        });

        return <div className={classNames('room', {reserved: isReserved})}>

            <RoomIdentifier code={this.props.code} name={this.props.name} reserved={isReserved}/>

            <div className="reservations">
                {
                    reservations.map((reservation, index) => {
                        if (index < 3 && now.isSameOrBefore(moment(reservation.endDate))) {
                            return <div className={classNames("reservation", {current: reservation.current})}
                                        key={reservation.id}>
                                {reservation.start}&nbsp;-&nbsp;{reservation.end}&nbsp;{reservation.subject}
                            </div>;
                        }
                    })
                }
            </div>
        </div>
    }
}

export default Room;