import React from 'react';
import './List.css';
import {fetchReservations} from "../../services/api";
import {mapReservationsToRooms} from "../../services/utils";
import Room from "../Room/Room";

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
        return <div className="list">
            {
                this.state.rooms.map(room => (
                    <Room {...room}/>
                ))
            }
        </div>;
    }
}

export default List;