import moment from "moment";

export const fetchReservations = async () => {
    const start = moment("2017-09-04T08:00");
    const end = moment(start).add(20, "hours");

    const response = await fetch(`http://koti.tamk.fi/~c4vkinnu/ykampus/query.php?start=${start.toISOString()}&end=${end.toISOString()}`);
    return await response.json();
};