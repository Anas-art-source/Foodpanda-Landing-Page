// console.log("hi there")
let navbar = document.querySelector('.navigation')
let hero = document.querySelector('.hero')
let readMorebBtn = document.querySelector('.readMore');
let readMoreSection = document.querySelector('.readMore_data')


readMorebBtn.addEventListener('click', function(e){
    e.preventDefault();
    readMoreSection.classList.toggle('readMore_data--animate')
    readMorebBtn.classList.toggle('readMore--active')

    if (readMoreSection.classList.contains('readMore_data--animate')) {
        readMorebBtn.innerText = 'Hide All';

    } else {
        readMorebBtn.innerText = 'Click Here to Read More!';
    }
    
  
})



let navFunc = function(entries) {
    let [entry] = entries;
    let {top} = entry.boundingClientRect;

    console.log(entry)

    if (entry.isIntersecting) navbar.classList.add('fixed');
    if (!entry.isIntersecting  && top >0) navbar.classList.remove('fixed')
 
}

let windowHeight = window.innerHeight;
let navHeight = navbar.getBoundingClientRect().height;
let rootMarginBottom = navHeight - windowHeight;


let navOption = {
    root: null,
    rootMargin: `0px 0px ${rootMarginBottom}px 0px`,
    threshold: 0
}


let observer = new IntersectionObserver(navFunc, navOption);
observer.observe(hero)



