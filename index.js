// after clicking on the button check browser page console for the location

const button = document.querySelector("button");

button.addEventListener("click", () => {
    // Requesting user's location
    navigator.geolocation.getCurrentPosition(
        (position) => {
            // Getting latitude & longitude from the position object
            const { latitude, longitude } = position.coords;

            // Constructing the geocoding API URL
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

            // Fetching data from the geocoding API
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    console.table(data.address);
                })
                .catch((error) => {
                    console.error("Error fetching data from API:", error);
                });
        },
        (error) => {
            console.error("Geolocation error:", error.message);
        }
    );
});
