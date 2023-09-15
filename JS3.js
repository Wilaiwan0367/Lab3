function openPresent(event) {
    const image = event.currentTarget;
    image.src = 'https://media.giphy.ccom/media.27ppQUOxe7KlG/giphy.gif';
    const title = document.querySelector('h1');
    title.textContent = 'Hooray!' ;
    image.removeEventLiatener('Click' , openPresent);
}
const image = document.querySelector('img');
image.addEventListener('Click', openPresent);