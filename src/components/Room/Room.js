import React from 'react';
import './Room.css';
import RoomIdentifier from "../RoomIdentifier/RoomIdentifier";
import moment from 'moment';
import classNames from 'classnames';

export class Room extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            now: moment(),
            isReserved: false,
            reservations: this.props.reservations
        };
    }

    componentWillMount() {
        this.state.reservations = this.props.reservations.map(reservation => {
            reservation.current = this.state.now.isBetween(moment(reservation.startDate), moment(reservation.endDate));
            reservation.start = moment(reservation.startDate).format("HH:mm");
            reservation.end = moment(reservation.endDate).format("HH:mm");

            if (reservation.current) this.state.isReserved = true;

            return reservation;
        });

        setTimeout(() => {
            this.forceUpdate();
        }, 1000)
    }

    render() {
        return <div className={classNames('room', {reserved: this.state.isReserved})}>

            <RoomIdentifier code={this.props.code} name={this.props.name} reserved={this.state.isReserved}/>

            <div className="reservations">
                {
                    this.props.reservations.map((reservation, index) => {
                        if (index < 3 && this.state.now.isSameOrBefore(moment(reservation.endDate))) {
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