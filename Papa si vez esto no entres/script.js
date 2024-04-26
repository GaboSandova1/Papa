document.querySelectorAll('.nav_link').forEach(item => {
    item.addEventListener('click', event => {
       event.preventDefault();
       const targetId = item.getAttribute('href');
       document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});