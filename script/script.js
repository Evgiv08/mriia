let backButton = document.querySelector('.back-button');

backButton.addEventListener('click', () => {
    console.log('hello');
    window.history.back();
});