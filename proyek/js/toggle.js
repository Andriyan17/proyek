const hamburgerButton = document.getElementById('hamburger-button');
const navigation = document.querySelector('.navigation');

hamburgerButton.addEventListener('click', () => {
  navigation.classList.toggle('active');
});
