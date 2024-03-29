import moment from "moment";
import config from '../config';

export const fetchReservations = async () => {
    const start = moment();
    const end = moment(start).add(24, "hours");
    const rooms = config.rooms.map(room => room.code).join(",");

    try {
        const response = await fetch(`${config.apiUrl}?start=${start.toISOString()}&end=${end.toISOString()}&rooms=${rooms}`);
        const result = await response.json();

        return result.reservations;
    } catch (error) {
        console.error("Could not fetch reservations, returning empty array instead. Error: ", error);
        return [];
    }
};