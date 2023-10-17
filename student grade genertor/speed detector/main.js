// Constants for speed limits and points
const speedLimit = 70;
const pointsPerKmphAboveLimit = 5;
const maxDemeritPoints = 12;

// Function to calculate demerit points
function calculateDemeritPoints(carSpeed) {
    if (carSpeed <= speedLimit) {
        return "Ok";
    }

    const kmphAboveLimit = carSpeed - speedLimit;
    const demeritPoints = Math.floor(kmphAboveLimit / pointsPerKmphAboveLimit);

    if (demeritPoints > maxDemeritPoints) {
        return `License suspended`;
    }

    return `Points: ${demeritPoints}`;
}
