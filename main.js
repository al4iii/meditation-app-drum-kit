const keys = document.querySelectorAll('.key');

const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);      
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
};

let removeTransition = (e) => {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
};

document.body.addEventListener('keydown', playSound);
document.body.addEventListener('transitionend', removeTransition);
