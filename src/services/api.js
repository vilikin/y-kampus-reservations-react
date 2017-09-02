export const fetchReservations = async (start, end) => {
    const response = await fetch(`http://koti.tamk.fi/~c4vkinnu/ykampus/query.php?start=${start}&end=${end}`);
    return await response.json();
};