import React from 'react';
import './List.css';
import {fetchReservations} from "../../services/api";
import {mapReservationsToRooms} from "../../services/utils";
import Room from "../Room/Room";
import moment from 'moment';

export class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rooms: []
        }
    }

    async componentWillMount() {
        const reservations = await fetchReservations();

        this.setState({
            rooms: mapReservationsToRooms(reservations)
        });
    }

    render() {
        const today = moment();

        return <div className="list">
            <div className="y-kampus">{today.format("DD.MM.YYYY")} Y-Kampus tilavaraukset</div>
            {
                this.state.rooms.map(room => (
                    <Room key={room.code}
                          {...room}/>
                ))
            }
        </div>;
    }
}

export default List;