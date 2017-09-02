import config from '../config';

export const mapReservationsToRooms = (reservations) => {
    console.log(reservations);

    return config.rooms.map(room => {
        room.reservations = reservations.filter(reservation => {
            return reservation.resources.some(resource => resource.code === room.code)
        });

        return room;
    });
};