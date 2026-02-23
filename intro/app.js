// select the element we want to waatch
const box = document.querySelector('.box')

// define the options of the observer
const options = {
    treshold: 0.5,
    root: null
  }

  const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('box is visible')
            entry.target.classList.add('active')
        }
        
        else {
        console.log('box is hidden')
        entry.target.classList.remove('active')
    }
    })
  }

const observer = new IntersectionObserver(callback, options)

observer.observe(box)