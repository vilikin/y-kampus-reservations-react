import config from '../config';
import moment from 'moment';

export const mapReservationsToRooms = (reservations) => {
    console.log(reservations);
    let today = moment();

    return config.rooms.map(room => {
        room.reservations = reservations.filter(reservation => {
            if (today.date() === moment(reservation.startDate).date()) {
                return reservation.resources.some(resource => resource.code === room.code)
            }
        });

        return room;
    });
};