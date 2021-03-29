const header = document.querySelector(".nav-wrapper");
const section = document.querySelector(".hero");

const sectionOptions = {
    rootMargin:"-50px 0px 0px 0px"
};

const observer1 = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (screen.width > 900) {
            if (!entry.isIntersecting) {
                header.classList.add('hide');
            } else if (entry.isIntersecting) {
                header.classList.remove('hide');
            }
        } else {
            if (!entry.isIntersecting) {
                header.classList.add('scrolled');
            } else if (entry.isIntersecting) {
                header.classList.remove('scrolled');
            }
        }
    })
}, sectionOptions);

observer1.observe(section);


const fab = document.querySelector(".fixed-action-btn");
const observer2 = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (screen.width > 900) {
            if (entry.isIntersecting) {
                fab.classList.add('hide');
            } else if (!entry.isIntersecting) {
                fab.classList.remove('hide');
            }
        } else fab.classList.add('hide');
    })
}, sectionOptions);

observer2.observe(section);