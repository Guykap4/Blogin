'use strict'

function toggleMenu() {
  document.body.classList.toggle('menu-open');
  // document.querySelector('.menu-catch').classList.remove('about-down')
  // const elJournalDown = document.querySelector('.journal-dropdown')
  // elJournalDown.style.display = 'none'
}

function toggleModal() {
  document.body.classList.toggle('open-modal');
}

function openJournalClick(ev) {
  ev.stopPropagation();
  document.querySelector('.menu-catch').classList.toggle('about-down');
  const elJournalDown = document.querySelector('.journal-dropdown')
  if (elJournalDown.style.display === 'block') elJournalDown.style.display = 'none'
  else elJournalDown.style.display = 'block';
}