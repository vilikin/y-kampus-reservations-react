import moment from "moment";
import config from '../config';

export const fetchReservations = async () => {
    const start = moment("2017-09-04T08:00");
    const end = moment(start).add(20, "hours");

    const response = await fetch(`${config.apiUrl}
    ?start=${start.toISOString()}
    &end=${end.toISOString()}
    &rooms=${config.rooms.join(",")}`);

    return await response.json();
};