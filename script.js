document.querySelectorAll('.nav-items > li > a').forEach(function(link) {
    link.addEventListener('click', function() {
        // 현재 선택된 링크의 형제 요소들로부터 'selected' 클래스 제거
        this.parentElement.parentElement.querySelectorAll('a').forEach(function(siblingLink) {
            siblingLink.classList.remove('selected');
        });
        // 현재 선택된 링크에 'selected' 클래스 추가
        this.classList.add('selected');
    });
});
