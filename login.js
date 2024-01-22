document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from the JSON file
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => displayRecommendations(data))
        .catch(error => console.error('Error fetching data:', error));
});

function displayRecommendations(recommendations) {
    const recommendationsContainer = document.getElementById('recommendations-container');

    // Iterate through each recommendation
    recommendations.forEach(recommendation => {
        // Create HTML elements for each recommendation
        const recommendationCard = document.createElement('div');
        recommendationCard.classList.add('recommendation-card');

        const recommendationImage = document.createElement('img');
        recommendationImage.src = recommendation.imageUrl;
        recommendationImage.alt = recommendation.name;

        const recommendationName = document.createElement('h3');
        recommendationName.textContent = recommendation.name;

        // Append elements to the recommendation card
        recommendationCard.appendChild(recommendationImage);
        recommendationCard.appendChild(recommendationName);

        // Append the recommendation card to the container
        recommendationsContainer.appendChild(recommendationCard);
    });
}
