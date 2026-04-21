// Generate notebook rings
const spirals = document.querySelector('.spirals');

function drawSpirals() {
  spirals.innerHTML = '';
  const count = Math.floor(document.querySelector('.notebook').offsetHeight / 32);
  for (let i = 0; i < count; i++) {
    const loop = document.createElement('div');
    loop.className = 'spiral-loop';
    spirals.appendChild(loop);
  }
}

drawSpirals();
window.addEventListener('resize', drawSpirals);

// Helps with flipping the cards, toggles the flipped class and the aria-hiddens
// on the back of the cards to allow their contents to be read by screen readers 
// and uses the aria-live to announce a change has been made.
var status = document.getElementById('flip-status');

document.querySelectorAll('.card-wrap').forEach(function(card) {
  card.addEventListener('click', function() {
    card.classList.toggle('flipped');

    var front = card.querySelector('.card-front');
    var back = card.querySelector('.card-back');
    var isFlipped = card.classList.contains('flipped');

    front.setAttribute('aria-hidden', isFlipped ? 'true' : 'false');
    back.setAttribute('aria-hidden', isFlipped ? 'false' : 'true');

    status.textContent = isFlipped
      ? 'Card flipped. Showing details.'
      : 'Card flipped. Showing photo.';
  });
});
