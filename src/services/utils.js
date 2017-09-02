import config from '../config';

export const mapReservationsToRooms = (reservations) => {
    console.log(reservations);

    return config.rooms.map(room => {
        room.reservations = reservations.filter(reservation => {
            return reservation.resources.some(resource => resource.code === room.code)
        });

        room.reservations.push({
            id: 1,
            subject: "Moi Vili",
            startDate: "2017-09-02T18:00:00",
            endDate: "2017-09-02T21:00:00",
        });

        room.reservations.push({
            id: 2,
            subject: "Moi Vili2",
            startDate: "2017-09-02T09:45:00",
            endDate: "2017-09-02T10:40:00",
        });

        room.reservations.push({
            id: 3,
            subject: "Moi Vili3",
            startDate: "2017-09-02T09:45:00",
            endDate: "2017-09-02T10:40:00",
        });
        return room;
    });
};