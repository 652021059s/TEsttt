function openEnvelope() {
  document.querySelector('.flap-top').style.transform = 'rotateX(-120deg)';
  setTimeout(() => { window.location.href = "wish.html"; }, 1200);
  paper.style.transform = 'translateY(0%) scale(1)';
paper.style.boxShadow = '0 12px 20px rgba(0,0,0,0.2)';

}
