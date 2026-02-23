const images = document.querySelectorAll('img[data-src]');

const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const img = entry.target
            console.log(`Image loaded: ${img.dataset.src}`)
            img.src = img.dataset.src

            entry.target.classList.add('fade-in')
        }
    })
})

images.forEach(img => imgObserver.observe(img))