const likeButtons = document.querySelectorAll('.card_btn');

likeButtons.forEach(likeButton => {
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('card_btn--like');
  });
});