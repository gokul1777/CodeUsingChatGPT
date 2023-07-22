const destinations = [
    { name: "Paris", description: "The City of Love", rating: 4.8 },
    { name: "New York", description: "The Big Apple", rating: 4.5 },
    { name: "Tokyo", description: "The Capital of Japan", rating: 4.7 },
    { name: "Dubai", description: "The City of Skyscrapers", rating: 4.6 },
    { name: "Barcelona", description: "The City of Gaudi", rating: 4.6 },
    { name: "Almora", description: "Culture of Kumaon", rating: 4.8 },
    // Add more destinations as needed
];

function searchDestinations() {
    const searchInput = document.getElementById("searchInput").value;
    const filteredDestinations = destinations.filter(destination =>
        destination.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    displayDestinations(filteredDestinations);
}

function displayDestinations(destinations) {
    const destinationList = document.getElementById("destinationList");
    destinationList.innerHTML = "";

    destinations.forEach(destination => {
        const destinationDiv = document.createElement("div");
        destinationDiv.innerHTML = `
            <h2>${destination.name}</h2>
            <p>${destination.description}</p>
            <p>Rating: ${destination.rating}</p>
            <hr>
        `;

        destinationList.appendChild(destinationDiv);
    });
}
