const mobileMenuIcon = document.querySelector('.fa-bars');

mobileMenuIcon.addEventListener('click', function(){
  const mobileNavHeader = document.querySelector('.mobileNavHeader');

  mobileNavHeader.classList.toggle('hidden');
  mobileNavHeader.classList.toggle('showMe');
})