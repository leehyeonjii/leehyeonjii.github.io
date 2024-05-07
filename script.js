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
  
/*탭스크롤이동*/
document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.querySelector(".tab_menu ul li:first-child a"); // Home 탭 메뉴 링크 선택

    homeLink.addEventListener("click", function(event) {
        event.preventDefault(); // 기본 링크 동작 방지

        const sectionId = ".back"; // 이동할 섹션의 ID
        const targetSection = document.querySelector(sectionId); // 이동할 섹션 요소 가져오기

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const profileLink = document.querySelector(".tab_menu ul li:nth-child(2) a"); 

    profileLink.addEventListener("click", function(event) {
        event.preventDefault(); 

        const sectionId = "#profile";
        const targetSection = document.querySelector(sectionId); 

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const profileLink = document.querySelector(".tab_menu ul li:nth-child(3) a"); 

    profileLink.addEventListener("click", function(event) {
        event.preventDefault(); 

        const sectionId = "#skills";
        const targetSection = document.querySelector(sectionId); 

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        }
    });
});

