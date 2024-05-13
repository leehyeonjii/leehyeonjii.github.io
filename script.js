/*탭이동*/
document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll('.tab_menu ul li a');
    menuItems.forEach(function(item) {
      item.addEventListener('click', function(event) {
        event.preventDefault();
        var current = document.querySelector('.tab_menu ul li a.on');
        current.classList.remove('on');
        this.classList.add('on');
      });
    });
  });
  
document.addEventListener('DOMContentLoaded', function() {
    const profileLink = document.querySelector('.sidebar .nav li:nth-child(2) a');

    profileLink.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector('.profile').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const profileLink = document.querySelector('.sidebar .nav li:nth-child(3) a');

    profileLink.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector('.skills').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const profileLink = document.querySelector('.sidebar .nav li:nth-child(4) a');

    profileLink.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector('.archive').scrollIntoView({
            behavior: 'smooth'
        });
    });
});


