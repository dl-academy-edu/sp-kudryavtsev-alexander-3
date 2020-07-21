
const backToTop = document.querySelector('.back-to-top_js')


window.addEventListener('scroll', function () {
    if (window.pageYOffset > 900) {
      backToTop.classList.add('back-to-top--active');
    } else {
      backToTop.classList.remove('back-to-top--active');
    }
  })

  
backToTop.addEventListener('click', function () {
    window.scrollTo(0, 0);

})