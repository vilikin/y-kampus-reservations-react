import config from '../config';

export const mapReservationsToRooms = (reservations) => {
    console.log(reservations);

    return config.rooms.map((room, index) => {
        room.reservations = reservations.filter(reservation => {
            return reservation.resources.some(resource => resource.code === room.code)
        });

        if (index == 0) {

            room.reservations.push({
                id: 1,
                subject: "Moi Vili",
                startDate: "2017-09-03T13:00:00",
                endDate: "2017-09-03T21:00:00",
            });

            room.reservations.push({
                id: 2,
                subject: "Moi Vili2",
                startDate: "2017-09-02T09:45:00",
                endDate: "2017-09-02T10:40:00",
            });
        } else {
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

            room.reservations.push({
                id: 4,
                subject: "Tää on tosi pitkä varaus, mitä sen nimelle tapahtuu? Ylläripylläri, ei voi tietää.",
                startDate: "2017-09-02T09:45:00",
                endDate: "2017-09-02T10:40:00",
            });

            room.reservations.push({
                id: 5,
                subject: "Tää on tosi pitkä varaus, mitä sen nimelle tapahtuu? Ylläripylläri, ei voi tietää.",
                startDate: "2017-09-02T09:45:00",
                endDate: "2017-09-02T10:40:00",
            });
        }

        return room;
    });
};