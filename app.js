const changeDisplay = () => {
    const list = document.querySelectorAll('.vrste-treniranja__lista li');
    const containers = document.querySelectorAll('#vrste-treniranja .container');
    const display = document.querySelector('.vrste-treniranja__displej')
    containers[0].classList.add('show-container')
    
    list.forEach((item, index) => {
        item.addEventListener('click', () => {
            list.forEach(link => {
                link.classList.remove('active')
            })
            list[index].classList.add('active')
            containers.forEach(container => {
                container.classList.remove('show-container')
            })
            containers[index].classList.add('show-container')
            display.style.width = `${containers[0].offsetHeight}`;
        })
    })
}


const scrollItems = () => {
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-in');
    const slidersLeft = document.querySelectorAll('.slide-left');
    const slidersRight = document.querySelectorAll('.slide-right');
    const options = {
        rootMargin: "300px 0px 0px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else{
                entry.target.classList.add('appear');
                /* appearOnScroll.unobserve(entry.target); */
            }
        })
    }, options);

    faders.forEach(fader => {
        appearOnScroll.observe(fader)
    })

    sliders.forEach(slider => {
        appearOnScroll.observe(slider)
    })

    slidersLeft.forEach(slider => {
        appearOnScroll.observe(slider)
    })

    slidersRight.forEach(slider => {
        appearOnScroll.observe(slider)
    })
}

changeDisplay();
scrollItems();