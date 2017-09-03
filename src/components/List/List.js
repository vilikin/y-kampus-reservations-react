import React from 'react';
import './List.css';
import {fetchReservations} from "../../services/api";
import {mapReservationsToRooms} from "../../services/utils";
import Room from "../Room/Room";
import logo from './assets/logo-y-kamp.png';

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

        setTimeout(() => {
            window.location.reload(true);
        }, 1000 * 60 * 10)
    }

    render() {
        return <div className="list">
            <img src={logo} alt="Y-Kampus logo" className="y-kampus"/>
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