function calculateDeliveryTime(houses, speed) {
    function calculateDistance(point1, point2) {
        const [x1, y1] = point1;
        const [x2, y2] = point2;
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    let totalDistance = 0;
    let currentLocation = [0, 0];

    for (let house of houses) {
        totalDistance += calculateDistance(currentLocation, house);
        currentLocation = house;
    }

    totalDistance += calculateDistance(currentLocation, [0, 0]);
    const totalTime = totalDistance / speed;

    // Format the result to 2 decimal places
    return totalTime.toFixed(2);
}

// Example usage
const houses = [[1, 2], [3, 4], [5, 6]];
const speed = 10; // in km/h
console.log(calculateDeliveryTime(houses, speed)); // Output: "1.57"
