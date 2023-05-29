//Navbar
const togglers = document.querySelectorAll('#toggler');
const nav = document.querySelector('.navbar > ul');

togglers.forEach(btn => {
    btn.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
})

//Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => {
    observer.observe(el);
});