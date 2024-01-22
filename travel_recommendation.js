document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from the JSON file
    fetch('./travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
          
            displayRecommendations(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

function displayRecommendations(data) {
    const recommendationsContainer = document.getElementById('recommendations');

    
    data.forEach(recommendation => {
        const recommendationCard = document.createElement('div');
        recommendationCard.classList.add('recommendation-card');

        recommendationCard.innerHTML = `
            <img src="${recommendation.imageUrl}" alt="${recommendation.name}">
            <h3>${recommendation.name}</h3>
            <p>${recommendation.description}</p>
        `;

        recommendationsContainer.appendChild(recommendationCard);
    });
}
const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
const newYorkTime = new Date().toLocaleTimeString('en-US', options);
console.log("Current time in New York:", newYorkTime);