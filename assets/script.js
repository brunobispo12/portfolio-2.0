// Debounce do Lodash
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll("[data-anime]")
const animationClass = 'animation'

function animationScroll(){
    let windowTop = window.pageYOffset + ((window.innerHeight *3)/4)
    target.forEach(function(el){
        if((windowTop) > el.offsetTop){
            el.classList.add(animationClass)
        }else{
            el.classList.remove(animationClass)
        }
    })
}

animationScroll()


if(target.length) {
    window.addEventListener('scroll', debounce(function() {
      animationScroll();
    }, 100));
}

