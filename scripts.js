// Handle Tab Switching
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tabContent = document.querySelector(`#${button.dataset.tab}`);

        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        tabContent.classList.add('active');
    });
});

// Handle Add Image Button
document.querySelector('.add-image-button').addEventListener('click', () => {
    const gallery = document.querySelector('.gallery');
    const newImage = document.createElement('img');
    newImage.src = 'https://via.placeholder.com/100'; // Placeholder image
    gallery.appendChild(newImage);
});
