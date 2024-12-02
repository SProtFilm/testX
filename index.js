const button = document.getElementById('helloButton');
let moveCount = 0;

button.addEventListener('mouseover', () => {
    const app = document.getElementById('app');

    // Get dimensions of the parent container
    const appWidth = app.offsetWidth;
    const appHeight = app.offsetHeight;

    // Get random new position within the container
    const randomX = Math.floor(Math.random() * (appWidth - button.offsetWidth));
    const randomY = Math.floor(Math.random() * (appHeight - button.offsetHeight));

    // Set the new position of the button
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;

    // Increment move counter
    moveCount++;

    // Trigger firework every 5 moves
    if (moveCount % 5 === 0) {
        createFirework(randomX + button.offsetWidth / 2, randomY + button.offsetHeight / 2);
    }
});

// Function to create a firework effect
function createFirework(centerX, centerY) {
    const app = document.getElementById('app');

    // Create multiple particles for the firework
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('firework-particle');

        // Calculate a random direction for each particle
        const angle = (i / 20) * 2 * Math.PI; // Evenly distribute particles in a circle
        const distance = Math.random() * 150 + 50; // Random distance between 50 and 200px
        const translateX = Math.cos(angle) * distance;
        const translateY = Math.sin(angle) * distance;

        // Set particle position and animation
        particle.style.left = `${centerX}px`;
        particle.style.top = `${centerY}px`;
        particle.style.setProperty('--translate-x', `${translateX}px`);
        particle.style.setProperty('--translate-y', `${translateY}px`);

        // Add particle to the app container
        app.appendChild(particle);

        // Remove particle after animation ends
        setTimeout(() => {
            particle.remove();
        }, 1000); // Match the duration of the animation
    }
}