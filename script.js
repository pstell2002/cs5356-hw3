document.addEventListener("DOMContentLoaded", async () => {
    const apiKey = "Wi3PmUA69R3glarVndYf1caAXJXdkjJqcjRIgEAp"; 
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("nasa-title").textContent = data.title;
        document.getElementById("nasa-explanation").textContent = data.explanation;
        
        const nasaImage = document.getElementById("nasa-image");
        nasaImage.src = data.url;
        nasaImage.style.display = "block";
    } catch (error) {
        document.getElementById("nasa-title").textContent = "Failed to load NASA data";
        document.getElementById("nasa-explanation").textContent = "There was an error fetching the data.";
    }
});
