const header = document.querySelector(".nav-wrapper");
const section = document.querySelector(".hero");

const sectionOptions = {
    rootMargin:"-50px 0px 0px 0px"
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        //console.log(entry.target);
        if (!entry.isIntersecting) {
            header.classList.add('scrolled');
        } else if (entry.isIntersecting) {
            header.classList.remove('scrolled');
        }
    })
}, sectionOptions);

observer.observe(section);