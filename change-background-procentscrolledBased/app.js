const smoothThresholds = []

for(i = 0; i <= 100; i++) {
    smoothThresholds.push(i / 100)
}


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
            const ratio = entry.intersectionRatio
            entry.target.style.backgroundColor = `rgba(0, 255, 0, ${ratio})`
        }
        
        else {
        console.log('box is hidden')
        entry.target.style.backgroundColor = `lightcoral`
    }
    })
  }

const observer = new IntersectionObserver(callback, options)

observer.observe(box)